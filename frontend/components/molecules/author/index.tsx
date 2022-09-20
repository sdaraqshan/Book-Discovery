import React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import avatar from "../../../../public/assets/images/avatars/avatar_large_1.png";
import Constants from "../../../data/constants";
import AddButton from "../../atoms/button/index";
import theme from "../../../themes/theme";

const MainContainer = styled("div")({
  width: "769px",
  height: "198px",
  marginBottom: "56px",
});

const AuthorDescription = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer data-testid='author-description'>
        <Typography
          variant="subtitle2"
          data-testid='author-heading'
          sx={{
            color: `${theme.palette.textColor.highEmphasis}`,
            fontWeight: "700",
            gap: "30px",
          }}
        >
          {Constants.author.heading}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            left: "100px",
            gap: "20px",
            marginTop: "16px",
          }}
        >
          <img src={avatar} alt="library" width="80px" height="80px" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "5px 0px",
              gap: "4px",
            }}
          >
            <Typography
              variant="body2"
              data-testid='author-name'
              sx={{
                color: `${theme.palette.textColor.highEmphasis}`,
                fontWeight: "700",
                gap: "3px",
              }}
            >
              {Constants.author.name}
            </Typography>
            <Typography
              variant="caption1"
              data-testid='author-followers'
              sx={{
                color: `${theme.palette.textColor.lowEmphasis}`,
                fontWeight: "400",
                gap: "3px",
              }}
            >
              {Constants.author.followers}
            </Typography>
            <AddButton
              variant="outlined"
              style={{
                border: "1px solid #FF725E",
                borderRadius: "4px",
                height: "24px",
                width: "100px",
              }}
            >
              <Typography
                variant="caption1"
                data-testid='following'
                sx={{
                  color: `${theme.palette.primary.main500}`,
                  textTransform: "none",
                }}
              >
                Following
              </Typography>
            </AddButton>
          </Box>
        </Box>

        <Box sx={{ width: "767px" }}>
          <Typography
            variant="body1"
            data-testid='author-description'
            sx={{
              color: `${theme.palette.textColor.lowEmphasis}`,
              fontWeight: "400",
              textAlign: "justify",
              gap: "30px",
              marginTop: "12px",
            }}
          >
            {Constants.author.description}
          </Typography>
        </Box>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AuthorDescription;
