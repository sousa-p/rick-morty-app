import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppComponent from "./views/AppComponent";
import AllCharacterPage from "./views/pages/AllCharactersPage/AllCharactersPage";
import FavoritesCharactersPage from "./views/pages/FavoritesCharactersPage/FavoritesCharactersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent Page={AllCharacterPage}></AppComponent>,
  },
  {
    path: "/favorites",
    element: <AppComponent Page={FavoritesCharactersPage}></AppComponent>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
