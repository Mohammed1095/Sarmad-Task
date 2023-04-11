import { Flex, Icon } from "@chakra-ui/react";
import Sarmad from "../../../../assets/images/Sarmad.png";

const SplashScreen = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Icon
        as={Sarmad}
        fill="white"
        fontSize={["100px", "100px", "100px", "200px"]}
      />
    </Flex>
  );
};

export default SplashScreen;
