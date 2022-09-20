import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BooksReadingList from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Molecules/BooksReadingList",
  component: BooksReadingList,
} as ComponentMeta<typeof BooksReadingList>;

const Template: ComponentStory<typeof BooksReadingList> = (args) => (
  <ThemeProvider theme={theme}>
    <BooksReadingList {...args} />
  </ThemeProvider>
);

export const list = Template.bind({});
list.args = {
  items: [11, 12, 13, 14],
  margin: "64px 0px 0px 0px",
  title: "Books You are Reading",
};
