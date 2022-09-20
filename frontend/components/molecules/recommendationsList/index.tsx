import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../../atoms/image/index";
import theme from "../../../themes/theme";
import Chevron from "../../../../public/assets/images/icons/chevron.png";
import Recommendation from "../../organisms/recommendationsCard";
import { ListProps } from "../../../types";

export default function RecommendationList(props: ListProps) {
  return (
    <Stack sx={{ width: "1166px" }} data-testid='recommendation-list'>
      <Stack
        direction="row"
        spacing={0}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "1166px", marginTop: "104px" }}
      >
        <Typography
          variant="heading1"
          data-testid='recommendation-list-title'
          sx={{
            height: "36px",
            colour: `${theme.palette.textColor.highEmphasis}`,
          }}
        >
          {props.title}
        </Typography>
        {props.items.length >= 4 && (
          <Stack
            direction="row"
            alignItems="center"
            spacing={0}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              variant="body2"
              sx={{ height: "22px", color: `${theme.palette.primary.main500}` }}
            >
              See more
            </Typography>
            <Image
              src={Chevron}
              alt="Chevron"
              style={{ width: "24px", height: "24px" }}
            />
          </Stack>
        )}
      </Stack>
      <Grid container
        direction="row"
        columnSpacing="25px"
        rowSpacing="20px"
        justifyContent="flex-start"
        marginTop="16px"
      >
        {props.items &&
          props.items.map((item_id) => (
            <Grid item key={item_id} xs={3}>
            <Recommendation
              key={item_id}
              book_id={item_id}
              bookmarkedUpdate={props.fetch}
            />
            </Grid>
          ))}
      </Grid>
    </Stack>
  );
}
