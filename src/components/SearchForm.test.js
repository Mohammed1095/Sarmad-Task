import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import SearchForm from "./SearchForm";

// Mock axios POST request
jest.mock("axios");

describe("SearchForm", () => {
  it("renders the form with correct inputs", () => {
    render(<SearchForm />);
    expect(screen.getByLabelText("First name")).toBeInTheDocument();
    expect(screen.getByLabelText("Middle name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last name")).toBeInTheDocument();
    expect(screen.getByLabelText("Nationality")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("submits the form and renders search results", async () => {
    // Mock axios response
    axios.post.mockResolvedValueOnce({
      data: {
        screen_result: [
          {
            name: "John Doe",
            description: "Some description",
            nationality: "US",
            place_of_birth: "California",
          },
        ],
      },
    });

    render(<SearchForm />);
    const fnameInput = screen.getByLabelText("First name");
    const lnameInput = screen.getByLabelText("Last name");
    const searchButton = screen.getByText("Search");

    // Fill in form inputs
    fireEvent.change(fnameInput, { target: { value: "John" } });
    fireEvent.change(lnameInput, { target: { value: "Doe" } });

    // Submit form
    fireEvent.click(searchButton);

    // Wait for axios response
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        "http://150.230.49.47:8080/api/v1/integration/focal/screen/individual",
        {
          fname: "John",
          mname: "",
          lname: "Doe",
          nat: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
    });

    // Check that search results are displayed
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Some description")).toBeInTheDocument();
    expect(screen.getByText("US")).toBeInTheDocument();
    expect(screen.getByText("California")).toBeInTheDocument();
  });

  it("handles errors when submitting the form", async () => {
    // Mock axios error
    axios.post.mockRejectedValueOnce(new Error("Network error"));

    render(<SearchForm />);
    const searchButton = screen.getByText("Search");

    // Submit form
    fireEvent.click(searchButton);

    // Wait for axios error
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(screen.getByText("Error")).toBeInTheDocument();
    });
  });
});
