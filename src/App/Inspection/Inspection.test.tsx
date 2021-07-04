import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Inspection } from "App/Inspection";

beforeEach(() => {
  render(<Inspection title="Title" duration={1} />);
});

test("renders the inspection title", () => {
  const title = screen.getByText("Title");
  expect(title).toHaveTextContent("Title");
});

test("renders a datepicker", () => {
  const datepicker = screen.getByLabelText(/^inspection date$/i);
  expect(datepicker).toBeVisible();
});

test("hides form on date select", async () => {
  const title = screen.getByText(/^title$/i);
  const datepicker = screen.getByLabelText(/^inspection date$/i);
  userEvent.click(datepicker);
  userEvent.keyboard("{enter}");
  await waitFor(() => expect(datepicker).not.toBeVisible());
  userEvent.click(title);
  await waitFor(() => expect(datepicker).toBeVisible());
});
