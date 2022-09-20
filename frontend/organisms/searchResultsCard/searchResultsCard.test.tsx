import React from "react";
import { render, screen } from "@testing-library/react";

import SearchResultsCard from "./index";

const book = {
    id: 0,
    title: "Inorganic Chemistry",
    description: "",
    author: {
      id: 0,
      authorName: "",
      authorDescription: "",
      authorImage: "",
      authorFollowers: 0,
    },
    image: "",
    category: {
      id: 0,
      title: "",
    },
    rating: 0,
    pages: "0/0 pages left",
    reviews: 0,
    releaseDate: "",
    language: "",
    numberOfRatings: "",
    status: {
      isReading: false,
      isBookmarked: false,
      isRecommended: false,
      peopleAlsoRead: false,
      isTopRated: false,
    },
  };

describe("Image", () => {
  test("Renders Tracker component", () => {
    render(
      <SearchResultsCard
        book_id={1}
        author_name={book.author.authorName}
        book_title={book.title}
        book_description={book.description}
        book_category={book.category.title}
        book_rating={book.rating}
        book_ratings={parseInt(book.numberOfRatings)}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClick={() => {}}
      />
    );
  });

  test("Checking image attribute", () => {
    render(
      <SearchResultsCard
        book_id={1}
        author_name={book.author.authorName}
        book_title={book.title}
        book_description={book.description}
        book_category={book.category.title}
        book_rating={book.rating}
        book_ratings={parseInt(book.numberOfRatings)}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClick={()=>{}}
      />
    );
    const image = screen.getByAltText("Inorganic Chemistry");
    expect(image).toHaveAttribute(
      "style",
      "height: 239px; width: 184px; border-radius: 8px; margin-right: 44px;"
    );
  });
});
