import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";

import "./index.css";
import AuthLayout from "./layouts/AuthLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import Admin from "./pages/admin";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import Post from "./pages/Post";
import ProfileStudent from "./pages/ProfileStudent";
import ProfileUniversity from "./pages/ProfileUniversity";
import Rating from "./pages/Rating";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "registration",
            element: <Registration />,
          },
        ],
      },

      {
        path: "/",
        element: <DefaultLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/post",
            element: <Post />,
          },
          {
            path: "/rating",
            element: <Rating />,
          },
          {
            path: "/profile",
            element: <ProfileStudent />,
          },
          {
            path: "/profile-university",
            element: <ProfileUniversity />,
          },
          {
            path: "/adminPanel",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
