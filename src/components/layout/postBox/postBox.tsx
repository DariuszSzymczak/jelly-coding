import React from 'react';
import styles from './postBox.module.scss';

type Props = {
    children?: JSX.Element;
}

export const postBox: React.VoidFunctionComponent<Props> = ({ children }) => {

    return <div className={styles.postBox}>
        {children}
    </div>;
};
export default postBox;