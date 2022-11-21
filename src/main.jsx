import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import App from "./App";
import "./index.css";
import Movie from "./components/Movie/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
