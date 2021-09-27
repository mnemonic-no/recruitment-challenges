import { ITableCellSkeletonProps } from "./../components/TableCellSkeleton";

export interface ITableCell<TPropsType = unknown> {
  type: string;
  props: TPropsType & { key: string | number };
}

export interface ITableRow<
  TPropsType = unknown,
  TChildType = ITableCell<unknown>
> {
  type: string;
  props: TPropsType;
  children: Array<TChildType>;
}

export type TTableCellTypes = ITableCell | ITableCell<ITableCellSkeletonProps>;
export type TTableRowTypes<TChildTypes> = ITableRow<unknown, TChildTypes>;

export const isTableRowType = (obj: unknown): obj is ITableRow =>
  Boolean(
    obj &&
      (obj as ITableRow).type &&
      (obj as ITableRow).type.startsWith("TableRow") &&
      (obj as ITableRow).props
  );

export const isTableCellType = (obj: unknown): obj is ITableCell =>
  Boolean(
    obj &&
      (obj as ITableCell).type &&
      (obj as ITableCell).type.startsWith("TableCell") &&
      (obj as ITableCell).props
  );

export const isTableCellSkeletonType = (
  obj: unknown
): obj is ITableCell<ITableCellSkeletonProps> =>
  isTableCellType(obj) && obj.type === "TableCellSkeleton";

export const createTableCell = <TProps>(
  arg: ITableCell<TProps>
): ITableCell<TProps> => arg;
export const createTableRow = <TProps>(
  arg: ITableRow<TProps>
): ITableRow<TProps> => arg;
