import React from "react";
import PostLabel from "../PostLabel/PostLabel";
import styles from "./PostsList.module.scss";

export const PostsList: React.VoidFunctionComponent = () => {
  const renderList = () => {
    const posts = [];
    for (let x = 0; x < 10; x++) {
      posts.push(<PostLabel data={`post numer: ${x + 1}`} />);
    }
    return posts;
  };

  return <div className={styles.postsList}>{renderList()}</div>;
};
export default PostsList;
