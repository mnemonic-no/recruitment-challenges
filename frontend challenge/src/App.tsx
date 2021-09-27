import React from "react";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";

import useApp from "./useApp";
import mapToRow from "./utils/mapToRow";

function App() {
  const { rows } = useApp();

  return (
    <Container>
      <Typography variant="h1">Pokemons</Typography>
      <Table>
        <TableHead></TableHead>
        <TableBody>{rows.map(mapToRow)}</TableBody>
      </Table>
    </Container>
  );
}

export default App;
