import { render, screen } from "@testing-library/react";
import { Deferral } from "components";

test("renders the title", () => {
  render(<Deferral />);
  const heading = screen.getByText(/^new deferral$/i);
  expect(heading).toBeInTheDocument();
});
