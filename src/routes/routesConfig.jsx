import Layout from "../components/layout/Layout";
import { HomePage } from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
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
    ],
  },
];

export default routesConfig;
