import { render, screen } from "@testing-library/react";
import { MelList } from "components";

test("renders the component title", () => {
  render(<MelList />);
  const mel = screen.getByText(/^mel$/i);
  expect(mel).toHaveTextContent(/^mel$/i);
});
