import { Outlet, useLocation } from 'react-router-dom';
import { Banner } from '../../components/Banner/Banner';
import styles from './TabLayout.module.scss';
import { JLink } from '../JLink';

type Tab = {
  label: string;
  to: string;
};

type Props = {
  tabs: Tab[];
  pageName: string;
};

export const TabLayout = ({ tabs, pageName }: Props) => {
  const { pathname } = useLocation();
  const tabLabel = tabs.find(({ to }) => to === pathname)?.label ?? '';
  return (
    <>
      <div className={styles.background}>
        <Banner />
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            Home {'>'} {pageName}{' '}
            {tabLabel ? (
              <span>
                {'>'} <span className={styles.active}>{tabLabel}</span>
              </span>
            ) : undefined}
          </div>
          <div>
            <div className={styles.tabContainer}>
              {tabs.map((e) => (
                <JLink
                  to={e.to}
                  className={e.to === pathname ? styles.activeTab : styles.tab}
                  key={e.to}
                >
                  {e.label}
                </JLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
