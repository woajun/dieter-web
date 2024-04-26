import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Navigation } from '../Navigation/Navigation';
import styles from './Layout.module.scss';
import { useEffect } from 'react';
// import { SecondFooter } from '../SecondFooter/SecondFooter';

const { wrapper } = styles;

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById('root')?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={wrapper}>
        <Navigation />
        <Outlet />
      </div>
      <Footer />
      {/* <SecondFooter /> */}
    </>
  );
};
