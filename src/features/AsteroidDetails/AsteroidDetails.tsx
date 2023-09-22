import {IAsteroid} from "@/src/models/asteroidModel";
import {useRouter} from "next/router";
import styles from "./AsteroidDetails.module.css";
import {useMemo} from "react";
// import Table from "@/src/shared/ui/Table/Table";
import TableComponent from "./Table";
import MaterialTable from "./MaterialTable";
import MaterialTablePagination from "./MaterialTablePagination";
import GridTable from "@/src/features/AsteroidDetails/GridTable";
import {GridColDef, GridRowsProp, GridValueFormatterParams} from "@mui/x-data-grid";
import {
  convertDateTimeToRusLocale,
  convertStringToRoundedNumber,
  formatIntegerToRusLocale
} from "@/src/shared/utils/utils";
import Image from "next/image";

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing fdsf' },
  { id: 4, col1: 'MUI', col2: 'is Amazing fdsfdsf' },
  { id: 5, col1: 'MUI', col2: 'is Amazing fdsf' },
  { id: 6, col1: 'MUI', col2: 'is Amazing fds' },
  { id: 7, col1: 'MUI', col2: 'is Amazing f' },
];

const columns: GridColDef[] = [
  {
    field: 'close_approach_date_full',
    headerName: 'Время сближения',
    width: 200,
    minWidth: 100,
    maxWidth: 200,
    // valueGetter: (params) => convertDateTimeToRusLocale(params.row?.close_approach_date_full)
    valueGetter: (params) => {
      // Convert date string to timestamp
      const timestamp = Date.parse(params.row?.close_approach_date_full);
      return isNaN(timestamp) ? null : timestamp;
    },
    valueFormatter: (params) => {
      console.log('params', params)
      return convertDateTimeToRusLocale(params.id as string);
    },
  },
  {
    field: 'relative_velocity.kilometers_per_second',
    headerName: 'Скорость',
    // minWidth: 100,
    // maxWidth: 200,
    width: 200,
    valueGetter: (params) => convertStringToRoundedNumber(params.row?.relative_velocity?.kilometers_per_second, 2),
    valueFormatter: (params) => {
      return `${params.value} км/с`
    }
  },
  {
    field: 'miss_distance.kilometers',
    headerName: 'Расстояние до Земли',
    // minWidth: 100,
    // maxWidth: 200,
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

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: 'Время сближения',
  //       accessor: 'close_approach_date_full',
  //     },
  //     {
  //       Header: 'Скорость км/с',
  //       accessor: 'relative_velocity.kilometers_per_second',
  //     },
  //     {
  //       Header: 'Расстояние до Земли',
  //       accessor: 'miss_distance.kilometers',
  //     },
  //     {
  //       Header: 'Орбита',
  //       accessor: 'orbiting_body',
  //     },
  //   ],
  //   []
  // )

  console.log("asteroid?.close_approach_data", asteroid?.close_approach_data);
  const data = useMemo(() => asteroid.close_approach_data, [asteroid]);
  const {query} = useRouter();

  return (
    <div className={styles.asteroidWrapper}>
      <h1 className={styles.asteroidTitle}>Астероид {asteroid.name}</h1>
      <div className={styles.asteroidTableWrapper}>
        <div className={styles.asteroidTableName}>Сближения с Землей</div>
        {/*{asteroid?.close_approach_data?.length && <TableComponent nodes={asteroid?.close_approach_data} />}*/}
        {/*{asteroid?.close_approach_data?.length && <MaterialTable nodes={asteroid?.close_approach_data} />}*/}
        {/*{asteroid?.close_approach_data?.length && <MaterialTablePagination nodes={asteroid?.close_approach_data} />}*/}
        {asteroid?.close_approach_data && <GridTable columns={columns} rows={asteroid?.close_approach_data} /> }
        {/*<Table data={data} columns={columns} />*/}
        <Image src="/asteroid.png" alt="Planet image" width={400} height={300} className={styles.planetImg} priority />
      </div>
    </div>
  )
}