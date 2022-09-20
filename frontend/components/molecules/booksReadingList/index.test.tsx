import { render, screen } from "@testing-library/react";
import BooksReadingList from "./index";
import React from "react";

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderBookReadingList = async () => {
  render(
    <BooksReadingList
      items={[11, 12, 13, 14]}
      margin="64px 0px 0px 0px"
      title="Books You are not Reading"
    />
  );
}

describe("Display Books Reading list", () => {
  test("Should display", async () => {
    await renderBookReadingList();
    const Element = screen.getByText(/See more/);
    await flushPromises();
    expect(Element).toBeInTheDocument();
  });
});
