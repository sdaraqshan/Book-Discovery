import { Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../../../themes/theme";
import { ReviewDetailsProps } from "../../../types";
import Star from "./../../../../public/assets/images/icons/star.png";
import Image from "../../atoms/image/index";

export default function Review(props: ReviewDetailsProps) {
  return (
    <Stack spacing={0} data-testid='review-details'>
      <Typography
        variant="subtitle1"
        data-testid='review-detail-title'
        sx={{
          height: "24px",
          color: `${theme.palette.textColor.highEmphasis}`,
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="caption1"
        data-testid='review-detail-designation'
        sx={{
          height: "16px",
          color: `${theme.palette.textColor.lowEmphasis}`,
        }}
      >
        {props.designation}
      </Typography>
      <Stack direction="row" spacing={0} alignItems="center">
        <Typography
          variant="caption1"
          data-testid='review-detail-rating'
          sx={{
            height: "16px",
            width: "17px",
            color: `${theme.palette.textColor.lowEmphasis}`,
          }}
        >
          {props.rating}
        </Typography>
        <Image
          src={Star}
          alt="Star"
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      </Stack>
    </Stack>
  );
}
