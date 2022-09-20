import Image from "../../atoms/image/index";
import Star from "../../../../public/assets/images/icons/star.png";
import AddButton from "../../atoms/button/index";
import Bookmark from "../../../../public/assets/images/icons/bookmark.png";
import Share from "../../../../public/assets/images/icons/share.png";
import { UserBookProps, BookDescriptionProps } from "../../../types";
import React, { useEffect, useState } from "react";
import Constants from "../../../data/constants";
import { Stack, Typography } from "@mui/material";
import theme from "../../../themes/theme";
import bookmarked from "../../../../public/assets/images/icons/bookmarked.png";
import { useTrackerContext } from "../../../contexts/trackerContext";
import API from "../../../api/library";

export type descriptionProps = {
  book_id: number;
  bookmarkedUpdate?: React.Dispatch<React.SetStateAction<number>>;
};

export default function Recommendation(props: descriptionProps) {
  const [userBookInfo, setUserBookInfo] = useState<UserBookProps>(
    Constants.user_book_details
  );

  const [bookInfo, setBookInfo] = useState<BookDescriptionProps>(
    Constants.book_details
  );

  const { tracker, setTracker } = useTrackerContext();

  useEffect(() => {
    const retrieveBookDetails = async () => {
      try {
        let response = await API.get(`users/1/books/${props.book_id}`);
        setUserBookInfo(response.data);
        response = await API.get(`books/${props.book_id}`);
        setBookInfo(response.data);
      } catch {}
    };
    retrieveBookDetails();
  }, [props.book_id, tracker]);

  const bookmarkBook = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    let state = "bookmarked";

    if (userBookInfo.status.bookmarked) state = "idle";

    API.post(`users/1/books/${props.book_id}?stateName=${state}`);

    setTracker(tracker + 1);
  };

  const currentlyReadingBook = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    let state = "reading";
    if (userBookInfo.status.reading) state = "read";

    API.post(`users/1/books/${props.book_id}?stateName=${state}`);

    setTracker(tracker + 1);
  };

  const RenderButton = () => {
    if (!userBookInfo.status.reading)
      return (
        <AddButton
          style={{
            height: "38px",
            borderRadius: "4px",
            padding: "8px 24px 8px 24px",
            gap: "10px",
            backgroundColor: "#FF725E",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "22px",
          }}
        >
          <Typography
            variant="body2"
            data-testid="start-reading"
            sx={{
              top: "8px",
              left: "24px",
              color: `${theme.palette.structural.white}`,
              fontWeight: "700",
              textTransform: "none",
              cursor: "pointer",
            }}
            onClick={currentlyReadingBook}
          >
            Start Reading
          </Typography>
        </AddButton>
      );
    else
      return (
        <AddButton
          style={{
            height: "38px",
            borderRadius: "4px",
            padding: "8px 24px 8px 24px",
            gap: "10px",
            backgroundColor: "#FF725E",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "22px",
          }}
        >
          <Typography
            variant="body2"
            data-testid="stop-reading"
            sx={{
              top: "8px",
              left: "24px",
              color: `${theme.palette.structural.white}`,
              fontWeight: "700",
              textTransform: "none",
              cursor: "pointer",
            }}
            onClick={currentlyReadingBook}
          >
            Stop Reading
          </Typography>
        </AddButton>
      );
  };

  return (
    <Stack
      direction="row"
      data-testid="book-description-card"
      spacing={0}
      sx={{
        background: `${theme.palette.primary.light}`,
        width: "610px",
        height: "301px",
      }}
    >
      <Image
        src={bookInfo.image}
        alt="book-image"
        style={{
          height: "301px",
          width: "276px",
          borderRadius: "8px",
          marginRight: "25px",
        }}
      />
      <Stack direction="column" spacing={0} marginBottom="4px" gap="5px">
        <Typography
          variant="heading1"
          data-testid="book-description-card-title"
          fontWeight="600px"
          color={theme.palette.textColor.highEmphasis}
        >
          {bookInfo.title}
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.textColor.lowEmphasis}
          data-testid="book-description-card-author-name"
        >
          By {bookInfo.authorDTO.name}
        </Typography>
        <Typography variant="body1" color={theme.palette.textColor.lowEmphasis}>
          Category: {bookInfo.categoryDTO.name}{" "}
        </Typography>
        <Stack direction="row">
          <Typography
            variant="caption1"
            data-testid="book-description-card-rating"
            color={theme.palette.textColor.lowEmphasis}
          >
            {userBookInfo.rating}
          </Typography>
          <Image
            src={Star}
            alt="rating"
            style={{
              height: "16px",
              width: "16px",
              marginRight: "12px",
            }}
          />
        </Stack>
        <Typography
          variant="caption1"
          data-testid="book-description-card-pagesLeft"
          color={theme.palette.textColor.lowEmphasis}
        >
          {userBookInfo.pagesLeft} reviews
        </Typography>
        <Stack
          direction="row"
          sx={{
            textAlign: "center",
            alignItems: "baseline",
          }}
        >
          <Typography
            variant="caption1"
            color={theme.palette.textColor.lowEmphasis}
          >
            Release Date:&nbsp;
          </Typography>
          <Typography
            variant="body1"
            data-testid="book-description-card-release-date"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {bookInfo.releaseDate}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            textAlign: "center",
            alignItems: "baseline",
          }}
        >
          <Typography
            variant="caption1"
            color={theme.palette.textColor.lowEmphasis}
          >
            Language:&nbsp;
          </Typography>
          <Typography
            variant="body1"
            data-testid="book-description-card-language"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {bookInfo.language}
          </Typography>
        </Stack>

        <Stack direction="row" marginTop="72px">
          {RenderButton()}
          <img
            src={userBookInfo.status.bookmarked ? bookmarked : Bookmark}
            alt="bookmark"
            width="23.65px"
            height="24px"
            style={{ cursor: "pointer", marginTop: "7px", marginRight: "7px" }}
            onClick={bookmarkBook}
            data-testid="bookmark"
          />
          <Image
            src={Share}
            alt="Share"
            style={{
              height: "24px",
              width: "24px",
              marginTop: "7px",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
