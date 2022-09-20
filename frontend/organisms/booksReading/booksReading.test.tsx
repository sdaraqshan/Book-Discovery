import React from "react";
import { render, screen } from "@testing-library/react";

import BooksReadingCard from "./index";

describe("BooksReading", () => {
  test("Renders Books Reading Card component", () => {
    render(<BooksReadingCard book_id={1} />);
  });

  test("Checking image attribute", () => {
    render(<BooksReadingCard book_id={1} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "style",
      "height: 118px; width: 91px; border-radius: 4px; margin-right: 16px;"
    );
  });

  test("Checking text styles", () => {
    render(<BooksReadingCard book_id={1} />);
    const p = screen.getByText(/By/);
    expect(p).toHaveStyle("height: 16px; margin: 2px 0px;");
  });
});
