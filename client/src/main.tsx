import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Home from "./pages/Home.tsx";
import Responses from "./pages/Responses.tsx";
import Post from "./pages/Post.tsx";
import Profile from "./pages/Profile.tsx";
import ItemDetail from "./components/ItemDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/home/responses",
    element: <Responses />,
  },
  {
    path: "/home/post",
    element: <Post />,
  },
  {
    path: "/home/profile",
    element: <Profile />,
  },
  {
    path: "/home/itemId",
    element: <ItemDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
