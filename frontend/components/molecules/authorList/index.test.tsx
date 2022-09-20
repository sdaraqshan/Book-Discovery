import { render, screen } from "@testing-library/react";
import AuthorList from "./index";
import React from "react";

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderAuthorList = async () => {
  return render(<AuthorList items={[31, 32, 33]} title="Books by J D Lee" />);
}

describe("Display author list", () => {
  test("Should display", async () => {
    await renderAuthorList();
    const Element = screen.getByText(/Books by J D Lee/);
    await flushPromises();
    expect(Element).toBeInTheDocument();
  });
});
