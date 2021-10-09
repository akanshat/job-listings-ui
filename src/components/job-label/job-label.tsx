import React from "react";
import { colors } from "../../styles/colors";
import { LabelTypes } from "../../types";
import styles from "./job-label.module.css";



// type JobLabelTypes= keyof typeof LabelTypes;

const JobLabel = ( {label}:{label:string} ): JSX.Element => {
  return (
    <span
      className={styles.label}
      style={{
        backgroundColor:
          label === LabelTypes.FEATURED ? colors.secondary : colors.primary,
      }}
    >
      {label}
    </span>
  );
};

export default JobLabel;
