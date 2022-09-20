import React from "react";
import { render} from "@testing-library/react";
import BookCard from "./index";

const renderAuthorBook = async () => {
  return render(<BookCard book_id={31} type="author"/>);
}

const renderBatchmateBook = async () => {
  return render(<BookCard book_id={1} type="batchmate" />);
}

describe("Image", () => {
  test("Renders Author Book component", async () => {
    await renderAuthorBook();
  });

  test("Render batchmate book card", async () => {
    await renderBatchmateBook();
  })
});
