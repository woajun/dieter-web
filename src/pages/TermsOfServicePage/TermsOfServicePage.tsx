import styles from "./TermsOfServicePage.module.scss";
import { TermsOfService } from "./component/TermsOfService";

export const TermsOfServicePage = () => {
  return (
    <div className={styles.background}>
      <TermsOfService />
    </div>
  );
};
