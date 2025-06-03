import "./App.css";

import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid, GRID_CHECKBOX_SELECTION_COL_DEF } from "@mui/x-data-grid";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { DataGridPro } from "@mui/x-data-grid-pro";

function App() {
  const { data, loading } = useDemoData({
    dataSet: "Employee",
    rowLength: 10,
    treeData: { maxDepth: 2, groupingField: "name", averageChildren: 200 },
  });

  const columns = [
    ...data.columns.slice(0, 5),
    GRID_CHECKBOX_SELECTION_COL_DEF,
  ];

  return (
    <div>
      <DataGrid
        loading={loading}
        {...data}
        columns={columns}
        sx={{ marginTop: "4rem" }}
        checkboxSelection
      />
      <DataGridPro
        loading={loading}
        {...data}
        columns={columns}
        sx={{ marginTop: "4rem" }}
        checkboxSelection
      />
      <DataGridPremium
        loading={loading}
        {...data}
        columns={columns}
        sx={{ marginTop: "4rem" }}
        checkboxSelection
      />
    </div>
  );
}

export default App;
