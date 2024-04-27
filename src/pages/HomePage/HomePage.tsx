import { useEffect, useRef } from "react";
import styles from "./HomePage.module.scss";
import { Chart } from "chart.js/auto";

type ChartData = number[];
type ChartLabel = string;

export const Homepage = () => {
  const canvasEl = useRef<HTMLCanvasElement | null>(null);
  const chart = useRef<Chart<"line", ChartData, ChartLabel> | null>(null);

  useEffect(() => {
    if (!canvasEl.current) return;
    Chart.register();
    chart.current = new Chart(canvasEl.current!, {
      type: "line",
      data: {
        labels: ["1", "2"],
        datasets: [
          {
            data: [1, 2],
          },
        ],
      },
    });
    return () => {
      chart.current?.destroy();
    };
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.titleSection}>
        <div className={styles.title1}>다이어터에 오신걸 환영합니다.</div>
        <div className={styles.title2}>몸무게, 운동, 식단을 관리해보세요!</div>
        <div className={styles.title3}>
          몸무게와 운동, 식단을 자세히 관리해보세요.
        </div>
        <div className={styles.downloadSection}>
          <button className={styles.iosDownload}>iOS 다운로드</button>
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <div className={styles.image1Box}>
            <img
              src="/src/assets/images/phone4.png"
              className={styles.image1}
              alt=""
            />
          </div>
          <div className={styles.image2Box}>
            <img
              src="/src/assets/images/phone3.png"
              className={styles.image2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
