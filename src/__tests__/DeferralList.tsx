import { render, screen } from "@testing-library/react";
import { DeferralList } from "components";

test("renders the component title", () => {
  render(<DeferralList />);
  const title = screen.getByText(/^deferral$/i);
  expect(title).toHaveTextContent(/^deferral$/i);
});
