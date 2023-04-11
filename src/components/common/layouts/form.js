import { VStack } from "@chakra-ui/react";
const Form = ({ children, title }) => {
  return (
    <VStack
      alignItems="center"
      spacing="0px"
      px="0.1rem"
      margin="auto"
      marginBottom="2rem"
      justifyContent={["end", "end", "end", "end", "end", "space-between"]}
      width={["100%", "100%", "100%", "50%"]}
      bg="#fff"
      borderRadius="2rem"
    >
      <VStack
        alignItems="center"
        spacing="2.5rem"
        justifyContent={["end", "end", "end", "end", "end", "center"]}
        width={["100%", "100%", "100%", "100%"]}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default Form;
