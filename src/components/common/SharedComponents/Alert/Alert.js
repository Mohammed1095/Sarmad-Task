import { Box, Icon, Flex, IconButton } from "@chakra-ui/react";
import { ReactComponent as InfoIcon } from "../../../../assets/icons/infoMessage.svg";
import { ReactComponent as ErrorIcon } from "../../../../assets/icons/errorMessage.svg";
import { ReactComponent as WarningIcon } from "../../../../assets/icons/warningMessage.svg";
import { ReactComponent as SuccessIcon } from "../../../../assets/icons/successMessage.svg";
import { ReactComponent as CrossIcon } from "../../../../assets/icons/X.svg";
import PropTypes from "prop-types";

const Alert = ({ title, body, type, close, canClose, width }) => {
  const danger = "#D82C4B";
  const info = "primary.500";
  const warning = "#F29304";
  const success = "#7DD752";
  const varaintIcon = () => {
    if (type === "error") {
      return <Icon as={ErrorIcon} fontSize="24px" />;
    } else if (type === "warning") {
      return <Icon as={WarningIcon} fontSize="24px" />;
    } else if (type === "success") {
      return <Icon as={SuccessIcon} fontSize="24px" />;
    }
    return <Icon as={InfoIcon} fontSize="24px" />;
  };
  const variantColor = () => {
    if (type === "error") {
      return danger;
    } else if (type === "warning") {
      return warning;
    } else if (type === "success") {
      return success;
    }
    return info;
  };
  return (
    <Box
      width={["100%", "100%", "100%", width || "500px"]}
      minWidth="12rem"
      bg="#fff"
      p="1.5rem"
      border="1px solid"
      zIndex="1000"
      data-testid="wrapper"
      borderColor="#656F77"
      borderRadius="0.8rem"
      position="relative"
    >
      <Flex
        style={{ gap: "2rem" }}
        justifyContent="start"
        width="95%"
        zIndex="1000"
      >
        {title && varaintIcon()}
        <Box>
          {title && (
            <Box
              fontSize={["12px", "12px", "12px", "16px"]}
              fontWeight="bold"
              data-testid="title"
              textColor={variantColor()}
            >
              {title}
            </Box>
          )}
          {body && (
            <Box
              mt="1rem"
              data-testid="body"
              textColor="#656F77"
              fontSize={["12px", "12px", "12px", "16px"]}
            >
              {body}
            </Box>
          )}
        </Box>

        <IconButton
          size="sm"
          data-testid="close"
          display={type === "error" || (canClose && close) ? "block" : "none"}
          variant="link"
          _focus={{ border: "none" }}
          position="absolute"
          onClick={() => close()}
          right="4"
          top="1.5rem"
          icon={
            <Icon
              as={CrossIcon}
              fontSize={{ sm: "10px", md: "13px" }}
              fill="white"
              stroke="white"
            />
          }
        />
      </Flex>
    </Box>
  );
};

export default Alert;

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.any,
  type: PropTypes.string,
  close: PropTypes.func,
  canClose: PropTypes.bool,
  width: PropTypes.string,
};
