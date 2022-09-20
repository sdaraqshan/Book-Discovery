import { render, screen } from "@testing-library/react";
import BookDescriptionCard from "./index";
import React from "react";

describe("Display BookDescriptionCard ", () => {
  test("Should display", () => {
    render(
      <BookDescriptionCard
      book_id = {1}
      />
    );
    const Element = screen.getByRole("button");
    expect(Element).toBeInTheDocument();
  });
});
