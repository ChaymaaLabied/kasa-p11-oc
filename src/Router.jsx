import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/404";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/:id/details",
          element: <Details />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
