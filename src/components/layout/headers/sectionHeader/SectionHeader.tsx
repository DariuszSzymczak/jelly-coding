import React from "react";
import styles from "./SectionHeader.module.scss";

type Props = {
  title?: string,
  center?: boolean,
};

export const SectionHeader: React.VoidFunctionComponent<Props> = ({
  title,
  center = false,
}) => {
  return <div className={`${styles.SectionHeader} ${center && styles.center}`}>
    {<h3>{title}</h3>}
    <img src="assets/dividers/divider.svg" className={styles.divider} />
  </div>;
};
export default SectionHeader;
