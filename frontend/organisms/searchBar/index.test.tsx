import { render, screen } from "@testing-library/react";
import SearchBar from "./index";
import React from "react";

describe("Display search bar", () => {
  test("Should display", () => {
    render(<SearchBar />);
    const Element = screen.getByPlaceholderText(
      /Search here by book title, author or ISBN/i
    );
    expect(Element).toBeInTheDocument();
  });
});
