import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { forwardRef } from "react";
/**
 * @type React.FC<InputWithLabelPropTypes>
 */
const InputWithLabel = forwardRef(
  (
    {
      error,
      required,
      placeholder,
      onChange,
      onBlur,
      display,
      defaultValue,
      name,
      type,
      rightIcon,
      leftElement,
      title,
      formChanged,
      changeAction,
      disabled,
      onFocus,
      minValue,
      max,
      maxlength,
      pattern,
      onInput,
      onKeyUp,
      onWheel,
    },
    ref
  ) => {
    return (
      <FormControl
        paddingX="0"
        isInvalid={error ? true : false}
        position="relative"
      >
        <FormLabel
          textColor={error ? "red.700" : "black"}
          fontWeight="900"
          fontSize={["16px", "16px", "16px", "24px"]}
        >
          {title} {required ? "*" : ""}
        </FormLabel>
        <InputGroup position="relative">
          {leftElement && (
            <InputLeftElement
              px="0"
              pb="0.7rem"
              left="-2"
              mx="0"
              children={leftElement}
            />
          )}
          <Input
            transition="all 0.5s"
            color="#000000"
            borderRadius="0px"
            disabled={disabled}
            fontSize={["16px", "16px", "16px", "24px"]}
            _invalid={{
              borderColor: "#D82C4B",
            }}
            placeholder={placeholder || title}
            _placeholder={{ color: "#000000", opacity: "0.5" }}
            variant="flushed"
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              }
              if (formChanged) {
                formChanged();
              }
              if (changeAction) {
                changeAction(e.target.value);
              }
            }}
            onBlur={onBlur}
            onWheel={onWheel}
            display={display}
            autoComplete="off"
            _focus={{ borderColor: "primary.500" }}
            defaultValue={defaultValue}
            name={name}
            onFocus={onFocus}
            type={type}
            ref={ref}
            onInput={onInput}
            zIndex="2"
            maxLength={maxlength}
            min={minValue}
            max={max}
            onKeyUp={onKeyUp}
            pattern={pattern}
          />
          {rightIcon && (
            <InputRightElement
              position="absolute"
              zIndex="0"
              children={rightIcon}
            />
          )}
        </InputGroup>
        <FormErrorMessage position="absolute" textColor="red.700">
          <Text
            fontSize="18px"
            fontWeight="bold"
            display="inline-block"
            mr="0.5rem"
          >
            !
          </Text>
          {error && error.message}
        </FormErrorMessage>
      </FormControl>
    );
  }
);

export default InputWithLabel;

const InputWithLabelPropTypes = {
  error: PropTypes.object,
  display: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  formChanged: PropTypes.func,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.any,
  name: PropTypes.string,
  type: PropTypes.string,
  rightIcon: PropTypes.any,
  title: PropTypes.string,
  changeAction: PropTypes.func,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onWheel: PropTypes.func,
  max: PropTypes.any,
  maxlength: PropTypes.number,
  min: PropTypes.number,
  pattern: PropTypes.any,
  onInput: PropTypes.func,
  onKeyUp: PropTypes.func,
};

InputWithLabel.propTypes = InputWithLabelPropTypes;
