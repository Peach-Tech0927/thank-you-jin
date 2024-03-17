"use client";
import { useEffect, useRef } from "react";
import Subheader from "./components/Subheader";
import Tabpanel from "./components/Tabpanel";

import styles from "./css/style.module.css";

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // コンテナへの参照を作成

  useEffect(() => {
    // 花びらを生成する関数
    const createPetal = () => {
      const petalEl = document.createElement("span");
      petalEl.className = styles["petal"];
      const minSize = 10;
      const maxSize = 15;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      petalEl.style.width = `${size}px`;
      petalEl.style.height = `${size}px`;
      petalEl.style.left = `${Math.random() * window.innerWidth}px`;
      sectionRef.current?.appendChild(petalEl);

      // // 一定時間が経てば花びらを消す
      // setTimeout(() => {
      //   // コンポーネントがアンマウントされていないか確認
      //   if (sectionRef.current) {
      //     petalEl.remove();
      //   }
      // }, 100000000000000);
    };

    // 花びらを生成する間隔をミリ秒で指定
    const intervalId = setInterval(createPetal, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div ref={sectionRef} className={styles["cherry-blossom-container"]}>
        <Subheader />
        <Tabpanel />
      </div>
    </>
  );
};

export default Home;
