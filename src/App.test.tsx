import { render, screen } from "@testing-library/react";
import { App } from "App";

test("renders a title bar", () => {
  render(<App />);
  const title = screen.getByText(/look back/i);
  expect(title).toHaveTextContent(/look back/i);
});
