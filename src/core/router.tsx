import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Homepage } from "../pages/HomePage/HomePage";
import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage/PrivacyPolicyPage";
import { TermsOfServicePage } from "../pages/TermsOfServicePage/TermsOfServicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "terms-of-service",
        element: <TermsOfServicePage />,
      },
    ],
  },
]);
