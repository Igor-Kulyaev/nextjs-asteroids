import {ReactNode} from "react";
import cls from "./Layout.module.css";
import {Header} from "@/src/shared/ui/Header/Header";
import {PlanetImage} from "@/src/shared/ui/PlanetImage/PlanetImage";

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className={cls.layout}>
      <Header />
      <div className={cls.layoutContainer}>
        <aside className={cls.asideLayout}>
          <PlanetImage />
        </aside>
        <main className={cls.mainLayout}>
          {children}
        </main>
      </div>
    </div>
  );
};
