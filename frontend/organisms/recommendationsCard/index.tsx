import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import rating from "../../../../public/assets/images/icons/star.png";
import share from "../../../../public/assets/images/icons/share.png";
import bookmark from "../../../../public/assets/images/icons/bookmark.png";
import bookmarked from "../../../../public/assets/images/icons/bookmarked.png";
import more from "../../../../public/assets/images/icons/more_large.png";
import theme from "../../../themes/theme";
import Constants from "../../../data/constants";
import { useEffect, useState } from "react";
import API from "../../../api/library";
import { BookDescriptionProps, UserBookProps } from "../../../types";
import { useTrackerContext } from "../../../contexts/trackerContext";
import { useBookIdContext } from "../../../contexts/bookIdContext";
import { usePageStateContext } from "../../../contexts/pageStateContext";
import { useNavigate } from "react-router-dom";

const WrapStyled = styled("div")({
  height: "385px",
  width: "273px",
  boxSizing: "border-box",
  backgroundColor: `${theme.palette.structural.white}`,
  borderRadius: "8px",
  boxShadow: "0px 0px 16px rgba(125, 125, 125, 0.12)",
  cursor: "pointer",
});

export type BooksRecommendationProps = {
  book_id: number;
  bookmarkedUpdate?: React.Dispatch<React.SetStateAction<number>>;
};

export default function Recommendation(props: BooksRecommendationProps) {
  const [book_details, setBookDetails] = useState<BookDescriptionProps>(
    Constants.book_details
  );
  const [user_book_details, setUserBookDetails] = useState<UserBookProps>(
    Constants.user_book_details
  );
  let state;
  const { tracker, setTracker } = useTrackerContext();
  const { setBookId } = useBookIdContext();
  const { setPageState } = usePageStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    const retrieveBookDetails = async () => {
      try {
        let response = await API.get(`users/1/books/${props.book_id}`);
        setUserBookDetails(response.data);
        response = await API.get(`books/${props.book_id}`);
        setBookDetails(response.data);
      } catch {}
    };

    retrieveBookDetails();
  }, [props.book_id, tracker]);

  const bookmarkBook = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (user_book_details.status.bookmarked) {
      state = "idle";
    } else {
      state = "bookmarked";
    }
    API.post(`users/1/books/${props.book_id}?stateName=${state}`);
    setTracker(tracker + 1);
  };

  const handleClick = (book_id: number) => {
    setPageState(book_id.toString());
    navigate("/book-description");
  };

  return (
    <WrapStyled data-testid="recommendations-card">
      <Stack
        sx={{
          padding: "12px",
        }}
        alignItems="flex-end"
        spacing={0}
      >
        <img src={more} alt="more" width="23.65px" height="24px" />
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            display: "flex",
            padding: "13px 49px",
          }}
        >
          <img
            src={book_details.image}
            alt={props.book_id.toString()}
            width="151px"
            height="165px"
            onClick={() => {
              setBookId(props.book_id);
              handleClick(props.book_id);
            }}
            data-testid={"image-" + props.book_id}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "12px",
          }}
        >
          <Typography
            variant="subtitle1"
            data-testid="recommendations-card-title"
            color={theme.palette.textColor.highEmphasis}
            sx={{ height: "24px", marginBottom: "2px" }}
          >
            {book_details.title}
          </Typography>
          <Typography
            variant="body1"
            data-testid="recommendations-card-author-name"
            color={theme.palette.textColor.lowEmphasis}
            sx={{ height: "22px", margin: "2px 0px" }}
          >
            By {book_details.authorDTO.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "2px 0px",
            }}
          >
            <Typography
              variant="body1"
              color={theme.palette.textColor.lowEmphasis}
            >
              Category:
            </Typography>
            <Typography
              variant="body1"
              data-testid="recommendations-card-category-name"
              color={theme.palette.textColor.mediumEmphasis}
            >
              {book_details.categoryDTO.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "2px 0px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              data-testid="recommendations-card-rating"
              color={theme.palette.textColor.lowEmphasis}
            >
              {user_book_details.rating}
            </Typography>
            <img src={rating} alt="star rating" width="24px" height="24px" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              data-testid="recommendations-card-pagesLeft"
              color={theme.palette.textColor.lowEmphasis}
              fontSize="14px"
              width="190px"
            >
              {user_book_details.pagesLeft} ratings
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <img
                src={
                  user_book_details.status.bookmarked ? bookmarked : bookmark
                }
                alt="bookmark"
                width="23.65px"
                height="24px"
                style={{ cursor: "pointer" }}
                onClick={bookmarkBook}
                data-testid={"bookmark-" + props.book_id}
              />
              <img src={share} alt="share" width="23.65px" height="24px" />
            </Box>
          </Box>
        </Box>
      </Stack>
    </WrapStyled>
  );
}
