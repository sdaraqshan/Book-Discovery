import { Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../../../themes/theme";
import { ReviewProps } from "../../../types";
import Image from "../../atoms/image/index";
import ReviewDetails from "../reviewDetails/index";

export default function Review(props: ReviewProps) {
  return (
    <Stack
    data-testid='review-following'
      spacing={0}
      sx={{
        padding: "12px 6px",
        height: "108px",
        width: "228px",
        background: `${theme.palette.structural.white}`,
        borderRadius: "8px",
        border: "1px solid " + `${theme.palette.greyColors.main100}`,
        marginRight: "24px",
      }}
    >
      <Stack direction="row" spacing={0}>
        <Image
          src={props.image}
          alt={props.title}
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "100%",
            marginRight: "24px",
          }}
        />
        <ReviewDetails
          title={props.title}
          designation={props.designation}
          rating={props.rating}
        />
      </Stack>
      <Typography
        variant="caption1"
        data-testid='review-following-comment'
        sx={{
          color: `${theme.palette.textColor.mediumEmphasis}`,
          marginTop: "14px",
        }}
      >
        {props.comment}
      </Typography>
    </Stack>
  );
}
