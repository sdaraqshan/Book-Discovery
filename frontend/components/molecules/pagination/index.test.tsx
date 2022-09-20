import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Pagination from "./index";

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderPagination = async () => {
  render(
    <Pagination
      postsPerPage={10}
      totalPosts={20}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      paginate={(c:number)=>{}}
    />
  );
}

test("Should Renders a Button", async () => {
  await renderPagination();
  const buttonElement = screen.getByText(/results/i);
  await flushPromises();
  expect(buttonElement).toBeInTheDocument();
});
