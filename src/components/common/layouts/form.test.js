import { render } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("renders the title correctly", () => {
    const { getByText } = render(<Form title="Test Title" />);
    expect(getByText(/Test Title/i)).toBeInTheDocument();
  });

  it("renders the children components correctly", () => {
    const { getByText } = render(
      <Form>
        <div>Child Component 1</div>
        <div>Child Component 2</div>
      </Form>
    );
    expect(getByText(/Child Component 1/i)).toBeInTheDocument();
    expect(getByText(/Child Component 2/i)).toBeInTheDocument();
  });
});
