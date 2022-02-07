import React from "react";
import { numberFormatter } from "../../helpers/numberFormatter";
import styles from "./index.module.css";

const InfoBox = ({ icon, label, value }) => (
  <div className={styles.infoBoxContainer}>
    <div className={styles.infoBoxIcon}>{icon}</div>
    <div className={styles.infoBoxData}>
      <span className={styles.infoBoxTitle}>{label}</span>
      <span className={styles.infoBoxValue}>{numberFormatter(value)}</span>
    </div>
  </div>
);

export default InfoBox;
