import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JSX } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/components/Layout";
import ColumnDetail from "@/pages/ColumnDetail";
import ColumnList from "@/pages/ColumnList";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import LoginRedirect from "@/pages/LoginRedeirect";
import MyAccount from "@/pages/MyAccount";
import NotFound from "@/pages/NotFound";
import ProductDetail from "@/pages/ProductDetail";
import ProductList from "@/pages/ProductList";
import { RouterPath } from "@/utils/path";

import GlobalStyles from "./globalStyle";
import MyFavorites from "./pages/MyFavorites";
import MyReviews from "./pages/MyReviews";

const router = createBrowserRouter([
  {
    path: RouterPath.root.path,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home.path,
        element: <Home />,
      },
      {
        path: RouterPath.productList.path,
        element: <ProductList />,
      },
      {
        path: RouterPath.columnList.path,
        element: <ColumnList />,
      },
      {
        path: RouterPath.columnDetail.path,
        element: <ColumnDetail />,
      },
      {
        path: RouterPath.productDetail.path,
        element: <ProductDetail />,
      },
      {
        path: RouterPath.myAccount.path,
        element: <MyAccount />,
      },
      {
        path: RouterPath.myReviews.path,
        element: <MyReviews />,
      },
      {
        path: RouterPath.myFavorites.path,
        element: <MyFavorites />,
      },
      {
        path: RouterPath.login.path,
        element: <Login />,
      },
      {
        path: RouterPath.loginRedirect.path,
        element: <LoginRedirect />,
      },
      {
        path: RouterPath.notFound.path,
        element: <NotFound />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

/**
 * The main application component.
 * @returns {JSX.Element} The rendered application component.
 */
function App(): JSX.Element {
  return (
    <div>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
