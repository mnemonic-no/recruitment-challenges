import React from "react";
import TableCell, {
  TableCellProps as MuiTableCellProps,
} from "@material-ui/core/TableCell";
import Skeleton from "@material-ui/lab/Skeleton";

export interface ITableCellSkeletonProps extends MuiTableCellProps {}

const TableCellSkeleton = (props: ITableCellSkeletonProps) => (
  <TableCell>
    <Skeleton variant="text" />
  </TableCell>
);

export default TableCellSkeleton;
