import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import theme from "../../../themes/theme";
import SearchResultItem from "../../molecules/searchResultItem/index";
import AddButton from "../../atoms/button/index";
import Constants from "../../../data/constants";
import { BookDescriptionProps } from "../../../types";
import { useSearchContext } from "../../../contexts/searchContext";
import API from "../../../api/library";
import { useNavigate } from "react-router-dom";
import { usePageStateContext } from "../../../contexts/pageStateContext";
import { usePageNavigationContext } from "../../../contexts/pageNavigationContext";

export default function SearchResultsDropdown() {
  const { search_value } = useSearchContext();
  const navigate = useNavigate();
  // eslint-disable-next-line prefer-const
  // eslint-disable-next-line prefer-const
  let { page_state, setPageState } = usePageStateContext();

  const { is_navigated } = usePageNavigationContext();

  const [books, setBooks] = useState<BookDescriptionProps[]>([
    Constants.book_details,
  ]);
  const [allBooks, setAllBooks] = useState<BookDescriptionProps[]>([
    Constants.book_details,
  ]);

  useEffect(() => {
    const retrieveBooks = async () => {
      try {
        const response = await API.get("books/");
        return response.data;
      } catch {}
    };
    async function getBooks() {
      const fetched_books = await retrieveBooks();
      setAllBooks(fetched_books.filter(checkForSearchValue));
      setBooks(fetched_books.filter(checkForSearchValue).slice(0, 4));
    }
    function checkForSearchValue(book: BookDescriptionProps) {
      return (
        new RegExp(search_value, "i").test(book?.title) ||
        new RegExp(search_value, "i").test(book?.categoryDTO.name) ||
        new RegExp(search_value, "i").test(book?.authorDTO.name)
      );
    }
    getBooks();
  }, [search_value, is_navigated]);

  if (is_navigated) {
    return <></>;
  } else {
    return (
      <Stack
        data-testid="search-results-dropdown"
        direction="column"
        spacing={0}
        sx={{
          width: "513px",
          borderRadius: "8px",
          top: "57px",
          boxShadow: "0px 0px 24px rgba(125, 125, 125, 0.16)",
          position: "absolute",
          backgroundColor: `${theme.palette.structural.white}`,
          zIndex: 20,
          paddingTop: books.length > 0 ? "16px" : "10px",
        }}
      >
        {books?.map((book, index) => (
          <Stack
            sx={{
              marginTop: "16px",
              marginLeft: "24px",
              marginRight: "24px",
              paddingBottom: "16px",
              borderBottom: `1px solid ${theme.palette.greyColors.main100}`,
            }}
            key={index}
          >
            <SearchResultItem
              image={book.image}
              title={book.title}
              author={"By " + book?.authorDTO.name}
              category={book.categoryDTO.name}
            />
          </Stack>
        ))}
        {books.length > 0 ? (
          // <Link to={"/searchResults"} style={{ textDecoration: "none" }}>
          <AddButton
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              height: "48px",
              width: "513px",
            }}
            onClick={navigateToSearchResultsPage}
          >
            <Typography
              variant="subtitle1"
              height="24px"
              color={theme.palette.primary.main500}
              sx={{
                textTransform: "none",
              }}
            >
              See all results
            </Typography>
          </AddButton>
        ) : (
          <Typography
            variant="body1"
            height="22px"
            sx={{
              color: `${theme.palette.textColor.mediumEmphasis}`,
              marginLeft: "20px",
              marginBottom: "10px",
            }}
          >
            No Results found. Please try a different search term
          </Typography>
        )}
      </Stack>
    );
  }

  function navigateToSearchResultsPage() {
    page_state = Constants.header_state.SEARCH;
    setPageState(page_state);
    navigate("/searchResults", {
      state: { books: allBooks },
    });
  }
}
