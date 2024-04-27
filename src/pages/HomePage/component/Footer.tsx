import { Link } from "@mui/material";
import { Text } from "../../../components/Text";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.policiesBox}>
          <Link color="inherit" underline="none">
            개인정보처리방침
          </Link>
          <Link color="inherit" underline="none">
            이용약관
          </Link>
        </div>
        <div className={styles.labelBox}>
          <Text bold>다이어터(DIETER)</Text>
        </div>
        <div className={styles.prescriptionBox}>
          <Text fontWeight={300}>몸무게 운동 식단을 관리해보세요.</Text>
        </div>
      </div>
    </div>
  );
};
