import { Stack } from "@mui/material";
import React from "react";
import BooksReading from "../../organisms/booksReading";
import { ListProps } from "../../../types";
import HomeHeading from "../homeHeading";

export default function BooksReadingList(props: ListProps) {
  return (
    <Stack sx={{ width: "1166px" }} data-testid='books-reading-list'>
      <HomeHeading title={props.title} />
      <Stack
        direction="row"
        spacing="25px"
        justifyContent="space-around"
        marginTop="16px"
      >
        {props.items &&
          props.items.map((item_id) => (
            <BooksReading book_id={item_id} key={item_id} />
          ))}
      </Stack>
    </Stack>
  );
}
