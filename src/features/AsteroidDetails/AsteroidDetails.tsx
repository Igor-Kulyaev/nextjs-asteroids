import {IAsteroid} from "@/src/models/asteroidModel";
import styles from "./AsteroidDetails.module.css";
import Table from "@/src/shared/ui/Table/Table";
import {GridColDef} from "@mui/x-data-grid";
import {
  convertDateTimeToRusLocale,
  convertStringToRoundedNumber,
  formatIntegerToRusLocale
} from "@/src/shared/utils/utils";
import Image from "next/image";

const columns: GridColDef[] = [
  {
    field: 'close_approach_date_full',
    headerName: 'Время сближения',
    width: 200,
    minWidth: 100,
    maxWidth: 200,
    valueGetter: (params) => {
      const timestamp = Date.parse(params.row?.close_approach_date_full);
      return isNaN(timestamp) ? null : timestamp;
    },
    valueFormatter: (params) => {
      return convertDateTimeToRusLocale(params.id as string);
    },
  },
  {
    field: 'relative_velocity.kilometers_per_second',
    headerName: 'Скорость',
    width: 200,
    valueGetter: (params) => convertStringToRoundedNumber(params.row?.relative_velocity?.kilometers_per_second, 2),
    valueFormatter: (params) => {
      return `${params.value} км/с`
    }
  },
  {
    field: 'miss_distance.kilometers',
    headerName: 'Расстояние до Земли',
    width: 250,
    valueGetter: (params) => {
      return convertStringToRoundedNumber(params.row?.miss_distance?.kilometers, 0);
    },
    valueFormatter: (params) => {
      return `${formatIntegerToRusLocale(params.value)} км`
    }
  },
  {
    field: 'orbiting_body',
    headerName: 'Орбита',
    width: 200,
    minWidth: 100,
    maxWidth: 200
  },
];

export const AsteroidDetails = ({asteroid}: {asteroid: IAsteroid}) => {
  return (
    <div className={styles.asteroidWrapper}>
      <h1 className={styles.asteroidTitle}>Астероид {asteroid.name}</h1>
      <div className={styles.asteroidTableWrapper}>
        <div className={styles.asteroidTableName}>Сближения с Землей</div>
        {asteroid?.close_approach_data && <Table columns={columns} rows={asteroid?.close_approach_data} /> }
        <Image src="/asteroid.png" alt="Planet image" width={400} height={300} className={styles.planetImg} priority />
      </div>
    </div>
  )
}