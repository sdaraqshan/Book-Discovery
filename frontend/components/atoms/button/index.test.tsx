import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import ButtonComponent from "./index";

test("Should Renders a Button", () => {
  render(<ButtonComponent>Discover</ButtonComponent>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
