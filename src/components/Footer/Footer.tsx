import styles from "./Footer.module.scss";
import { useLocation } from "react-router-dom";
import { ArrowUpCircleSvg } from "../../assets/svgs/ArrowUpCircleSvg";
import { JLink } from "../JLink";

const {
  footerContainer,
  footerContents,
  topFooter,
  logo,
  links,
  activeLink,
  link,
  bottomFooter,
  contactInfoContainer,
  contactInfo,
  boldText,
  UpContainer,
} = styles;

export const Footer = () => {
  const { pathname } = useLocation();

  const getLinkStyle = (to: string) => {
    const isActive = pathname.startsWith(to);
    return isActive ? activeLink : link;
  };
  return (
    <footer className={footerContainer}>
      <div className={footerContents}>
        <div className={topFooter}>
          <div className={logo}></div>
          <div className={links}>
            <JLink to="/about" className={getLinkStyle("/about")}>
              About
            </JLink>
            <JLink to="/service" className={getLinkStyle("/service")}>
              Service
            </JLink>
            <JLink to="/board/press" className={getLinkStyle("/board")}>
              Board
            </JLink>
            <JLink to="/contact/location" className={getLinkStyle("/contact")}>
              Contact
            </JLink>
          </div>
        </div>
        <div className={bottomFooter}>
          <div className={contactInfoContainer}>
            <div className={contactInfo}>
              <p>
                <span className={boldText}>T.</span> 82.2.1234 |{" "}
                <span className={boldText}>M.</span> 82.10.1234 |{" "}
                <span className={boldText}>E.</span> abc@naver.com
              </p>
              <p>
                <span className={boldText}>A.</span> {"addr1"}
              </p>
            </div>
            <div className={contactInfo}>
              <p>
                <span className={boldText}>T.</span> 82.2.1234 |{" "}
                <span className={boldText}>FAX.</span> 1234
              </p>
              <p>
                <span className={boldText}>A.</span> {"addr2"}
              </p>
            </div>
            <br />
            <div className={styles.footerCopyright}>{"copyright"}</div>
          </div>
          <div className={UpContainer}>
            <ArrowUpCircleSvg
              onClick={() =>
                document
                  .getElementById("root")
                  ?.scrollTo({ top: 0, behavior: "smooth" })
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
