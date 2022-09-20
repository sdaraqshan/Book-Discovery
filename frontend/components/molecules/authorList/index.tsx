import { Stack, Typography } from "@mui/material";
import React from "react";
import BookCard from "../bookCard/index";
import theme from "../../../themes/theme";
import Image from "../../atoms/image/index";
import Right from "../../../../public/assets/images/icons/page_right.png";
import { BooksListProps } from "../../../types";

function AuthorList(props: BooksListProps) {
  return (
    <Stack sx={{ marginBottom: "65px" }} data-testid='author-list'>
      <Stack direction="row">
        <Typography
          variant="subtitle2"
          color={theme.palette.textColor.highEmphasis}
          fontWeight="700"
          marginBottom="16px"
          marginRight="562px"
          data-testid='title'
        >
          {props.title}
        </Typography>
        <Stack direction="row" sx={{ cursor: "pointer" }}>
          <Typography
            variant="body2"
            color={theme.palette.primary.main500}
            fontWeight="600px"
            marginBottom="16px"
            data-testid='more'
          >
            See More
          </Typography>
          <Image
            src={Right}
            alt="page_right"
            style={{ width: "20px", height: "20px" }}
          />
        </Stack>
      </Stack>
      <Stack direction="row">
        {props.items &&
          props.items.map((item_id) => (
            <BookCard key={item_id} book_id={item_id} type={"author"} />
          ))}
      </Stack>
    </Stack>
  );
}

export default AuthorList;
