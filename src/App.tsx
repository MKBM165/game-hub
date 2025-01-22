import { Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Stack hideBelow={"lg"}>
        <GridItem area={"aside"} bg={"teal"}>
          aside
        </GridItem>
      </Stack>
      <GridItem area={"main"} bg={"cyan"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
