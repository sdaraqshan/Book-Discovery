import { render, screen } from "@testing-library/react";
import HomeHeading from "./index";
import React from "react";

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderHomeHeading = async () => {
  render(<HomeHeading title="Books You are Reading" />);
}

describe("Display Home Heading", () => {
  test("Should display", async () => {
    await renderHomeHeading();
    const Element = screen.getByText(/Books You are Reading/);
    await flushPromises();
    expect(Element).toBeInTheDocument();
  });
});
