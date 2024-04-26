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
    <div className={styles.homeBackground}>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBarBox}>searchbar</div>
      </div>
      <div className={styles.contentsContainer}>
        <div>하나고등학교</div>
        <div>
          <div>
            <button>전체학생수</button>
            <button>학급수</button>
            <button>성비</button>
          </div>
          <div>
            <canvas ref={canvasEl} height={100} />
          </div>
        </div>
        <hr />
        <div>
          <div>설립구분 :공립 </div>
          <div>설립유형 :단설 </div>
          <div>설립일자 : 1989년 01월 26일</div>
          <div>대표번호 :031-447-1147 </div>
          <div>팩스 :031-441-9117 </div>
          <div>주소 :경기도 안양시 만안구 창박로 26</div>
          <div>학생수 : 200명 (남 103명 , 여 97명) </div>
          <div>교원수 : 28명 (남 5명 , 여 23명)</div>
          <div>체육집회공간 :1실 </div>
          <div>관할교육청 :경기도안양과천교육지원청 </div>
          <div>행정실 :031-447-1146 </div>
          <div>교무실 :031-447-1147 </div>
          <div>홈페이지 : https://anyangseo-m.goeay.kr/</div>
        </div>
        <hr />
        <div>
          <div>재학생Q&A</div>
          <div>
            <div>개발자가 되고 싶어요</div>
            <div>답변 10 추천 1 조회 523</div>
          </div>
          <div>
            <div>개발자가 되고 싶어요</div>
            <div>답변 10 추천 1 조회 523</div>
          </div>
          <div>
            <div>개발자가 되고 싶어요</div>
            <div>답변 10 추천 1 조회 523</div>
          </div>
        </div>
        <hr />
        <div>
          <div>연관학교</div>
          <div>
            <div>안양중학교</div>
            <div>공립 │ 1947년 07월 14일 설립 </div>
            <div>경기도 안양시 만안구 와룡로 53</div>
            <div>031-472-9722 </div>
            <div>anyang-m.goeay.kr</div>
          </div>
          <div>
            <div>안양중학교</div>
            <div>공립 │ 1947년 07월 14일 설립 </div>
            <div>경기도 안양시 만안구 와룡로 53</div>
            <div>031-472-9722 </div>
            <div>anyang-m.goeay.kr</div>
          </div>
          <div>
            <div>안양중학교</div>
            <div>공립 │ 1947년 07월 14일 설립 </div>
            <div>경기도 안양시 만안구 와룡로 53</div>
            <div>031-472-9722 </div>
            <div>anyang-m.goeay.kr</div>
          </div>
        </div>
      </div>
    </div>
  );
};
