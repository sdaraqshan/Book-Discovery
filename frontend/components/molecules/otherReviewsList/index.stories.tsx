import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import OtherReviewList from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Molecules/otherReviewList",
  component: OtherReviewList,
} as ComponentMeta<typeof OtherReviewList>;

const Template: ComponentStory<typeof OtherReviewList> = () => (
  <ThemeProvider theme={theme}>
    <OtherReviewList />
  </ThemeProvider>
);
export const review_other = Template.bind({});



