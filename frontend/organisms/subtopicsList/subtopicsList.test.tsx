import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import SubtopicsList from "./index";

describe("Subtopics list", () => {
  test("Renders Sub Topics List", () => {
    render(
      <Router>
        <SubtopicsList topic_id={1} />
      </Router>
    );
  });

  test("Checking if image is visible", () => {
    render(
      <Router>
        <SubtopicsList topic_id={1} />
      </Router>
    );
    const image = screen.getByRole("img");
    expect(image).toBeVisible();
  });

  test("Checking image properties", () => {
    render(
      <Router>
        <SubtopicsList topic_id={1} />
      </Router>
    );
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "style",
      "width: 36px; height: 36px; border-radius: 8px; margin-right: 16px;"
    );
  });
});
