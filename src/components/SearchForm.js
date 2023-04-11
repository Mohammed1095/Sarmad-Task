import { useState } from "react";
import axios from "axios";
import {
  Image,
  Box,
  Text,
  Grid,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import formImage from "../assets/images/fillForm.svg";
import InputWithLabel from "../components/common/SharedComponents/Input/InputWithLabel";
import SearchLayout from "../components/common/layouts/searchLayout";
import Form from "../components/common/layouts/form";

const SearchForm = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    fname: "",
    mname: "",
    lname: "",
    nat: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchQuery((prevQuery) => ({ ...prevQuery, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://150.230.49.47:8080/api/v1/integration/focal/screen/individual",
        searchQuery,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box width="100%" margin="auto" bg="gray.500">
      <form onSubmit={handleSubmit}>
        <SearchLayout>
          <Image
            display={["none", "none", "none", "block"]}
            src={formImage}
            alt="company"
          />
          <Form title="Fill in to search ...">
            <Grid
              templateColumns={{ sm: "100%", md: "repeat(2, 47%)" }}
              px={{ sm: "30px", md: "0" }}
              gap={20}
              mt="10"
              paddingBottom="20"
              alignItems={["center", "center", "center", "end"]}
              justifyItems={["center", "center", "center", "start"]}
            >
              <InputWithLabel
                title="First name"
                type="text"
                name="fname"
                value={searchQuery.fname}
                onChange={handleInputChange}
                required
              />
              <InputWithLabel
                title="Middle name"
                type="text"
                name="mname"
                value={searchQuery.mname}
                onChange={handleInputChange}
                required
              />
              <InputWithLabel
                title="Last name"
                type="text"
                name="lname"
                value={searchQuery.lname}
                onChange={handleInputChange}
                required
              />
              <InputWithLabel
                title="Nationality"
                type="text"
                name="nat"
                value={searchQuery.nat}
                onChange={handleInputChange}
                required
              />
              <Button
                type="submit"
                mt={4}
                fontSize="16px"
                fontWeight="900"
                width="100%"
              >
                Search
              </Button>
            </Grid>
          </Form>
        </SearchLayout>
      </form>

      {searchResults?.screen_result?.length ? (
        <Box
          width="100% "
          overflowX="scroll"
          className="scrollbar"
          position="relative"
        >
          <Table width="93%" mt="2rem">
            <Thead>
              <Tr
                fontSize={[
                  "16px",
                  "16px",
                  "16px",
                  "16px",
                  "16px",
                  "16px",
                  "24px",
                ]}
              >
                <Th
                  fontSize={[
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "24px",
                  ]}
                  borderColor="primary.500"
                  textColor="black"
                  fontWeight="bold"
                  textAlign="start"
                  textTransform="capitalize"
                  width="35%"
                >
                  Name
                </Th>
                <Th
                  fontSize={[
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "24px",
                  ]}
                  borderColor="primary.500"
                  textColor="black"
                  fontWeight="bold"
                  textAlign="start"
                  textTransform="capitalize"
                  width="20%"
                >
                  Description
                </Th>
                <Th
                  fontSize={[
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "24px",
                  ]}
                  borderColor="primary.500"
                  textColor="black"
                  fontWeight="bold"
                  textAlign="start"
                  textTransform="capitalize"
                  width="10%"
                >
                  Nationality
                </Th>
                <Th
                  fontSize={[
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "24px",
                  ]}
                  borderColor="primary.500"
                  textColor="black"
                  fontWeight="bold"
                  textAlign="start"
                  textTransform="capitalize"
                  width="25%"
                >
                  Place of birth
                </Th>
                <Th
                  fontSize={[
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "16px",
                    "24px",
                  ]}
                  borderColor="primary.500"
                  textColor="black"
                  fontWeight="bold"
                  textAlign="start"
                  textTransform="capitalize"
                  width="10%"
                >
                  Score
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {searchResults?.screen_result?.map((result, index) => (
                <Tr key={index}>
                  <Td
                    fontSize={[
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "24px",
                    ]}
                    color="black"
                    border="0"
                  >
                    {result.name}
                  </Td>
                  <Td
                    fontSize={[
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "24px",
                    ]}
                    color="black"
                    border="0"
                  >
                    {result.descriptions[0]?.description1 +
                      ", " +
                      result.descriptions[0]?.description2 +
                      ", " +
                      result.descriptions[0]?.description3}
                  </Td>
                  <Td
                    fontSize={[
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "24px",
                    ]}
                    color="black"
                    border="0"
                  >
                    {result.nat}
                  </Td>
                  <Td
                    fontSize={[
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "24px",
                    ]}
                    color="black"
                    border="0"
                  >
                    {result.places_of_birth[0] ?? "_"}
                  </Td>
                  <Td
                    fontSize={[
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      "24px",
                    ]}
                    color="black"
                    border="0"
                  >
                    {result.score}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      ) : (
        <Box
          width="100%"
          mt="4rem"
          p={["2rem", "2rem", "2rem", "2rem"]}
          display="flex"
          flexDir={["column", "column", "column", "row"]}
          justifyContent="center"
          height={["", "", "", "65vh"]}
          alignItems="center"
        >
          <Box
            display="flex"
            flexDir="column"
            py="rem"
            width={["100%", "100%", "100%", "100%"]}
          >
            <Text
              fontWeight="bold"
              fontSize="2xl"
              textAlign="center"
              color="#000000"
            >
              No Data to be viewed at the moment
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SearchForm;
