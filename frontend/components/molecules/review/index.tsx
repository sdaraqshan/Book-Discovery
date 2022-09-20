import { Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../../../themes/theme";
import Image from "../../atoms/image/index";
import { ReviewProps } from "../../../types";
import Like from "./../../../../public/assets/images/icons/like.png";
import Dislike from "./../../../../public/assets/images/icons/dislike.png";
import ReviewDetails from "../reviewDetails/index";

export default function Review(props: ReviewProps) {
  return (
    <Stack
    data-testid='review'
      spacing={0}
      sx={{
        paddingTop: "6px",
        width: "768px",
        background: `${theme.palette.primary.light}`,
        marginBottom: "12px",
        paddingBottom: "16px",
        borderBottom: `1px solid ${theme.palette.greyColors.main100}`,
      }}
    >
      <Stack
        direction="row"
        sx={{ marginTop: "6px", marginBottom: "6px", width: "703px" }}
        spacing={0}
        alignItems="center"
      >
        <Image
          src={props.image}
          alt={props.title}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "100%",
            paddingRight: "12px",
          }}
        />
        <ReviewDetails title={props.title} designation={props.designation} rating={props.rating}/>
          </Stack>
      <div
        style={{
          width: "703px",
          marginTop: "6px",
          marginBottom: "6px",
        }}
      >
        <Typography
          variant="caption1"
          data-testid='review-comment'
          sx={{
            color: `${theme.palette.textColor.mediumEmphasis}`,
          }}
        >
          {props.comment}
        </Typography>
        <Typography
          variant="caption1"
          sx={{
            color: `${theme.palette.primary.main500}`,
          }}
        >
          See more
        </Typography>
      </div>
      <Stack
        direction="row"
        sx={{
          width: "110px",
          height: "24px",
          marginTop: "6px",
          marginBottom: "6px",
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src={Like}
          alt="Like"
          style={{
            width: "24px",
            height: "24px",
          }}
        />
        <Image
          src={Dislike}
          alt="Dislike"
          style={{
            width: "24px",
            height: "24px",
          }}
        />
        <Typography
          variant="caption1"
          sx={{
            color: `${theme.palette.textColor.highEmphasis}`,
          }}
        >
          Reply
        </Typography>
      </Stack>
    </Stack>
  );
}
