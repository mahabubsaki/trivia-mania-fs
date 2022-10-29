import React, { createContext, useEffect, useState } from 'react';
import app from '../Config/firebase.config';
import { createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
export const AppContext = createContext();
const auth = getAuth(app);
const HigherOrder = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const providerLogin = (provider) => signInWithPopup(auth, provider);
    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logOut = () => signOut(auth);
    const profileSet = (name, url) => updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: url
    });
    const emailSet = (email) => updateEmail(auth.currentUser, email);
    const verfiyEmail = () => sendEmailVerification(auth.currentUser);
    const passwordSet = (password) => updatePassword(auth.currentUser, password);
    const resetEmail = (email) => sendPasswordResetEmail(auth, email);
    const userDelete = () => deleteUser(auth.currentUser);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curruser) => {
            console.log(curruser, 'inside observer');
        });
        return () => unsubscribe();
    }, []);
    return (
        <AppContext.Provider value={{ user, setUser, loading, setLoading, providerLogin, signUp, signIn, logOut, profileSet, emailSet, verfiyEmail, passwordSet, resetEmail, userDelete }}>
            {children}
        </AppContext.Provider>
    );
};

export default HigherOrder;