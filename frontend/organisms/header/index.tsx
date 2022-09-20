import React from "react";
import { Stack, Typography } from "@mui/material";
import theme from "../../../themes/theme";
import Logo from "../../../../public/assets/images/logo.png";
import Image from "../../atoms/image/index";
import DropDown from "../../../../public/assets/images/icons/dropdown_white.png";
import SearchBar from "../../organisms/searchBar/index";
import Notification from "../../../../public/assets/images/icons/notification.png";
import Avatar from "../../../../public/assets/images/avatars/avatar_small_1.png";
import Button from "../../atoms/button";
import { Link } from "react-router-dom";
import Triangle from "../../../../public/assets/images/icons/triangle.png";
import Constants from "../../../data/constants";
import { usePageStateContext } from "../../../contexts/pageStateContext";

export default function Header() {
  const { page_state, setPageState } = usePageStateContext();

  return (
    <Stack
      sx={{
        background: `${theme.palette.structural.linear1}`,
        height: "68px",
      }}
    >
      <Stack
        direction="row"
        data-testid="header"
        sx={{ height: "40px", margin: "14px 100px" }}
        alignItems="center"
      >
        <Image src={Logo} alt="logo" style={{ height: "27.8px" }} />
        <Stack
          direction="row"
          sx={{ marginLeft: "79px", marginRight: "57px" }}
          alignContent="space-between"
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              style={{
                height: "30px",
              }}
              onClick={() => setPageState(Constants.header_state.HOME)}
              data-testid="home-tab"
            >
              <Typography
                variant="body1"
                sx={{
                  height: "22px",
                  color: `${theme.palette.structural.main}`,
                }}
              >
                Home
              </Typography>
            </Button>
          </Link>
          <Link to="/explore" style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              style={{
                height: "30px",
                padding: "4px 1px 4px 8px",
                border:
                  page_state == Constants.header_state.EXPLORE
                    ? "1px solid " + `${theme.palette.structural.main}`
                    : "1px solid transparent",
                marginRight: "5px",
              }}
              onClick={() => setPageState(Constants.header_state.EXPLORE)}
              data-testid="explore-tab"
            >
              <Stack direction="row" spacing={0} alignItems="center">
                <Typography
                  variant="body1"
                  sx={{
                    height: "22px",
                    color: `${theme.palette.structural.main}`,
                  }}
                >
                  Explore
                </Typography>
                <Image
                  src={DropDown}
                  alt="Dropdow"
                  style={{ height: "16px", width: "16px" }}
                />
              </Stack>
            </Button>
          </Link>
          {page_state == Constants.header_state.EXPLORE ? (
            <Image
              src={Triangle}
              alt="Triangle"
              style={{
                position: "absolute",
                height: "14.5px",
                width: "29px",
                top: "53px",
                left: "384px",
              }}
            />
          ) : null}
          <Link to="/library" style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              style={{
                height: "30px",
                padding: "4px 1px 4px 8px",
                border:
                  page_state == Constants.header_state.LIBRARY
                    ? "1px solid " + `${theme.palette.structural.main}`
                    : "1px solid transparent",
                marginRight: "10px",
              }}
              onClick={() => setPageState(Constants.header_state.LIBRARY)}
              data-testid="library-tab"
            >
              <Stack
                direction="row"
                spacing={0}
                alignItems="center"
                sx={{ height: "27.8px" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    height: "22px",
                    width: "61px",
                    color: `${theme.palette.structural.main}`,
                    margin: "4px",
                  }}
                >
                  My library
                </Typography>
                <Image
                  src={DropDown}
                  alt="Dropdow"
                  style={{ height: "16px", width: "16px" }}
                />
              </Stack>
            </Button>
          </Link>
        </Stack>
        <SearchBar />
        <Stack direction="row">
          <Image
            src={Notification}
            alt="Notification"
            style={{ height: "22.24px", width: "24px", marginRight: "24px" }}
          />
          <Image
            src={Avatar}
            alt="avatar"
            style={{ height: "32px", width: "32px", borderRadius: "100%" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
