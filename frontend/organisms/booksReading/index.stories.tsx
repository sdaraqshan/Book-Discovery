import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BooksReadingCard from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Organisms/BooksReadingCard",
  component: BooksReadingCard,
} as ComponentMeta<typeof BooksReadingCard>;

const Template: ComponentStory<typeof BooksReadingCard> = (args) => (
  <ThemeProvider theme={theme}>
    <BooksReadingCard {...args} />
  </ThemeProvider>
);

export const card1 = Template.bind({});
card1.args = {
  book_id: 1,
};
