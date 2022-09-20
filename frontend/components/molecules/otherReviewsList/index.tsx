import { Stack, Typography } from "@mui/material";
import React from "react";
import Authorreview from "../review/index";
import theme from "../../../themes/theme";
import { ReviewProps } from "../../../types";
import Constants from "../../../data/constants";
import Image from "../../atoms/image/index";
import Right from "../../../../public/assets/images/icons/page_right.png";

function OtherReviewsList() {
  const other_reviews: ReviewProps[] = Constants.reviews;

  return (
    <Stack data-testid='other-reviews-list'>
      <Stack direction="row">
        <Typography
          variant="subtitle2"
          color={theme.palette.textColor.highEmphasis}
          fontWeight="700"
          marginBottom="16px"
          marginRight="583px"
        >
          Other Reviews
        </Typography>
        <Stack direction="row" sx={{ cursor: "pointer" }}>
          <Typography
            variant="body2"
            color={theme.palette.primary.main500}
            fontWeight="600px"
            marginBottom="16px"
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
      <Stack direction="column">
        {other_reviews &&
          other_reviews.map((user_review: ReviewProps) => {
            return (
              <Authorreview
                image={user_review.image}
                title={user_review.title}
                designation={user_review.designation}
                rating={user_review.rating}
                comment={user_review.comment}
                key={user_review.title}
              />
            );
          })}
      </Stack>
    </Stack>
  );
}

export default OtherReviewsList;
