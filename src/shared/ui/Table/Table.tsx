import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';

export default function Table({rows, columns}: {rows: GridRowsProp, columns: GridColDef[]}) {
  return (
    <div style={{ height: 650, width: "100%", backgroundColor: "white", color: "black", overflowX: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.close_approach_date_full}
        disableColumnMenu
        sx={{
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
          // backgroundColor: "#e6a7a7",
          // color: "#594c4c",
          fontSize: "16px",
          fontWeight: "400",
        }}
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

