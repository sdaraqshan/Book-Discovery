import { Stack, Typography } from "@mui/material";
import BookCard from "../bookCard/index";
import theme from "../../../themes/theme";
import React from "react";
import { BooksListProps } from "../../../types";

function BatchmateList(props: BooksListProps) {
  return (
    <Stack data-testid='batchmate-list'>
      <Typography
        variant="subtitle2"
        color={theme.palette.textColor.highEmphasis}
        fontWeight="700"
        marginBottom="16px"
        data-testid='batchmate-title'
      >
        {props.title}
      </Typography>

      <Stack direction="column">
        {props.items &&
          props.items.map((item_id) => (
            <BookCard key={item_id} book_id={item_id} type="batchmate"/>
          ))}
      </Stack>
    </Stack>
  );
}

export default BatchmateList;
