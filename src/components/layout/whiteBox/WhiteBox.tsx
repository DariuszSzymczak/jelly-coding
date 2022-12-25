import React from 'react';
import styles from './WhiteBox.module.scss';

type Props = {
    children?: JSX.Element;
}

export const WhiteBox: React.VoidFunctionComponent<Props> = ({ children }) => {

    return <div className={styles.whiteBox}>
        {children}
    </div>;
};
export default WhiteBox;