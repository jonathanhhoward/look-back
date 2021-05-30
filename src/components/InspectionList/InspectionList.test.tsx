import { render, screen } from "@testing-library/react";
import { InspectionList } from "./InspectionList";

test("renders the component title", () => {
  render(<InspectionList />);
  const inspections = screen.getByText(/^inspection$/i);
  expect(inspections).toHaveTextContent(/^inspection$/i);
});
