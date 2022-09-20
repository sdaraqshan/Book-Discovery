import Image from "../../atoms/image/index";
import { Stack, Typography } from "@mui/material";
import theme from "../../../themes/theme";
import {
  BooksProps,
  BookDescriptionProps,
  UserBookProps,
} from "../../../types";
import More from "../../../../public/assets/images/icons/more_small.png";
import Star from "../../../../public/assets/images/icons/star.png";
import API from "../../../api/library";
import React, { useEffect, useState } from "react";
import Constants from "../../../data/constants";

interface TypeProps {
  type: string;
}

const BookCard: React.FC<BooksProps & TypeProps> = ({ book_id, type }) => {
  const [book, setBook] = useState<BookDescriptionProps>(
    Constants.book_details
  );
  const [userBook, setUserBook] = useState<UserBookProps>(
    Constants.user_book_details
  );

  useEffect(() => {
    const retrieveBook = async () => {
      try {
        let response = await API.get(`books/${book_id}`);
        setBook(response.data);
        response = await API.get(`users/1/books/${book_id}`);
        setUserBook(response.data);
      }
      catch {

      }
    };

    retrieveBook();
  }, [book_id]);

  const renderMore = () => {
    if (type === "batchmate") {
      return (
        <Stack direction="row" spacing={2} data-testid='batchmate-book'>
          <Typography
            variant="body1"
            data-testid='batchmate-book-title'
            sx={{
              height: "22px",
              marginBottom: "2px",
              color: `${theme.palette.textColor.highEmphasis}`,
            }}
          >
            {book.title}
          </Typography>
          <Image
            src={More}
            alt="More"
            style={{ width: "16px", height: "16px" }}
          />
        </Stack>
      );
    }
    return (
      <Typography
        variant="body1"
        data-testid='book-title'
        sx={{
          height: "22px",
          marginBottom: "2px",
          color: `${theme.palette.textColor.highEmphasis}`,
        }}
      >
        {book.title}
      </Typography>
    );
  };

  return (
    <Stack direction="column" marginBottom="16px" data-testid='book-card'>
      <Stack
        direction="row"
        spacing={0}
        sx={{
          background: `${theme.palette.structural.main}`,
          width: type === "batchmate" ? "275px" : "240px",
          height: "134px",
          borderRadius: "8px",
          boxShadow: "0px 0px 8px rgba(125, 125, 125, 0.12)",
          marginRight: "24px",
        }}
      >
        <Image
          src={book.image}
          alt={book.id.toString()}
          style={{
            height: "118px",
            width: "91px",
            borderRadius: "4px",
            margin: "8px",
          }}
        />
        <Stack
          spacing={0}
          justifyContent="flex-start"
          alignItems="flex-end"
          sx={{ marginTop: "8px", marginRight: "8px" }}
        >
          {type === "author" && (
            <Image
              src={More}
              alt="More"
              style={{ width: "16px", height: "16px" }}
            />
          )}
          <Stack spacing={0}>
            {renderMore()}
            <Stack
              direction="row"
              spacing={0}
              sx={{ height: "16px", marginTop: "2px", marginBottom: "2px" }}
            >
              <Typography
                variant="caption1"
                sx={{
                  color: `${theme.palette.textColor.lowEmphasis}`,
                }}
              >
                Category -
              </Typography>
              <Typography
                variant="caption1"
                data-testid='book-category'
                sx={{
                  color: `${theme.palette.textColor.mediumEmphasis}`,
                }}
              >
                {book.categoryDTO.name}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={0}
              alignItems="center"
              sx={{ marginTop: "2px", marginBottom: "2px" }}
            >
              <Typography
                variant="caption1"
                data-testid='book-rating'
                sx={{
                  color: `${theme.palette.textColor.lowEmphasis}`,
                  marginRight: "2px",
                }}
              >
                {userBook.rating}
              </Typography>
              <Image
                src={Star}
                alt="Star"
                style={{ height: "24px", width: "24px", marginLeft: "2px" }}
              />
            </Stack>
            <Typography
              variant="caption1"
              data-testid='book-pagesLeft'
              sx={{
                height: "16px",
                color: `${theme.palette.textColor.lowEmphasis}`,
                marginTop: "2px",
              }}
            >
              {userBook.pagesLeft} reviews
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BookCard;
