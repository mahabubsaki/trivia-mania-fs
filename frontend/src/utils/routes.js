import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import Quize from "../Components/Quize";
import Quizes from "../Components/Quizes";
import Register from "../Components/Register";
import UserLayout from "../Layout/UserLayout";
import axios from 'axios';

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
                element: <Quizes />,
                loader: async () => fetch('http://localhost:5000/quizes')
            },
            {
                path: "/quize/:qid",
                element: <Quize />,
                loader: async ({ params }) => {
                    const { data } = await axios.get(`https://openapi.programming-hero.com/api/quiz/${params.qid}`);
                    const finalData = data.data;
                    const { data: data2 } = await axios.get(`http://localhost:5000/quizes/${params.qid}`);
                    return { ...finalData, ...data2 };
                }
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