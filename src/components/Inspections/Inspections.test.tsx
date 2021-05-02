import { render, screen } from "@testing-library/react";
import { Inspections } from "./Inspections";

test("renders the component title", () => {
  render(<Inspections />);
  const inspections = screen.getByText(/^inspections$/i);
  expect(inspections).toHaveTextContent(/^inspections$/i);
});
