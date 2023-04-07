import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";

import Admin from "./routes/Admin/Admin";
import Home from "./routes/Home/Home";
import EditPost from "./routes/Post/EditPost";
import NewPost from "./routes/Post/NewPost";
import Post from "./routes/Post/Post";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      ,
      {
        path: "/posts/edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
