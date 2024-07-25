import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";
import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
  <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
  </React.StrictMode>
  </MantineProvider>
);