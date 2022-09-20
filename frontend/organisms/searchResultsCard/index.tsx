import React, { useEffect, useState } from "react";
import Image from "../../atoms/image/index";
import Author from "../../../../public/assets/images/avatars/avatar_small_2.png";
import { Card, Stack, styled, Typography } from "@mui/material";
import theme from "../../../themes/theme";
import { SearchResultCardProps, UserBookProps } from "../../../types";
import More from "../../../../public/assets/images/icons/more_large.png";
import Star from "../../../../public/assets/images/icons/star.png";
import Bookmark from "../../../../public/assets/images/icons/bookmark.png";
import Share from "../../../../public/assets/images/icons/share.png";
import { useBookIdContext } from "../../../contexts/bookIdContext";
import Constants from "../../../data/constants";
import { useTrackerContext } from "../../../contexts/trackerContext";
import API from "../../../api/library";
import bookmarked from "../../../../public/assets/images/icons/bookmarked.png";

export default function SearchResultCard(props: SearchResultCardProps) {
  const author_name = props.author_name;
  const book_title = props.book_title;
  const book_description = props.book_description;
  const book_category = props.book_category;
  const book_rating = props.book_rating;
  const book_ratings = props.book_ratings;
  const book_image = props.book_image;
  const { setBookId } = useBookIdContext();

  const [userBookInfo, setUserBookInfo] = useState<UserBookProps>(
    Constants.user_book_details
  );
  let state;
  const { tracker, setTracker } = useTrackerContext();

  useEffect(() => {
    const retrieveBookDetails = async () => {
      try {
        const response = await API.get("users/1/books/" + props.book_id);
        setUserBookInfo(response.data);
      } catch {}
    };

    retrieveBookDetails();
  }, [props.book_id, tracker]);

  const bookmarkBook = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (userBookInfo.status.bookmarked) {
      state = "idle";
    } else {
      state = "bookmarked";
    }
    API.post(`users/1/books/${props.book_id}?stateName=${state}`);
    setTracker(tracker + 1);
  };

  const StyledCard = styled(Card)({
    borderRadius: "8px",
    boxShadow: "0px 0px 8px rgba(125, 125, 125, 0.14)",
    "&:hover": {
      cursor: "pointer",
    },
  });

  return (
    <StyledCard data-testid="search-result-card">
      <Stack
        direction="row"
        spacing={0}
        sx={{
          background: `${theme.palette.structural.main}`,
          padding: "24px",
          width: "523px",
          height: "239px",
        }}
      >
        <img
          src={book_image || ""}
          alt={book_title}
          style={{
            height: "239px",
            width: "184px",
            borderRadius: "8px",
            marginRight: "44px",
          }}
          onClick={() => {
            setBookId(props.book_id);
            props.onClick(props.book_id);
          }}
          data-testid={"search-results" + props.book_id}
        />
        <Stack spacing={0}>
          <Stack
            direction="row"
            sx={{ width: "295px" }}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Stack direction="row" alignItems="center">
              <Image
                src={Author}
                alt={props.book_id.toString()}
                style={{
                  height: "32px",
                  width: "32px",
                  borderRadius: "100%",
                  margin: "4px",
                }}
              />
              <Stack spacing={0} sx={{ marginLeft: "7.82px" }}>
                <Typography
                  variant="body1"
                  data-testid="search-result-card-author-name"
                  sx={{
                    height: "22px",
                    color: `${theme.palette.textColor.highEmphasis}`,
                  }}
                >
                  {author_name}
                </Typography>
                <Typography
                  variant="caption1"
                  sx={{
                    height: "16px",
                    color: `${theme.palette.textColor.lowEmphasis}`,
                  }}
                >
                  Author
                </Typography>
              </Stack>
            </Stack>
            <Image
              src={More}
              alt="More"
              style={{ height: "24px", width: "24px", borderRadius: "8px" }}
            />
          </Stack>
          <Typography
            variant="subtitle2"
            data-testid="search-result-card-title"
            sx={{
              height: "24px",
              color: `${theme.palette.textColor.mediumEmphasis}`,
              marginTop: "16px",
              marginBottom: "4px",
            }}
          >
            {book_title}
          </Typography>
          <div
            style={{ width: "295px", marginTop: "4px", marginBottom: "4px" }}
          >
            <Typography
              variant="caption1"
              data-testid="search-result-card-description"
              sx={{ color: `${theme.palette.textColor.lowEmphasis}` }}
            >
              {book_description}
            </Typography>
            <Typography
              variant="caption1"
              sx={{ color: `${theme.palette.primary.main500}` }}
            >
              See More
            </Typography>
          </div>
          <div style={{ width: "295px", marginTop: "4px" }}>
            <Typography
              variant="caption1"
              sx={{ color: `${theme.palette.textColor.lowEmphasis}` }}
            >
              Category -
            </Typography>
            <Typography
              variant="caption1"
              data-testid="search-result-card-category"
              sx={{ color: `${theme.palette.textColor.mediumEmphasis}` }}
            >
              {book_category}
            </Typography>
          </div>
          <Stack
            direction="row"
            spacing={0}
            sx={{
              width: "295px",
            }}
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Stack spacing={0}>
              <Stack
                direction="row"
                spacing={0}
                alignItems="center"
                sx={{ height: "24px", marginTop: "35px" }}
              >
                <Typography
                  variant="caption1"
                  sx={{
                    height: "16px",
                    color: `${theme.palette.textColor.lowEmphasis}`,
                  }}
                >
                  {book_rating}
                </Typography>
                <Image
                  src={Star}
                  alt="Star"
                  style={{ height: "24px", width: "24px" }}
                />
              </Stack>
              <Typography
                variant="caption1"
                data-testid="search-result-card-ratings"
                sx={{
                  height: "16px",
                  color: `${theme.palette.textColor.lowEmphasis}`,
                }}
              >
                {book_ratings} ratings
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0}>
              <img
                src={userBookInfo.status.bookmarked ? bookmarked : Bookmark}
                alt="Bookmark"
                style={{
                  height: "24px",
                  width: "24px",
                  marginRight: "11.86px",
                }}
                onClick={bookmarkBook}
                data-testid={"bookmark" + props.book_id}
              />
              <Image
                src={Share}
                alt="Share"
                style={{ height: "24px", width: "24px" }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </StyledCard>
  );
}
