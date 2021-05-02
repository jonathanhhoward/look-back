import { render, screen } from "@testing-library/react";
import { Mels } from "./Mels";

test("renders the component title", () => {
  render(<Mels />);
  const mel = screen.getByText(/^mels$/i);
  expect(mel).toHaveTextContent(/^mels$/i);
});
