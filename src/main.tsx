import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppComponent from "./views/AppComponent";
import AllCharacterPage from "./views/pages/AllCharactersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent Page={AllCharacterPage}></AppComponent>
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);
