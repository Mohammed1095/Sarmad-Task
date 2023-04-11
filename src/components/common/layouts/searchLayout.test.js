import { render } from "@testing-library/react";
import SearchLayout from "./SearchLayout";

describe("SearchLayout", () => {
  it("should render with the correct styles", () => {
    const { container } = render(
      <SearchLayout>
        <div>Child element</div>
      </SearchLayout>
    );
    expect(container.firstChild).toHaveStyle(`
      margin-bottom: 100px;
      height: 100vh;
      padding: 40px;
      width: 100%;
      align-content: center;
      justify-items: center;
      justify-content: space-around;
      flex-direction: column;
    `);
  });
});
