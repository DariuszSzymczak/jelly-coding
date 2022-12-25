import React from 'react';
import styles from './HeadingPost.module.scss';

type Props = {
    title: string;
}

export const HeadingPost: React.VoidFunctionComponent<Props> = ({ title }) => {

    return <div className={styles.postBox}>
        <h1>{title}</h1>
    </div>;
};
export default HeadingPost;