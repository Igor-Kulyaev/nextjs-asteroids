import styles from "./PlanetImage.module.css";
import Image from "next/image";

export const PlanetImage = () => {
  return (
    <div>
      <Image src="/planetImage.png" alt="Planet image" width={436} height={620} className={styles.planetImg} priority />
    </div>
  )
}