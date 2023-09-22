import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

const Component = ({nodes}: any) => {
  if (!nodes) {
    return null;
  }
  let data = { nodes };

  const theme = useTheme(getTheme());

  const [search, setSearch] = React.useState("");

  const COLUMNS = [
    { label: "Speed km/s", renderCell: (item: any) => item.relative_velocity.kilometers_per_second },
    {
      label: "Date",
      renderCell: (item: any) =>
        item.close_approach_date_full
    },
    { label: "Distance to Earth", renderCell: (item: any) => item.miss_distance.kilometers },
    {
      label: "Orbit",
      renderCell: (item: any) => item.orbiting_body.toString(),
    },
  ];

  return (
    <>

      <CompactTable columns={COLUMNS} data={data} theme={theme} />

      <br />
    </>
  );
};

export default Component;