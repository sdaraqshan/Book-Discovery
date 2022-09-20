import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import bannerImage from "../../../../public/assets/images/bookshelf.png";
import Constants from "../../../data/constants";
import Buttons from "../../atoms/button/index";
import theme from "../../../themes/theme";

const BannerContainer = styled("div")({
  width: "1166px",
  height: "286px",
  background: `${theme.palette.structural.linear1}`,
  display: "flex",
  alignContent: "center",
  borderRadius: "8px",
});

const LeftBannerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  gap: "15px",
  top: "45px",
  left: "45px",
  width: "591px",
  height: "166px",
});

const LeftBannerTopContainer = styled("div")({
  top: "65px",
  left: "48px",
  gap: "10px",
  color: `${theme.palette.structural.white}`,
});

const LeftBannerBottomContainer = styled("div")({
  top: "109px",
  color: `${theme.palette.structural.white}`,
  gap: "30px",
});

const RightContainer = styled("div")({
  top: "52px",
  left: "228px",
  position: "relative",
});

const ExploreBanner = () => {
  return (
    <Box
    data-testid='banner'
      sx={{
        backgroundColor:
          "linear-gradient(90.14deg, #8C52C6 0.95%, #683799 100%)",
      }}
    >
      <BannerContainer>
        <LeftBannerContainer>
          <LeftBannerTopContainer>
            <Typography variant="heading1" sx={{ fontWeight: "800" }} data-testid='banner-heading'>
              {Constants.banner.heading}
            </Typography>
          </LeftBannerTopContainer>
          <LeftBannerBottomContainer>
            <Typography variant="body1" data-testid='banner-description'>
              {Constants.banner.description}
            </Typography>
          </LeftBannerBottomContainer>
          <Buttons
            style={{
              width: "103px",
              height: "38px",
              top: "142px",
              borderRadius: "4px",
              padding: "8px 24px 8px 24px",
              gap: "10px",
              backgroundColor: `${theme.palette.primary.main500}`,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
            }}
          >
            <Typography
              variant="body2"
              data-testid='discover'
              sx={{
                height: "22px",
                top: "8px",
                left: "24px",
                color: `${theme.palette.structural.white}`,
                fontWeight: "700",
              }}
            >
              Discover
            </Typography>
          </Buttons>
        </LeftBannerContainer>
        <RightContainer>
          <img
            src={bannerImage}
            alt="bannerImage"
            width="199px"
            height="168px"
          />
        </RightContainer>
      </BannerContainer>
    </Box>
  );
};

export default ExploreBanner;
