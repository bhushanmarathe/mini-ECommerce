import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import NotFound from "./pages/NotFound/NotFound";
import ErrorPage from "./pages/Error/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
