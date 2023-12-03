import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home/Home";
import { Chapter } from "./components/Chapter/Chapter";
import reportWebVitals from "./reportWebVitals";
import { DrawerContextProvider } from "./context/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chapter/:id",
    element: <Chapter />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DrawerContextProvider>
      <RouterProvider router={router} />
    </DrawerContextProvider>
  </React.StrictMode>
);

reportWebVitals();
