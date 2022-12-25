import React from 'react';
import styles from './Sidebar.module.scss';
type Props = {
    children: JSX.Element;
    width: number;
}

export const Sidebar: React.VoidFunctionComponent<Props> = ({ children, width }) => {

    const computedStyle = { width: width + '%' }

    return <div className={styles.sidebar} style={computedStyle}>
        {children}
    </div>;
};
export default Sidebar;