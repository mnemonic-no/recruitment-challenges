import React from "react";
import TableRow from "@material-ui/core/TableRow";
import * as TableUtils from "./TableUtils";
import mapToCell from "./mapToCell";

import type { TTableRowTypes, TTableCellTypes } from "./TableUtils";

const mapToRow = (row: TTableRowTypes<TTableCellTypes>) => {
  if (TableUtils.isTableRowType(row)) {
    return <TableRow {...row.props}>{row.children.map(mapToCell)}</TableRow>;
  } else {
    // Invalid row definition
    return null;
  }
};

export default mapToRow;
