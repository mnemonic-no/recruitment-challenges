import { POKEMONS, AVAILABLE_COLUMNS } from "./constants";
import { createTableCell, createTableRow } from "./utils/TableUtils";

import type { TTableRowTypes, TTableCellTypes } from "./utils/TableUtils";

export default function useApp(): { rows: TTableRowTypes<TTableCellTypes>[] } {
  /* Example of how to fetch data for a given pokemon */
  // import { useGetPokemonByNameQuery } from "./redux/service";
  // const somePokemonQuery = useGetPokemonByNameQuery(POKEMONS[0]);

  const rows = POKEMONS.map((name) =>
    createTableRow({
      type: "TableRow",
      props: { key: name },
      children: AVAILABLE_COLUMNS.map((columnName) =>
        createTableCell({
          type: "TableCellSkeleton",
          props: { key: columnName },
        })
      ),
    })
  );

  return {
    rows,
  };
}
