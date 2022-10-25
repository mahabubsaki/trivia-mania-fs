import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import Quizes from "../Components/Quizes";
import Register from "../Components/Register";
import UserLayout from "../Layout/UserLayout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/quizes",
                element: <Quizes />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },

]);