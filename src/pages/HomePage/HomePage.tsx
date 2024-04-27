import { Download } from "./component/Download";
import { Footer } from "./component/Footer";
import styles from "./HomePage.module.scss";

export const Homepage = () => {
  return (
    <div className={styles.background}>
      <Download />
      <Footer />
    </div>
  );
};
