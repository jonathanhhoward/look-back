import { render, screen } from "@testing-library/react";
import { Deferral } from "components";

test("renders the title", () => {
  render(<Deferral title="Deferral" />);
  const heading = screen.getByText(/^deferral$/i);
  expect(heading).toBeInTheDocument();
});
