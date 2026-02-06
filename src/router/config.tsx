import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon9-casino-review",
    element: <Home />,
  },
  {
    path: "/pokemon9-casino-registration",
    element: <Home />,
  },
  {
    path: "/pokemon9-casino-bonuses",
    element: <Home />,
  },
  {
    path: "/pokemon9-casino-games",
    element: <Home />,
  },
  {
    path: "/pokemon9-casino-payments",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
