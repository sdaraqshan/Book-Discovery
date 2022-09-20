import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import SubTopics from "../subtopicsList/index";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import allTopics from "../../../../public/assets/images/icons/all_topics.png";
import author from "../../../../public/assets/images/icons/authors.png";
import recentTitle from "../../../../public/assets/images/icons/recent_titles.png";
import popularTitle from "../../../../public/assets/images/icons/popular.png";
import theme from "../../../themes/theme";
import Constants from "../../../data/constants";

const WrapStyled = styled("div")({
  height: "628px",
  width: "1166px",
  boxSizing: "border-box",
  backgroundColor: `${theme.palette.structural.white}`,
  position: "absolute",
  zIndex: "1",
  boxShadow: "0px 0px 16px rgba(125, 125, 125, 0.12)",
  borderRadius: "8px",
  left: "107px",
});

export default function ExtendedNav() {
  const subtopic_ids = Constants.extendedNav_subtopics;
  return (
    <Container data-testid='extended-nav'>
      <WrapStyled>
        <Container>
          <Stack
            direction="row"
            spacing={8}
            sx={{
              marginTop: "25px",
              marginLeft: "130px",
              gap: "50px",
            }}
          >
            <Button
              variant="text"
              sx={{
                borderBottom: `4px solid ${theme.palette.primary.main500}`,
                width: "135px",
              }}
              startIcon={
                <img
                  src={allTopics}
                  alt="allTopics"
                  width="16px"
                  height="16px"
                />
              }
            >
              <Typography
                variant="body1"
                color={theme.palette.primary.main500}
                textTransform="none"
                sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "22px" }}
              >
                All Topics
              </Typography>
            </Button>
            <Button
              variant="text"
              startIcon={
                <img src={author} alt="author" width="16px" height="16px" />
              }
            >
              <Typography
                variant="body1"
                textTransform="none"
                color={theme.palette.textColor.mediumEmphasis}
                sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "22px" }}
              >
                Authors
              </Typography>
            </Button>
            <Button
              variant="text"
              startIcon={
                <img
                  src={recentTitle}
                  alt="recentTitle"
                  width="16px"
                  height="16px"
                />
              }
            >
              <Typography
                variant="body1"
                textTransform="none"
                color={theme.palette.textColor.mediumEmphasis}
                sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "22px" }}
              >
                Recent Titles
              </Typography>
            </Button>
            <Button
              variant="text"
              startIcon={
                <img
                  src={popularTitle}
                  alt="popularTitle"
                  width="16px"
                  height="16px"
                />
              }
            >
              <Typography
                variant="body1"
                textTransform="none"
                color={theme.palette.textColor.mediumEmphasis}
                sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "22px" }}
              >
                Popular Titles
              </Typography>
            </Button>
          </Stack>
        </Container>

        <Box
          sx={{
            flexGrow: 1,
            marginTop: "40px",
            marginLeft: "72px",
            marginRight: "80px",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            rowSpacing={4}
            data-testid='topics-grid'
          >
            {subtopic_ids &&
              subtopic_ids.map((subarray, index) => {
                return (
                  <Grid container item spacing={8} key={index}>
                    {subarray &&
                      subarray.map((subtopic_id) => {
                        return (
                          <Grid item xs={4} key={subtopic_id}>
                            <SubTopics topic_id={subtopic_id} />
                          </Grid>
                        );
                      })}
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </WrapStyled>
    </Container>
  );
}
