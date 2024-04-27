import styles from "./Navigation.module.scss";
import { useLocation } from "react-router-dom";
import { CSSProperties, ReactNode } from "react";
import { Hamburger } from "./Hamburger";
import { DownSvg } from "../../assets/svgs/DownSvg";
import { KoreaSvg } from "../../assets/svgs/KoreaSvg";
import { AmericaSvg } from "../../assets/svgs/AmericaSvg";
import { JLink } from "../JLink";

const NavItem = ({
  children,
  to,
  intercept,
}: {
  children: ReactNode;
  to: string;
  intercept?: string;
}) => {
  const { pathname } = useLocation();
  const isActive = pathname.startsWith(to);
  return (
    <JLink
      className={isActive ? styles.activeLink : styles.menuLink}
      to={intercept ?? to}
    >
      {children}
    </JLink>
  );
};

export type MenuItem = {
  text: string;
  to: string;
  intercept?: string;
  subMenu?: {
    text: string;
    to: string;
  }[];
};

type Props = {
  style?: CSSProperties;
};

export const Navigation = ({ style }: Props) => {
  const menuItems: MenuItem[] = [
    { text: "About", to: "/about" },
    { text: "Service", to: "/service" },
    {
      text: "Board",
      to: "/board",
      intercept: "/board/press",
      subMenu: [
        { text: "boardPress", to: "/board/press" },
        { text: "boardNews", to: "/board/news" },
      ],
    },
    {
      text: "Contact",
      to: "/contact",
      intercept: "/contact/location",
      subMenu: [
        // { text: 'inquiry', to: '/contact/inquiry' },
        { text: "location", to: "/contact/location" },
        { text: "recruit", to: "/contact/recruit" },
      ],
    },
  ];

  return (
    <nav className={styles.navigation} style={style}>
      <div className={styles.navigationWrapper}>
        <Hamburger menuItems={menuItems} />

        <div className={styles.logo}>
          <JLink to="/"></JLink>
        </div>

        <div className={styles.menu}>
          <ul className={styles.menuUl}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.menuLi}>
                <NavItem to={item.to} intercept={item.intercept}>
                  {item.text}
                </NavItem>
                {item.subMenu && (
                  <ul className={styles.subMenu}>
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavItem to={subItem.to}>{subItem.text}</NavItem>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.language}>
          <div className={styles.languageButton}>
            <>
              <KoreaSvg />
              <span>Korean</span>
            </>
            <DownSvg />
            <ul className={styles.subLanguageUl}>
              <li onClick={() => {}}>
                <KoreaSvg />
                Korean
              </li>
              <li onClick={() => {}}>
                <AmericaSvg />
                English
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
