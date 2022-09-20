import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TrackerList from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Molecules/TrackerList",
  component: TrackerList,
} as ComponentMeta<typeof TrackerList>;

const Template: ComponentStory<typeof TrackerList> = (args) => (
  <ThemeProvider theme={theme}>
    <TrackerList {...args} />
  </ThemeProvider>
);

export const list = Template.bind({});
list.args = {
  margin: "64px 0px 0px 0px",
};
