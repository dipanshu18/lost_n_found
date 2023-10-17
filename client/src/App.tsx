import { Outlet, createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Home from "./pages/Home.tsx";
import YourResponses from "./pages/YourResponses.tsx";
import Post from "./pages/Post.tsx";
import Profile from "./pages/Profile.tsx";
import ItemDetail from "./components/ItemDetail.tsx";
import YourListings from "./pages/YourListings.tsx";
import UserItemDetail from "./components/UserItemDetail.tsx";

export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
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
    path: "/home/your-listings",
    element: <YourListings />,
  },
  {
    path: "/home/your-responses",
    element: <YourResponses />,
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
    path: "/home/:itemId",
    element: <ItemDetail />,
  },
  {
    path: "/home/:userId/:itemId",
    element: <UserItemDetail />,
  },
]);
