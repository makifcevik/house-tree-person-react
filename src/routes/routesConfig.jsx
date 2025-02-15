import { HomePage } from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ROUTES from "./routes";

const routesConfig = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.SINGUP, element: <SignupPage /> },
  { path: ROUTES.LOGIN, element: <LoginPage /> },
];

export default routesConfig;
