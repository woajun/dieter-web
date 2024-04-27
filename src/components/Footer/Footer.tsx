import { Link, Modal } from "@mui/material";
import styles from "./Footer.module.scss";
import { useEffect, useState } from "react";
import { useMatches, useNavigate, useNavigation } from "react-router-dom";
import { Text } from "../Text";

export const Footer = () => {
  const [open, setOpen] = useState(false);
  const matches = useMatches();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const handleClose = () => {
    navigate("#");
  };

  useEffect(() => {
    console.log(matches);
    console.log(navigation.location);
    const path = window.location.hash;

    // URL이 "#/privacy-policy"일 때 모달 열기
    if (path === "#/privacy-policy") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.policiesBox}>
            <Link color="inherit" underline="none" href="/privacy-policy">
              개인정보처리방침
            </Link>
            <Link color="inherit" underline="none" href="/terms-of-service">
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
      <Modal open={open} onClose={handleClose}>
        <div>privacy-policy</div>
      </Modal>
    </>
  );
};
