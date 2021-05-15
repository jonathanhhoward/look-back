import { render, screen } from "@testing-library/react";
import { InspectionList } from "components";

test("renders the component title", () => {
  render(<InspectionList />);
  const inspections = screen.getByText(/^inspection$/i);
  expect(inspections).toHaveTextContent(/^inspection$/i);
});
