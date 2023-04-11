import { Flex } from "@chakra-ui/react";
const SearchLayout = ({ children }) => {
  return (
    <Flex
      marginBottom={["100px", "100px", "0px"]}
      height="100vh"
      padding="40px"
      width="100%"
      alignContent="center"
      justifyItems="center"
      justifyContent="space-around"
      flexDirection={["column", "column", "column", "row"]}
    >
      {children}
    </Flex>
  );
};

export default SearchLayout;
