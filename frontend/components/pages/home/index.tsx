import { Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Banner from "../../molecules/banner";
import BooksReadingList from "../../molecules/booksReadingList";
import RecommendationList from "../../molecules/recommendationsList";
import TrackerList from "../../molecules/trackerList";
import TopicList from "../../molecules/topicsList";
import { usePageNavigationContext } from "../../../contexts/pageNavigationContext";
import { useSearchContext } from "../../../contexts/searchContext";

export default function HomePage() {
  const { setPageNavigation } = usePageNavigationContext();
  const nav_state = useRef<boolean>(true);
  const { search_value } = useSearchContext();

  useEffect(() => {
    setPageNavigation(nav_state.current);
    nav_state.current = false;
  }, [search_value, setPageNavigation]);

  return (
    <Stack alignItems="center" sx={{ paddingBottom: "56px" }} data-testid='home-page'>
      <Stack
        direction="column"
        spacing={0}
        alignItems="center"
        sx={{ paddingTop: "56px", width: "1166px" }}
      >
        <Banner />
        <TrackerList margin="64px 0px 0px 0px" />
        <BooksReadingList
          items={[11, 12, 13, 14]}
          margin="64px 0px 0px 0px"
          title="Books You are Reading"
        />
        <RecommendationList
          items={[15, 16, 17, 18]}
          margin="104px 0px 0px 0px"
          title="Recommendations"
        />
        <RecommendationList
          items={[19, 20, 21, 22]}
          margin="78px 0px 0px 0px"
          title="People You are Following Also Read"
        />
        <TopicList
          items={[9, 10, 11, 12, 13, 14]}
          margin="78px 0px 0px 0px"
          title="Topics You Follow"
        />
        <RecommendationList
          items={[23, 24, 25, 26]}
          margin="104px 0px 0px 0px"
          title="Top Ratings"
        />
      </Stack>
    </Stack>
  );
}
