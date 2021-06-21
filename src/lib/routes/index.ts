import { Home, Cart } from "pages";

export const routes = [
  {
    path: "/",
    page: Home,
    exact: true,
  },
  {
    path: "/cart",
    page: Cart,
    exact: true,
  },
];
