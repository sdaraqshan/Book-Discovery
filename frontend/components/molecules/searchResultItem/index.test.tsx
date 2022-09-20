import React from "react";
import { render, screen } from "@testing-library/react";
import Book1 from "/public/assets/images/books/book_wide_1.png";

import SearchResultItem from "./index";

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderSearchResultItem = async () => {
  return render(
    <SearchResultItem
      image={Book1}
      title="Super Simple Biology"
      author="By D K Hudson"
      category="Humorous"
    />
  );
}

describe("Search Result Item", () => {
  test("Renders Search Result Item", async() => {
    await renderSearchResultItem();
  });

  test("Checking if image is visible", async () => {
    await renderSearchResultItem();
    const image = screen.getByRole("img");
    await flushPromises();
    expect(image).toBeVisible();
  });

  test("Checking image properties", async () => {
    await renderSearchResultItem();
    const image = screen.getByRole("img");
    await flushPromises();
    expect(image).toHaveAttribute("alt", "Super Simple Biology");
    await flushPromises();
    expect(image).toHaveAttribute(
      "style",
      "width: 188px; height: 88px; border-radius: 4px; padding-right: 32px;"
    );
  });

  test("Checking text styles", async () => {
    await renderSearchResultItem();
    const h6 = screen.getByText("Super Simple Biology");
    await flushPromises();
    expect(h6).toHaveStyle("height: 24px; color: rgb(23, 23, 23)");
    const p1 = screen.getByText("By D K Hudson");
    await flushPromises();
    expect(p1).toHaveStyle(
      "height: 22px; color: rgb(137, 137, 137); paddingTop: 4px; paddingBottom: 4px"
    );
    const p2 = screen.getByText("Category -");
    await flushPromises();
    expect(p2).toHaveStyle("height: 22px; color: rgb(137, 137, 137)");
    await flushPromises();
    const p3 = screen.getByText("Humorous");
    expect(p3).toHaveStyle("height: 22px; color: rgb(96, 96, 96)");
  });
});
