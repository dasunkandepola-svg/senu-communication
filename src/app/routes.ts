import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { SellingItems } from "./components/SellingItems";
import { Location } from "./components/Location";
import { ContactUs } from "./components/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "items", Component: SellingItems },
      { path: "location", Component: Location },
      { path: "contact", Component: ContactUs },
    ],
  },
], { basename: import.meta.env.BASE_URL });
