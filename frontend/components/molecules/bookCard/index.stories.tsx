import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BookCard from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Organisms/BookCard",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <ThemeProvider theme={theme}>
    <BookCard {...args} />
  </ThemeProvider>
);

export const card1 = Template.bind({});
card1.args = {
  book_id: 31,
  type: "batchmate"
};
