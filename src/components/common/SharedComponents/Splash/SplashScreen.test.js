import { render } from "@testing-library/react";
import SplashScreen from "./SplashScreen";

describe("SplashScreen", () => {
  it("renders the Sarmad icon", () => {
    const { getByTestId } = render(<SplashScreen />);
    const iconElement = getByTestId("sarmad-icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("sets the correct icon size", () => {
    const { getByTestId } = render(<SplashScreen />);
    const iconElement = getByTestId("sarmad-icon");
    expect(iconElement).toHaveStyle({ fontSize: "200px" });
  });
});
