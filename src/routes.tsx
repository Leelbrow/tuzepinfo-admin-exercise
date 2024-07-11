import AppShell from "./app-shell/AppShell";
import ProductListPage from "./pages/product-list/ProductListPage";

const routes = [
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        path: "products",
        element: <ProductListPage />,
      },
    ],
  },
];

export default routes;
