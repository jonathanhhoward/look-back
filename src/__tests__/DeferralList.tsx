import { render, screen } from "@testing-library/react";
import { DeferralList } from "components";

test("renders the component title", () => {
  render(<DeferralList />);
  const title = screen.getByText(/^deferral$/i);
  expect(title).toHaveTextContent(/^deferral$/i);
});

test("renders an add button", () => {
  render(<DeferralList />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
