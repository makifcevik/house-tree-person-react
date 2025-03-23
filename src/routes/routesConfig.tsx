import Layout from "../components/layout/Layout";
import { HomePage } from "../pages/home/HomePage";
import LoginPage from "../pages/LoginPage";
import PublicationsPage from "../pages/PublicationsPage";
import SignupPage from "../pages/SignupPage";
import ROUTES from "./routes";

const routesConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.SIGNUP, element: <SignupPage /> },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.PUBLICATIONS, element: <PublicationsPage /> },
    ],
  },
];

export default routesConfig;
