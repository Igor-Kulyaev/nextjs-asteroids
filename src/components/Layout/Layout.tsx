import {ReactNode} from "react";
import cls from "./Layout.module.css";
import {Header} from "@/src/components/Header/Header";
import Image from "next/image";
import {PlanetImage} from "@/src/components/PlanetImage/PlanetImage";
import {Cart} from "@/src/components/Cart/Cart";

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
