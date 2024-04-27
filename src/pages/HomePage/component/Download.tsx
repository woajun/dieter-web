import styles from "./Download.module.scss";
import { Button } from "@mui/material";
import { Text } from "../../../components/Text";
import Phone1 from "/src/assets/images/phone1.png";
import Phone2 from "/src/assets/images/phone2.png";

export const Download = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <div className={styles.title1}>
            <Text color="blue" size={16}>
              다이어터에 오신걸 환영합니다.
            </Text>
          </div>
          <div className={styles.title2}>
            <Text color="#0e1133" size={36} bold>
              몸무게, 운동, 식단을 관리해보세요!
            </Text>
          </div>
          <div className={styles.title3}>
            <Text size={24}>몸무게와 운동, 식단을 자세히 관리해보세요.</Text>
          </div>
          <div className={styles.downloadSection}>
            <Button variant="contained">iOS 다운로드</Button>
          </div>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <div className={styles.image1Box}>
              <img src={Phone1} className={styles.image1} alt="" />
            </div>
            <div className={styles.image2Box}>
              <img src={Phone2} className={styles.image2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
