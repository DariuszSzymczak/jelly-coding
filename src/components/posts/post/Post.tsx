import React from 'react';
import styles from './Post.module.scss';

type Props = {
    title: string;
    image: string;
    author: string;
    date: string;
}

export const Post: React.VoidFunctionComponent<Props> = ({ title, image, author, date }) => {

    return <div className={styles.postBox}>
        <img src={image} />
        <div>{author} <img src='assets/circle.svg' /> {date}</div>
        <h1>{title}</h1>

    </div>;
};
export default Post;