import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./routes/Home";
import Experience from "./routes/Experience/Experience";
import Skills from "./routes/Skills";
import Projects from "./routes/Projects";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "experience",
    element: <Experience></Experience>,
  },
  {
    path: "skills",
    element: <Skills></Skills>,
  },
  {
    path: "projects",
    element: <Projects></Projects>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
