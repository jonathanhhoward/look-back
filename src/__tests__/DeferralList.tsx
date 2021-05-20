import { render, screen } from "@testing-library/react";
import { DeferralList } from "components";
import userEvent from "@testing-library/user-event";

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

test("renders new deferral on add button click with incremented title", () => {
  render(<DeferralList />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  const deferral = screen.getByText(/^new deferral$/i);
  expect(deferral).toBeInTheDocument();
});
