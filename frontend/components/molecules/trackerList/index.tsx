import { Stack } from "@mui/material";
import React from "react";
import Tracker from "../../organisms/tracker/index";

type TrackerListProps = {
  margin: string;
};

export default function TrackerList(props: TrackerListProps) {
  return (
    <Stack
      direction="row"
      spacing="25px"
      justifyContent="space-around"
      position="relative"
      margin={props.margin}
      sx={{ width: "1166px" }}
      data-testid='tracker-list'
    >
      <Tracker name="CURRENTLY READING" />
      <Tracker name="BOOKS TO READ" />
      <Tracker name="BOOKS READ" />
      <Tracker name="TARGET PER YEAR" />
    </Stack>
  );
}
