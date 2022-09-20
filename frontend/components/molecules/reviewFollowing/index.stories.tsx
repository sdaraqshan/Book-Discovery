import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ReviewFollowing from "./index";
import Avatar from "../../../../public/assets/images/avatars/avatar_medium_1.png";
import { theme } from "../../../themes/theme";
import { ThemeProvider } from "@mui/system";

export default {
  title: "Molecules/ReviewFollowing",
  component: ReviewFollowing,
} as ComponentMeta<typeof ReviewFollowing>;

const Template: ComponentStory<typeof ReviewFollowing> = (args) => (
  <ThemeProvider theme={theme}>
    <ReviewFollowing {...args} />
  </ThemeProvider>
);

export const book_review = Template.bind({});
book_review.args = {
  image: Avatar,
  title: "Anvitha Sharma",
  designation: "Student",
  rating: 4.5,
  comment:
    "JD Lee was the 2016 recipient of the American Chemical Society's Grady Stack",
};
