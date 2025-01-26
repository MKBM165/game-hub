import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <InputGroup width={"50%"} startElement={<LuSearch />}>
      <Input
        borderRadius={20}
        placeholder="Search Here ..."
        variant={"subtle"}
      ></Input>
    </InputGroup>
  );
};

export default SearchBar;
