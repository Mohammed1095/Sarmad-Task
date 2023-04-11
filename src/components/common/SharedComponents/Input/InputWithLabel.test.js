import { render } from "@testing-library/react";
import InputWithLabel from "./InputWithLabel";
describe("Input with Label component", () => {
  test("input with label test", () => {
    const { getByPlaceholderText } = render(
      <InputWithLabel placeholder="my input" title="Title" />
    );
    expect(getByPlaceholderText("my input")).toBeInTheDocument();
  });
});
