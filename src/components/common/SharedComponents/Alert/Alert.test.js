import { render, screen } from "@testing-library/react";
import Alert from "./Alert";
describe("alert component", () => {
  test("test alert component with no close button", () => {
    const textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo harum similique nisi quas repellendus aspernatur eligendi eius impedit vel inventore quos sint, beatae odit facilis suscipit neque dolor reiciendis est?";
    const { getByTestId } = render(
      <Alert title="info" type="info" body={textContent} />
    );
    const title = getByTestId("title");
    const close = getByTestId("close");
    const body = getByTestId("body");
    expect(title.textContent).toBe("info");
    expect(body.textContent).toBe(textContent);
    expect(close).not.toBeVisible();
  });
  test("test alert component with close button", () => {
    const textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo harum similique nisi quas repellendus aspernatur eligendi eius impedit vel inventore quos sint, beatae odit facilis suscipit neque dolor reiciendis est?";
    const { getByTestId } = render(
      <Alert title="error" type="error" body={textContent} />
    );
    const title = getByTestId("title");
    const close = getByTestId("close");
    const body = getByTestId("body");
    expect(title.textContent).toBe("error");

    expect(body.textContent).toBe(textContent);
    expect(close).toBeVisible();
  });
});
