import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import SearchIcon from "./icons/SearchIcon";
import FilterPopover from "./FilterPopover";

const Filters = ({ columnFilters, setColumnFilters }) => {
  const taskName = columnFilters.find((f) => f.id === "link")?.value || "";

  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  const handleOnClick = () => {
    //! todo : write the logic to add new manga fetch the data from your backend do a post call get the data from the frontend
    //         and send it to the backend

    // format of the data will be an object consisting of the following keys and values

    // {
    //   "link" : "https://manganelo.com/manga/abc123",
    //   "status" : "in Progress",
    //   "Chapters" : "number",
    //   "lastRead" : "date [string]",

    // }
    console.log("Add new manga");
  };

  return (
    <HStack mb={6} spacing={3}>
      <InputGroup size="sm" maxW="12rem">
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type="text"
          variant="filled"
          placeholder="Task name"
          borderRadius={5}
          value={taskName}
          onChange={(e) => onFilterChange("link", e.target.value)}
        />
      </InputGroup>
      <FilterPopover
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <Button onClick={handleOnClick} fontSize="sm">
        Add New Manga
      </Button>
    </HStack>
  );
};
export default Filters;
