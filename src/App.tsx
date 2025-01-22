import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav
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
