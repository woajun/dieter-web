import { PrivacyPolicy } from "./component/PrivacyPolicy";
import styles from "./PrivacyPolicyPage.module.scss";

export const PrivacyPolicyPage = () => {
  return (
    <div className={styles.background}>
      <PrivacyPolicy />
    </div>
  );
};
