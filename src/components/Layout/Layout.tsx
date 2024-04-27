import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Navigation style={{ position: "fixed", zIndex: 1 }} />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
