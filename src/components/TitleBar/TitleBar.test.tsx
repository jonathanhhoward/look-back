import { render, screen } from "@testing-library/react";
import { TitleBar } from "./TitleBar";

test("renders the title", () => {
  render(<TitleBar />);
  const title = screen.getByText(/look back/i);
  expect(title).toHaveTextContent(/look back/i);
});
