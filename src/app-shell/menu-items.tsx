import Category from "@mui/icons-material/Category";
import Inventory from "@mui/icons-material/Inventory";
import Sell from "@mui/icons-material/Sell";
import Storefront from "@mui/icons-material/Storefront";
import { MenuItemData } from "./app-shell.types";

const menuItems: readonly MenuItemData[] = [
  {
    name: "Termékek",
    icon: <Sell />,
    url: "/products",
  },
  {
    name: "Kategóriák",
    icon: <Category />,
    url: "/categories",
  },
  {
    name: "Üzletek",
    icon: <Storefront />,
    url: "/stores",
  },
  {
    name: "Árukészletek",
    icon: <Inventory />,
    url: "/inventories",
  },
];

export default menuItems;
