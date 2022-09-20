import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ReviewFollowingList from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Molecules/ReviewFollowingList",
  component: ReviewFollowingList,
} as ComponentMeta<typeof ReviewFollowingList>;

const Template: ComponentStory<typeof ReviewFollowingList> = () => (
  <ThemeProvider theme={theme}>
    <ReviewFollowingList />
  </ThemeProvider>
);

export const reviewFollowingList = Template.bind({});
