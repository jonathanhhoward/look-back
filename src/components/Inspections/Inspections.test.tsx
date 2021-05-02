import { render, screen } from "@testing-library/react";
import { Inspections } from "./Inspections";

test("renders the component title", () => {
  render(<Inspections />);
  const inspections = screen.getByText(/^inspections$/i);
  expect(inspections).toHaveTextContent(/^inspections$/i);
});

test("renders the subtitle for 14-day inspections", () => {
  render(<Inspections />);
  const days14 = screen.getByText(/^14-day$/i);
  expect(days14).toHaveTextContent(/^14-day$/i);
});
