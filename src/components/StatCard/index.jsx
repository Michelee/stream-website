import React from "react";
import { numberFormatter } from "../../helpers/numberFormatter";
import styles from "./index.module.css";

const StatCard = ({ icon, label, value, color, size }) => {
  const boxClasses = [styles.statCardContainer]
  
  if (color === 'yellow') {
    boxClasses.push(styles.statCardYellow)
  } else if(color === 'purple') {
    boxClasses.push(styles.statCardPurple)
  }

  if(size === 'large') {
    boxClasses.push(styles.statCardLarge)
  }

  return (
  <div className={boxClasses.join(' ')}>
    <div className={styles.statCardIcon}>{icon}</div>
    <span className={styles.statCardValue}>{numberFormatter(value)}</span>
    <span className={styles.statCardTitle}>{label}</span>
  </div>
)};

export default StatCard;
