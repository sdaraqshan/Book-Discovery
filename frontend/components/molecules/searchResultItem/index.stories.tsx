import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SearchResultItem from "./index";
import Book1 from "../../../../public/assets/images/books/book_wide_1.png";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Molecules/SearchResultItem",
  component: SearchResultItem,
} as ComponentMeta<typeof SearchResultItem>;

const Template: ComponentStory<typeof SearchResultItem> = (args) => (
  <ThemeProvider theme={theme}>
    <SearchResultItem {...args} />
  </ThemeProvider>
);

export const SearchItem1 = Template.bind({});
SearchItem1.args = {
  image: Book1,
  title: "Super Simple Biology",
  author: "By D K Hudson",
  category: "Humorous",
};
