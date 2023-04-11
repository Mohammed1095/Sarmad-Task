import { extendTheme } from "@chakra-ui/react";
import { mode, createBreakpoints } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "#F4F7FA")(props),
      bg: mode("white", "black")(props),
    },
  }),
};
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  xlx: "1600px",
  xxl: "1900px",
});
// 3. extend the theme
const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  config,
  styles,
  breakpoints,
  colors: {
    red: {
      100: "#c4c4c4",
      700: "#D82C4B",
    },
    primary: {
      50: "#DDF3F4",
      100: "#00ACB1",
      200: "#00ACB1",
      300: "#00ACB1",
      400: "#00ACB1",
      500: "#00ACB1",
      600: "#00ACB1",
      700: "#00ACB1",
      800: "#0F787B",
      900: "#054546",
    },
    secondary: {
      50: "#F4F7FA",
      100: "#CDD9E3",
      200: "#ACB8C2",
      300: "#656F77",
      400: "#141618cc",
      500: "#141618",
    },
  },

  components: {
    Text: {
      textColor: "#F4F7FA",
    },
    CheckBox: {
      variants: {
        primary: {
          colorScheme: "teal.800",
        },
      },
    },

    IconButton: {
      baseStyle: ({ colorMode }) => ({
        _focus: {
          border: "0px",
          boxShadow: "base",
        },
        _active: {
          boxShadow: "base",
        },
        boxShadow: "base",
      }),
    },
    Tooltip: {
      variants: {
        primary: {
          textColor: "primary.500",
          color: "primary.500",
          borderRadius: "5px",
          p: "1rem",
          border: "1px",
          "--popper-arrow-shadow-color": "#656F77",
          borderColor: "secondary.300",
          bg: "secondary.500",
        },
      },
    },
    Button: {
      baseStyle: ({ colorMode }) => ({
        color: "#00ACB1",
        _focus: {
          boxShadow: "base",
        },
        boxShadow: "base",
      }),
      variants: {
        primary: {
          bg: "#00ACB1",
          color: "#F4F7FA",
          borderRadius: "5px",
          _hover: {
            bg: "#0F787B",
            _disabled: {
              bg: "#ACB8C2",
              color: "#F4F7FA",
              cursor: "pointer",
            },
          },
          _disabled: {
            bg: "#ACB8C2",
            color: "#F4F7FA",
            opacity: 0.9,
          },
        },
        reversed: {
          color: mode("#000", "#F4F7FA"),
          backgroundColor: mode("#FFFFFF", "#000000"),
          borderRadius: "5px",
          _hover: {
            _disabled: {
              bg: "#CDD9E3",
              cursor: "pointer",
            },
            bg: "#CDD9E3",
          },
        },

        outlined: {
          border: "#00ACB1 1px solid",
          color: "#00ACB1",
          borderRadius: "5px",
          _hover: {
            borderColor: "#054546",
          },
        },
        transparent: {
          borderWidth: "1px",
          brderType: "solid",
          display: "block",
          borderColor: mode("#F4F7FA", "black"),
          color: mode("#F4F7FA", "black"),
          _hover: {
            borderColor: "#00ACB1",
            color: "#00ACB1",
          },
          _foucs: {
            borderColor: "black",
          },
          _active: {
            borderColor: "black",
          },
        },
      },
    },
    Input: {
      baseStyle: ({ colorMode }) => ({
        borderRadius: "0px",
        field: {
          _invalid: {
            borderColor: "#D82C4B",
          },
          _placeholder: { color: "#CDD9E3", px: "0px" },
          autocomplete: "false",
          _focus: {
            borderColor: "#00ACB1",
          },
          paddingBottom: "10px",
          borderColor: colorMode === "dark" ? "#F4F7FA" : "black",
          border: "0px",
          borderRadius: "0px",
          bg: "transparent",
          borderBottom: "1px solid",
        },
      }),

      defaultProps: {
        variant: null, // null here
      },
    },
    Badge: {
      variants: {
        primary: {
          py: "1",
          px: "2",
          bg: "primary.50",
          minW: "100px",
          color: "primary.500",
          textAlign: "center",
          fontWeight: "400",
          borderRadius: "6px",
        },
      },
    },
    FormControl: {
      _invalid: {
        borderColor: "#D82C4B",
      },
      _placeholder: { color: "#CDD9E3" },
    },
    Select: {
      baseStyle: ({ colorMode }) => ({
        _placeholder: { color: "#CDD9E3" },
        field: {
          borderColor: colorMode === "dark" ? "#F4F7FA" : "black",
          borderRadius: "0",
          _invalid: {
            borderColor: "#D82C4B",
          },
          _placeholder: { color: "#CDD9E3" },
        },
      }),
    },
    Modal: {
      baseStyle: ({ colorMode }) => ({
        dialog: {
          bg: colorMode === "dark" ? "black" : "#F4F7FA",
        },
      }),
    },
  },
});

export default theme;
