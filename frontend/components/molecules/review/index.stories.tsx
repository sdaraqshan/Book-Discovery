import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Review from "./index";
import Avatar from "../../../../public/assets/images/avatars/avatar_medium_4.png";
import { theme } from "../../../themes/theme";
import { ThemeProvider } from "@mui/system";

export default {
  title: "Molecules/Review",
  component: Review,
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => (
  <ThemeProvider theme={theme}>
    <Review {...args} />
  </ThemeProvider>
);

export const book_review = Template.bind({});
book_review.args = {
  image: Avatar,
  title: "Radha",
  designation: "Professor at Harvard  University",
  rating: 4.5,
  comment:
    "Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the ",
};
