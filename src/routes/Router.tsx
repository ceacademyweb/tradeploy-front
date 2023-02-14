import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import AppTemplate from "../components/templates/AppTemplate";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import AuthTemplate from "../components/templates/AuthTemplate";
import Subscriptions from "../components/pages/Subscriptions";
import User from "../components/pages/UserNew";
import Renewal111 from "../components/pages/Renewal111";
import Renewal from "../components/pages/Renewal";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppTemplate />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/suscribirse",
        element: <Subscriptions/>
      },
      {
        path: "/suscripcion/nuevo/:id",
        element: <User/>
      },
      {
        path: "/suscripcion/renovacion/:id",
        element: <Renewal/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  }
])

export default Router
