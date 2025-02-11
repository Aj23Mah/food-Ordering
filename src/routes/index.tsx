import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    //   {
    //     path: "/gallery",
    //     element: <Gallery />,
    //   },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router
