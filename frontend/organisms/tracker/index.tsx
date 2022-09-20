import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../../themes/theme";
import Image from "../../atoms/image/index";
import CurrentReading from "../../../../public/assets/images/icons/current_reading.png";
import BooksToRead from "../../../../public/assets/images/icons/books_to_read.png";
import BooksRead from "../../../../public/assets/images/icons/books_read.png";
import TargetPerYear from "../../../../public/assets/images/icons/target.png";
import { TrackerProps } from "../../../types";
import Constants from "../../../data/constants";
import API from "../../../api/library";
import { useTrackerContext } from "../../../contexts/trackerContext";

export default function Tracker(props: TrackerProps) {
  const icon = getTrackerIcon(props.name);
  const [idleCount, setIdleCount] = useState<number>(0);
  const [readCount, setReadCount] = useState<number>(0);
  const [readingCount, setReadingCount] = useState<number>(0);
  const [bookmarkedCount, setBookmarkedCount] = useState<number>(0);
  const { tracker } = useTrackerContext();

  useEffect(() => {
    const retrieveCounts = async () => {
      try {
        const idle_response = await API.get("users/trackerCount?stateName=idle");
      setIdleCount(idle_response.data);

      const read_response = await API.get("users/trackerCount?stateName=read");

      setReadCount(read_response.data);
      const reading_response = await API.get(
        "users/trackerCount?stateName=reading"
      );

      setReadingCount(reading_response.data);
      const bookmarked_response = await API.get(
        "users/trackerCount?stateName=bookmarked"
      );

      setBookmarkedCount(bookmarked_response.data);
      }
      catch {
        
      }
    };
    retrieveCounts();
    console.log(idleCount);
  }, [idleCount, tracker]);

  return (
    <Stack
      spacing={0}
      data-testid='tracker'
      sx={{
        height: "104px",
        width: "273px",
        background: `${theme.palette.structural.color3}`,
      }}
    >
      <Stack
        direction="row"
        spacing={0}
        sx={{
          margin: "24px",
        }}
        alignItems="center"
      >
        <Image
          src={icon}
          alt={props.name}
          style={{ height: "40px", width: "40px", marginRight: "41.5px" }}
        />
        <Stack spacing={0}>
          <Typography
            variant="caption1"
            data-testid='tracker-name'
            sx={{
              height: "16px",
              color: `${theme.palette.textColor.lowEmphasis}`,
              marginBottom: "2px",
            }}
          >
            {props.name}
          </Typography>
          <Typography
            variant="heading1"
            data-testid='tracker-count'
            sx={{
              height: "36px",
              color: `${theme.palette.textColor.mediumEmphasis}`,
              marginTop: "2px",
            }}
          >
            {props.name == Constants.tracker_constants.CURRENTLY_READING
              ? readingCount
              : props.name == Constants.tracker_constants.BOOKS_TO_READ
              ? bookmarkedCount
              : props.name == Constants.tracker_constants.BOOKS_READ
              ? readCount
              : 100}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

function getTrackerIcon(name: string) {
  switch (name) {
    case Constants.tracker_constants.CURRENTLY_READING:
      return CurrentReading;
    case Constants.tracker_constants.BOOKS_TO_READ:
      return BooksToRead;
    case Constants.tracker_constants.BOOKS_READ:
      return BooksRead;
    case Constants.tracker_constants.TARGET_PER_YEAR:
      return TargetPerYear;
  }
}
