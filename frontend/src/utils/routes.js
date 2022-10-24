import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
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
                path: "/about",
                element: <About />
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