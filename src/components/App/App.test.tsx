import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders a section for MELs", () => {
  render(<App />);
  const mel = screen.getByText(/mel/i);
  expect(mel).toHaveTextContent(/mel/i);
});