import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Tracker from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Organisms/Tracker",
  component: Tracker,
} as ComponentMeta<typeof Tracker>;

const Template: ComponentStory<typeof Tracker> = (args) => (
  <ThemeProvider theme={theme}>
    <Tracker {...args} />
  </ThemeProvider>
);

export const currentReading = Template.bind({});
currentReading.args = {
  name: "CURRENTLY READING",
};

export const books_to_read = Template.bind({});
books_to_read.args = {
  name: "BOOKS TO READ",
};

export const books_read = Template.bind({});
books_read.args = {
  name: "BOOKS READ",
};

export const target_per_year = Template.bind({});
target_per_year.args = {
  name: "TARGET PER YEAR",
};
