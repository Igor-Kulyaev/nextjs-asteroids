import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import styles from "./Table.module.css";

const tableCSS = {
  "&.MuiDataGrid-root .MuiDataGrid-virtualScrollerContent": {
    backgroundColor: "#232526",
  },
  "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
    outline: "none !important",
  },
  "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
    outline: "none",
  },
  "&.MuiDataGrid-root .MuiDataGrid-row": {
    backgroundColor: "#232526",
    color: "#F5DED9"
  },
  "&.MuiDataGrid-root .MuiDataGrid-row:hover": {
    backgroundColor: "#032936",
  },
  "&.MuiDataGrid-root .MuiDataGrid-columnHeaders": {
    backgroundColor: "#F5DED9",
  },
  "&.MuiDataGrid-root .MuiDataGrid-footerContainer": {
    backgroundColor: "#F5DED9",
  },
  fontSize: "16px",
  fontWeight: "400",
}

export default function Table({rows, columns}: {rows: GridRowsProp, columns: GridColDef[]}) {
  return (
    <div className={styles.tableContainer}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.close_approach_date_full}
        disableColumnMenu
        className={`${styles["MuiDataGrid-root"]} ${styles["MuiDataGrid-virtualScrollerContent"]} ${styles["MuiDataGrid-cell"]} ${styles["MuiDataGrid-columnHeader"]} ${styles["MuiDataGrid-row"]} ${styles["MuiDataGrid-columnHeaders"]} ${styles["MuiDataGrid-footerContainer"]} ${styles["MuiDataGrid-cell"]}`}
        sx={tableCSS}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 25, page: 0 },
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
      />
    </div>
  );
}

