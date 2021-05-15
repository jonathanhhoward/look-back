import { render, screen } from "@testing-library/react";
import { InspectionList } from "components";

test("renders the component title", () => {
  render(<InspectionList />);
  const inspections = screen.getByText(/^inspection$/i);
  expect(inspections).toHaveTextContent(/^inspection$/i);
});

test("renders the subtitle for 14-day inspections", () => {
  render(<InspectionList />);
  const days14 = screen.getByText(/^14-day$/i);
  expect(days14).toHaveTextContent(/^14-day$/i);
});

test("renders the subtitle for 2-day inspections", () => {
  render(<InspectionList />);
  const days2 = screen.getByText(/^2-day$/i);
  expect(days2).toHaveTextContent(/^2-day$/i);
});
