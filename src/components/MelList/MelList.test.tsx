import { render, screen } from "@testing-library/react";
import { MelList } from "./MelList";

test("renders the component title", () => {
  render(<MelList />);
  const mel = screen.getByText(/^mels$/i);
  expect(mel).toHaveTextContent(/^mels$/i);
});
