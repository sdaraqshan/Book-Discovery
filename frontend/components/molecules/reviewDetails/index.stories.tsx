import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ReviewFollowing from "./index";
import { theme } from "../../../themes/theme";
import { ThemeProvider } from "@mui/system";

export default {
  title: "Molecules/ReviewDetails",
  component: ReviewFollowing,
} as ComponentMeta<typeof ReviewFollowing>;

const Template: ComponentStory<typeof ReviewFollowing> = (args) => (
  <ThemeProvider theme={theme}>
    <ReviewFollowing {...args} />
  </ThemeProvider>
);

export const book_review_details = Template.bind({});
book_review_details.args = {
  title: "Anvitha Sharma",
  designation: "Student",
  rating: 4.5,
};
