import { Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../../atoms/image/index";
import theme from "../../../themes/theme";
import Chevron from "../../../../public/assets/images/icons/chevron.png";
import { HomeHeadingProps } from "../../../types";

export default function HomeHeading(props: HomeHeadingProps) {
  return (
    <Stack
      direction="row"
      spacing={0}
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: "1166px", marginTop: "104px" }}
      data-testid='home-heading'
    >
      <Typography
        variant="heading1"
        data-testid='heading-title'
        sx={{
          height: "36px",
          colour: `${theme.palette.textColor.highEmphasis}`,
        }}
      >
        {props.title}
      </Typography>
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
    </Stack>
  );
}
