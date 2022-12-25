import SectionHeader from '@/components/layout/headers/sectionHeader/SectionHeader';
import Sidebar from '@/components/layout/NavBar/Sidebar/Sidebar';
import WhiteBox from '@/components/layout/whiteBox/WhiteBox';

import HeadingPost from '@/components/posts/HeadingPost/HeadingPost';
import NavBar from '@components/layout/NavBar';
import styles from './MainView.module.scss';
export const MainView: React.VoidFunctionComponent = () => {
    return <div id="main-box">
        <NavBar />
        <div className={styles.sidebarsBox}>
            <Sidebar width={70} >
                <>
                    <HeadingPost title="Testowy Post na Głównej" />
                    <SectionHeader title="Fresh Posts" />
                </>
            </Sidebar>
            <Sidebar width={30} >
                <>
                    <WhiteBox>
                        <>
                            <img className={styles.miniJellyFish} src="assets/favicon/favicon.svg" alt="jellyfish" />
                            <h3>Pretty side of the web</h3>
                        </>
                    </WhiteBox>
                    <SectionHeader title="Fresh Projects" center />
                    <WhiteBox><h3>Jelly KanBan</h3></WhiteBox>
                    <WhiteBox><h3>Jelly React Course : Level 1 </h3></WhiteBox>
                </>
            </Sidebar>

        </div>
    </div>;
};
export default MainView;