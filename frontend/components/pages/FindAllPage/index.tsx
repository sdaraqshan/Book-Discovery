import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePageNavigationContext } from "../../../contexts/pageNavigationContext";
import { usePageStateContext } from "../../../contexts/pageStateContext";
import { useSearchContext } from "../../../contexts/searchContext";
import { BookDescriptionProps } from "../../../types";
import DropDown from "../../molecules/dropdown";
import Pagination from "../../molecules/pagination";
import SearchResultCard from "../../organisms/searchResultsCard";

type LocationState = { books: BookDescriptionProps[] };

export default function FindAllPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = useState(10);
  const location = useLocation();
  const { setPageNavigation } = usePageNavigationContext();
  const nav_state = useRef<boolean>(true);
  const { search_value } = useSearchContext();
  const { setPageState } = usePageStateContext();

  React.useEffect(() => {
    setPageNavigation(nav_state.current);
    nav_state.current = false;
  }, [search_value, setPageNavigation]);

  const { books } = location.state as LocationState;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = books.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  const handleClick = (book_id: number) => {
    setPageState(book_id.toString());
    navigate("/book-description");
  };

  return (
    <div
    data-testid='find-all-page'
      style={{
        height: "100vh !important",
        position: "relative",
        margin: "0 100px",
      }}
    >
      <Box
        sx={{
          margin: "59px 0 43px 0  !important",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="heading1">
          Search Results for {search_value}{" "}
        </Typography>
        <DropDown />
      </Box>
      <Grid
        container
        rowSpacing={2}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        {currentPosts.map((book: BookDescriptionProps) => {
          return (
            <Grid item key={book.id}>
              <SearchResultCard
                book_id={book.id}
                key={book.id}
                author_name={book.authorDTO.name}
                book_title={book.title}
                book_description={book.description}
                book_category={book.categoryDTO.name}
                book_rating={4.5}
                book_ratings={830}
                book_image={book.image}
                onClick={handleClick}
              />
            </Grid>
          );
        })}
      </Grid>

      <div style={{ paddingTop: "40px" }}>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={books.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
