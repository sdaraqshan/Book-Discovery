import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/styles";
import Constants, { landingPageConstants } from "../../../data/constants";
import Buttons from "../../atoms/button/index";
import theme from "../../../themes/theme";
import Image from "../../atoms/image";
import Library from "../../../../public/assets/images/library.png";
import { Link } from "react-router-dom";
import { usePageStateContext } from "../../../contexts/pageStateContext";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
  gap: "16px",
  marginTop: "2rem",
  width: "433px",
  marginLeft: "30vw",
});

const MyLibrary = () => {
  const { setPageState } = usePageStateContext();
  return (
    <div data-testid='my-library'>
      <Image
        src={Library}
        style={{
          width: "323px",
          height: "214px",
          marginTop: "20vh",
          marginLeft: "33vw",
        }}
        alt="landingPageImage"
      />
      <Container>
        <Typography variant="heading2">{landingPageConstants.title}</Typography>
        <Typography
          variant="subtitle1"
          data-testid='landing-page-subtitle'
          sx={{
            textAlign: "center",
            color: `${theme.palette.textColor.mediumEmphasis}`,
          }}
        >
          {landingPageConstants.subTitle}
        </Typography>
        <Link to="/" style={{ textDecoration: "None" }}>
          <Buttons
            style={{
              borderRadius: "4px",
              padding: "12px 24px 12px 24px",
              gap: "10px",
              backgroundColor: "#FF725E",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
            onClick={() => setPageState(Constants.header_state.HOME)}
          >
            <Typography
              variant="body2"
              data-testid='landing-page-button-content'
              sx={{
                color: `${theme.palette.structural.white}`,
                fontWeight: "700",
              }}
            >
              {landingPageConstants.buttonContent}
            </Typography>
          </Buttons>
        </Link>
      </Container>
    </div>
  );
};

export default MyLibrary;
