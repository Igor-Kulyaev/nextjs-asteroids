import {ReactNode} from "react";
import cls from "./Layout.module.css";
import {Header} from "@/components/Header/Header";
import Image from "next/image";
import {PlanetImage} from "@/components/PlanetImage/PlanetImage";
import {Cart} from "@/components/Cart/Cart";

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
            <p>THIS IS MAIN PARAGRAPH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
            <Cart />
          </main>
        </div>
    </div>
  );
};
