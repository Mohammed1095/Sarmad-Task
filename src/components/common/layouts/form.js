import { VStack, Text } from "@chakra-ui/react";
const Form = ({ children, title }) => {
  return (
    <VStack
      alignItems="left"
      spacing="0px"
      justifyContent={["end", "end", "end", "end", "end", "center"]}
      width={["100%", "100%", "100%", "40%"]}
    >
      <Text fontWeight="bold" fontSize={["lg", "xl", "xl", "xl", "xl", "2xl"]}>
        {title}
      </Text>
      <VStack
        alignItems="left"
        spacing="40px"
        justifyContent={["end", "end", "end", "end", "end", "center"]}
        width={["100%", "100%", "100%", "100%"]}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default Form;
