import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableCellSkeleton from "../components/TableCellSkeleton";
import * as TableUtils from "./../utils/TableUtils";

import type { TTableCellTypes } from "./../utils/TableUtils";

const mapToCell = (cell: TTableCellTypes) => {
  if (TableUtils.isTableCellSkeletonType(cell)) {
    return <TableCellSkeleton {...cell.props} />;
  } else if (TableUtils.isTableCellType(cell)) {
    return <TableCell {...cell.props} />;
  } else {
    // Invalid cell definition
    return null;
  }
};

export default mapToCell;
