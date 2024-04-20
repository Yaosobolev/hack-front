import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

import "./index.css";
import AuthLayout from "./layouts/AuthLayout.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import Admin from "./pages/admin";
import Login from "./pages/auth/Login.jsx";
import Registration from "./pages/auth/Registration.jsx";
import Post from "./pages/Post.jsx";
import ProfileStudent from "./pages/ProfileStudent.jsx";
import ProfileUniversity from "./pages/ProfileUniversity.jsx";
import Rating from "./pages/Rating.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NotFound />,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
