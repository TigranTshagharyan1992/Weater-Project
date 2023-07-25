import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Weather from "./components/Weather";
const router = createBrowserRouter([
    {
        path: "/",
        element: <div><Home /></div>,
    },
    {
        path: "weather/:city",
        element: <Weather />,
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
