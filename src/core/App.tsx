import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

export const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
