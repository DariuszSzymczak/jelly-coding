import React from "react";
import styles from "./PostLabel.module.scss";

type Props = {
  data?: string;
};

export const PostLabel: React.VoidFunctionComponent<Props> = ({ data }) => {
  return (
    <div className={`${styles.postLabel} ${styles.whiteBox}`}>
      <img src="/assets/images/console.jpg" alt={`post`} />
      <div className={styles.postData}>
        <h3>Post Testowy</h3>
        <p>{data}</p>
      </div>
    </div>
  );
};
export default PostLabel;
