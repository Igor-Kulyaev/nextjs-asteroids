import {ReactNode} from "react";
import styles from "./Layout.module.css";
import {Header} from "@/src/shared/ui/Header/Header";
import {PlanetImage} from "@/src/shared/ui/PlanetImage/PlanetImage";

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <Header />
      <div className={styles.layoutContainer}>
        <aside className={styles.asideLayout}>
          <PlanetImage />
        </aside>
        <main className={styles.mainLayout}>
          {children}
        </main>
      </div>
    </div>
  );
};
