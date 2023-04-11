import { Flex } from "@chakra-ui/react";
const SearchLayout = ({ children }) => {
  return (
    <Flex
      marginBottom={["2rem", "2rem", "0rem"]}
      height="100vh"
      padding="2.5 rem"
      width="100%"
      alignContent="center"
      justifyItems="center"
      justifyContent="space-between"
      mt="1rem"
      flexDirection={["column", "column", "column", "row"]}
    >
      {children}
    </Flex>
  );
};

export default SearchLayout;
