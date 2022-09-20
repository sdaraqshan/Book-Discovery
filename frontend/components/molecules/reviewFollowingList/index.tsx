import { Stack, Typography } from "@mui/material";
import React from "react";
import Authorreview from "../reviewFollowing/index";
import theme from "../../../themes/theme";
import { ReviewProps } from "../../../types";
import Constants from "../../../data/constants";
import Image from "../../atoms/image/index";
import Right from "../../../../public/assets/images/icons/page_right.png";

function ReviewFollowingList() {
  const following_reviews: ReviewProps[] = Constants.following_Reviews;

  return (
    <Stack sx={{ marginBottom: "105px" }} data-testid='review-following-list'>
      <Stack direction="row">
        <Typography
          variant="subtitle2"
          color={theme.palette.textColor.highEmphasis}
          fontWeight="700"
          marginBottom="16px"
          marginRight="425px"
        >
          Reviews of People You are Following
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
      <Stack direction="row">
        {following_reviews &&
          following_reviews.map((review: ReviewProps) => {
            return (
              <Authorreview
                image={review.image}
                title={review.title}
                designation={review.designation}
                rating={review.rating}
                comment={review.comment}
                key={review.title}
              />
            );
          })}
      </Stack>
    </Stack>
  );
}

export default ReviewFollowingList;
