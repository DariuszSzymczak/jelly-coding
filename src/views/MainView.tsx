import SectionHeader from "@/components/layout/headers/sectionHeader/SectionHeader";
import Sidebar from "@/components/layout/NavBar/Sidebar/Sidebar";
import PostsList from "@/components/layout/PostsList/PostsList";
import WhiteBox from "@/components/layout/whiteBox/WhiteBox";

import HeadingPost from "@/components/posts/HeadingPost/HeadingPost";
import NavBar from "@components/layout/NavBar";
import styles from "./MainView.module.scss";
export const MainView: React.VoidFunctionComponent = () => {
  return (
    <div id="main-box">
      <NavBar />
      <div className={styles.sidebarsBox}>
        <Sidebar width={70}>
          <>
            <HeadingPost title="Testowy Post na Głównej" />
            <SectionHeader title="Fresh Posts" />
            <PostsList />
          </>
        </Sidebar>
        <Sidebar width={30}>
          <>
            <WhiteBox>
              <div className={styles.consoleBox}>
                <img
                  className={styles.console}
                  src="assets/images/console.jpg"
                  alt="console"
                />
                <h3>Strefa kursów</h3>
              </div>
            </WhiteBox>
            <SectionHeader title="Fresh Projects" center />
            <WhiteBox>
              <h3>Jelly KanBan</h3>
            </WhiteBox>
            <WhiteBox>
              <h3>Jelly React Course : Level 1 </h3>
            </WhiteBox>
          </>
        </Sidebar>
      </div>
    </div>
  );
};
export default MainView;
