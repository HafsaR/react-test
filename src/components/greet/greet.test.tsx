import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet render correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Green render with the name", () => {
let name = 'Raees'
  render(<Greet name={name} />);
  const textElement = screen.getByText(`Hello ${name}`);
  expect(textElement).toBeInTheDocument();
});
