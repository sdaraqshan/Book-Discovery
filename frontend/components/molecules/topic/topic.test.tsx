import React from "react";
import { render, screen } from "@testing-library/react";
import Topic from "./index";

describe("Topic", () => {
  test("Renders Topic component", () => {
    render(<Topic topic_id={35} />);
  });

  test("Checking if image is visible", () => {
    render(<Topic topic_id={35} />);
    const image = screen.getByRole("img");
    expect(image).toBeVisible();
  });

  test("Checking image properties", () => {
    render(<Topic topic_id={35} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "Category");
    expect(image).toHaveAttribute(
      "style",
      "width: 178px; height: 134px; border-radius: 8px;"
    );
  });
});
