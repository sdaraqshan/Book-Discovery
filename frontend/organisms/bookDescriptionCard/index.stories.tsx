import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BookCard from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Organisms/BookDescriptionCard",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <ThemeProvider theme={theme}>
    <BookCard {...args} />
  </ThemeProvider>
);

export const list = Template.bind({});
list.args = {
  book_id: 1
};
