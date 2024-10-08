import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/404";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";
import { detailsLoader } from "./loaders/detailsLoader";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/:id/details",
          element: <Details />,
          loader: detailsLoader,
          errorElement: <NotFound />,
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
  ]);

  return <RouterProvider router={router} />;
}
