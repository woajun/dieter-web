import { Link } from "@mui/material";
import styles from "./Footer.module.scss";
import { Text } from "../Text";

export const Footer = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.policiesBox}>
          <Link color="inherit" underline="none" href="/privacy-policy">
            개인정보처리방침
          </Link>
          <Link color="inherit" underline="none" href="/terms-of-service">
            이용약관
          </Link>
          <Link
            color="inherit"
            underline="none"
            href="https://forms.gle/rkqGSnoudGp1YUhn6"
          >
            고객센터
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
