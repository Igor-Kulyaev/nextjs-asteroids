import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';

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
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function GridTable({rows, columns}: {rows: GridRowsProp, columns: GridColDef[]}) {
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

