import {IAsteroid} from "@/src/models/asteroidModel";
import {useRouter} from "next/router";
import styles from "./AsteroidDetails.module.css";
import {useMemo} from "react";
import Table from "@/src/shared/ui/Table/Table";

export const AsteroidDetails = ({asteroid}: {asteroid: IAsteroid}) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Время сближения',
        accessor: 'close_approach_date_full',
      },
      {
        Header: 'Скорость км/с',
        accessor: 'relative_velocity.kilometers_per_second',
      },
      {
        Header: 'Расстояние до Земли',
        accessor: 'miss_distance.kilometers',
      },
      {
        Header: 'Орбита',
        accessor: 'orbiting_body',
      },
    ],
    []
  )

  console.log("asteroid", asteroid);
  const data = useMemo(() => asteroid.close_approach_data, [asteroid]);
  const {query} = useRouter();

  return (
    <div className={styles.asteroidWrapper}>
      <h1 className={styles.asteroidTitle}>Астероид {asteroid.name}</h1>
      <div className={styles.asteroidTableWrapper}>
        <div className={styles.asteroidTableName}>Сближения с Землей</div>
        <Table data={data} columns={columns} />
      </div>
    </div>
  )
}