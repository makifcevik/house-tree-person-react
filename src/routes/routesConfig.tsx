import AboutPage from "@/pages/AboutPage";
import Layout from "../components/layout/Layout";
import { HomePage } from "../pages/home/HomePage";
import DemoPage from "../pages/DemoPage";
import LoginPage from "../pages/LoginPage";
import PublicationsAndReferencesPage from "../pages/PublicationsAndReferencesPage";
import SignupPage from "../pages/SignupPage";
import TestPage from "../pages/TestPage";
import UserProfileTest from "../pages/UserProfileTest";
import UsersTest from "../pages/UsersTest";
import ROUTES from "./routes";
import ContactPage from "@/pages/ContactPage";
import PsychologicalFeaturesPage from "@/pages/PsychologicalFeaturesPage";
import SampleDataPage from "@/pages/SampleDataPage";
import path from "path";
import NotFoundPage from "@/pages/NotFoundPage";
import { Navigate } from "react-router-dom";

const routesConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.DEMO, element: <DemoPage /> },
      { path: ROUTES.SIGNUP, element: <SignupPage /> },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      {
        path: ROUTES.PUBLICATIONS_AND_REFERENCES,
        element: <PublicationsAndReferencesPage />,
      },
      { path: ROUTES.PSYCHOLOGICAL_FEATURES, element: <PsychologicalFeaturesPage /> },
      { path: ROUTES.SAMPLE_DATA, element: <SampleDataPage /> },
      { path: ROUTES.CONTACT, element: <ContactPage /> },
      { path: ROUTES.USERS, element: <UsersTest /> },
      { path: ROUTES.USER_PROFILE, element: <UserProfileTest /> },
      { path: "/404", element: <NotFoundPage /> },
      { path: "*", element: <Navigate to='/404' replace /> },
    ],
  },
];

export default routesConfig;
