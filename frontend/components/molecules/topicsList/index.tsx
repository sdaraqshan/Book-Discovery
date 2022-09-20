import { Stack } from "@mui/material";
import React from "react";
import { ListProps } from "../../../types";
import Topic from "../topic/index";
import HomeHeading from "../homeHeading";

export default function TopicList(props: ListProps) {
  return (
    <Stack sx={{ width: "1166px" }} data-testid='topic-list'>
      <HomeHeading title={props.title} />
      <Stack
        direction="row"
        spacing="20px"
        justifyContent="space-around"
        marginTop="16px"
      >
        {props.items &&
          props.items.map((item_id) => (
            <Topic key={item_id} topic_id={item_id} />
          ))}
      </Stack>
    </Stack>
  );
}
