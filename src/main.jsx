import ReactDom from "react-dom/client";

import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/router";

ReactDom.createRoot(document.querySelector("#root")).render(
  <RouterProvider router={router} />
);
