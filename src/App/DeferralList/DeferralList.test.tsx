import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeferralList } from "App/DeferralList";

beforeEach(() => {
  render(<DeferralList />);
});

test("renders the component title", () => {
  const title = screen.getByText(/^deferral$/i);
  expect(title).toHaveTextContent(/^deferral$/i);
});

test("renders an add button", () => {
  const button = screen.getByLabelText(/^add deferral$/i);
  expect(button).toBeInTheDocument();
});

test("renders new deferral on add button click", () => {
  const button = screen.getByLabelText(/^add deferral$/i);
  userEvent.click(button);
  const deferral = screen.getByText(/^deferral type$/i);
  expect(deferral).toBeInTheDocument();
});

test("removes a deferral when its delete button is clicked", () => {
  const addButton = screen.getByLabelText(/^add deferral$/i);
  userEvent.click(addButton);
  const deleteButton = screen.getByLabelText(/^delete deferral$/i);
  expect(deleteButton).toBeInTheDocument();
  userEvent.click(deleteButton);
  expect(deleteButton).not.toBeInTheDocument();
});
