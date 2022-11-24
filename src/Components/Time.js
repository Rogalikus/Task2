import { React, useState } from "react";
import styles from "./Time.module.css";

export const CurrentTime = () => {
  let [date, editDate] = useState("");
  setInterval(() => editDate(new Date().toLocaleString()), 1000);

  return <div className={styles.time}>Current Time : {date}</div>;
};
