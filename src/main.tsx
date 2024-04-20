import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";

import { Provider } from "react-redux";
import "./index.css";
import AuthLayout from "./layouts/AuthLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import Admin from "./pages/admin";
import FinalRegistration from "./pages/auth/FinalRegistration";
import Login from "./pages/auth/Login";
import StudentRegistration from "./pages/auth/StudentRegistration";
import Post from "./pages/Post";
import ProfileStudent from "./pages/ProfileStudent";
import ProfileUniversity from "./pages/ProfileUniversity";
import Rating from "./pages/Rating";
import store from "./redux/store";
import Page from "./pages/landing/Page";

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
            path: "register",
            children: [
              {
                path: "student",
                children: [
                  { path: "", element: <StudentRegistration /> },
                  { path: "university", element: <FinalRegistration /> },
                ],
              },
              { path: "delegate", element: <FinalRegistration /> },
            ],
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
      {
        path: "/landing",
        element: <Page />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
