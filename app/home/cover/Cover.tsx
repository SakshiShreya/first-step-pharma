"use client";

import * as React from "react";
import useWindowDimensions from "@/utils/hooks/useWindowDimensions";
import styles from "./Cover.module.scss";

interface CoverProps {}

const Cover: React.FunctionComponent<CoverProps> = () => {
  const dimensions = useWindowDimensions();
  const desktopStyle = {
    backgroundImage: `url("/images/pills-${dimensions.width < 2000 ? "small" : "big"}.jpg")`
  };
  const mobileStyle = {
    backgroundImage: `url("/images/pills.jpg")`
  };

  return (
    <div className={styles.cont} style={dimensions.device === "desktop" ? desktopStyle : {}}>
      {dimensions.device !== "desktop" && <div className={styles.image} style={mobileStyle} />}
      <div className={`${styles.text} container`}>
        <h1 className={styles.h1}>First Step Pharma</h1>
        <h2 className={`${styles.h2} roboto`}>Pharmaceutical Consultancy</h2>
      </div>
    </div>
  );
};

export default Cover;
