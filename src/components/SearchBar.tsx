import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <InputGroup startElement={<LuSearch />}>
      <Input
        borderRadius={20}
        placeholder="Search Here ..."
        variant={"subtle"}
      ></Input>
    </InputGroup>
  );
};

export default SearchBar;
