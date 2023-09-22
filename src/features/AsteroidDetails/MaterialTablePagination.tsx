import * as React from "react";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { createTheme as createMaterialTheme } from "@mui/material/styles";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import styles from "./AsteroidDetails.module.css";

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import {
  useSort,
  HeaderCellSort,
  SortIconPositions,
  SortToggleType,
} from "@table-library/react-table-library/sort";
import { usePagination } from "@table-library/react-table-library/pagination";

const Component = ({ nodes }: any) => {
  const data = { nodes };

  const LIMIT = 10; // Number of rows per page

  // Sorting
  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        Speed: (array) =>
          array.sort(
            (a, b) =>
              a.relative_velocity.kilometers_per_second -
              b.relative_velocity.kilometers_per_second
          ),
        Date: (array) =>
          array.sort(
            (a, b) => a.close_approach_date_full - b.close_approach_date_full
          ),
        Distance: (array) =>
          array.sort(
            (a, b) => a.miss_distance.kilometers - b.miss_distance.kilometers
          ),
        Orbit: (array) => array.sort((a, b) => a.orbiting_body - b.orbiting_body),
      },
    }
  );

  function onSortChange(action: any, state: any) {
    console.log(action, state);
  }

  const getIcon = (sortKey: any) => {
    if (sort.state.sortKey === sortKey && sort.state.reverse) {
      return <KeyboardArrowDownOutlinedIcon />;
    }

    if (sort.state.sortKey === sortKey && !sort.state.reverse) {
      return <KeyboardArrowUpOutlinedIcon />;
    }

    return <UnfoldMoreOutlinedIcon />;
  };

  // Pagination
  const pagination = usePagination(
    data,
    {
      state: {
        page: 0, // Current page
        size: LIMIT, // Rows per page
      },
      onChange: onPaginationChange,
    },
    {
      isServer: true, // Perform server-side pagination
    }
  );

  function onPaginationChange(action: any, state: any) {
    // Handle pagination changes, e.g., fetching data for the new page
    console.log(action, state);
  }

  return (
    <MaterialThemeProvider theme={createMaterialTheme({})}>
      <Table data={data} sort={sort} pagination={pagination} className={styles.customTable}>
        {(tableList: any) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{ justifyContent: "flex-start" }}
                    endIcon={getIcon("Speed")}
                    onClick={() =>
                      sort.fns.onToggleSort({
                        sortKey: "Speed",
                      })
                    }
                  >
                    Speed
                  </Button>
                </HeaderCell>
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{ justifyContent: "flex-start" }}
                    endIcon={getIcon("Date")}
                    onClick={() =>
                      sort.fns.onToggleSort({
                        sortKey: "Date",
                      })
                    }
                  >
                    Date
                  </Button>
                </HeaderCell>
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{ justifyContent: "flex-start" }}
                    endIcon={getIcon("Distance")}
                    onClick={() =>
                      sort.fns.onToggleSort({
                        sortKey: "Distance",
                      })
                    }
                  >
                    Distance
                  </Button>
                </HeaderCell>
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{ justifyContent: "flex-start" }}
                    endIcon={getIcon("Orbit")}
                    onClick={() =>
                      sort.fns.onToggleSort({
                        sortKey: "Orbit",
                      })
                    }
                  >
                    Orbit
                  </Button>
                </HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item: any) => (
                <Row item={item} key={item.close_approach_date_full}>
                  <Cell>{item.relative_velocity.kilometers_per_second}</Cell>
                  <Cell>{item.close_approach_date_full}</Cell>
                  <Cell>{item.miss_distance.kilometers}</Cell>
                  <Cell>{item.orbiting_body}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>

      {!!nodes.length && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Total Rows: {nodes.length}</span>
          <span>
            <button
              type="button"
              disabled={pagination.state.page === 0}
              onClick={() => pagination.fns.onSetPage(0)}
            >
              {"|<"}
            </button>
            <button
              type="button"
              disabled={pagination.state.page === 0}
              onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
            >
              {"<"}
            </button>
            <button
              type="button"
              disabled={pagination.state.page + 1 === nodes.length}
              onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
            >
              {">"}
            </button>
            <button
              type="button"
              disabled={pagination.state.page + 1 === nodes.length}
              onClick={() => pagination.fns.onSetPage(nodes.length - 1)}
            >
              {">|"}
            </button>
          </span>
        </div>
      )}
    </MaterialThemeProvider>
  );
};

export default Component;
