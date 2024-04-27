import { Download } from "./component/Download";
import styles from "./HomePage.module.scss";

export const Homepage = () => {
  return (
    <div className={styles.background}>
      <Download />
    </div>
  );
};
