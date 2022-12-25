import styles from './NavBar.module.scss';
import DayNightSwitch from '@components/controls/DayNightSwitch/DayNightSwitch';
export const NavBar: React.VoidFunctionComponent = () => {
    return <div className={styles.navBar}>
        <div className={styles.navBarBox}>
            <div className={styles.menuGroup}>
                <img className={styles.menuButton} src="assets/icons/menu.svg" />
                <img className={styles.logo} src="assets/logo/logo.svg" />
            </div>
            <div className={styles.menu}>
                <div className={styles.menuLink} > Home</div>
                <div className={styles.menuLink} > Articles</div>
                <div className={styles.menuLink} > Courses</div>
                <div className={styles.menuLink} > About Us</div>
                <div className={styles.menuLink} > Contact</div>
                <div className={styles.socialBox}>
                    <img className={styles.socialIcon} src="assets/social/facebook.svg" />
                    <img className={styles.socialIcon} src="assets/social/instagram.svg" />
                    <img className={styles.socialIcon} src="assets/social/youtube.svg" />
                    <img className={styles.socialIcon} src="assets/social/discord.svg" />
                </div>
            </div>
        </div>
    </div>;
};
export default NavBar;