import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TopicsList from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Molecules/TopicsList",
  component: TopicsList,
} as ComponentMeta<typeof TopicsList>;

const Template: ComponentStory<typeof TopicsList> = (args) => (
  <ThemeProvider theme={theme}>
    <TopicsList {...args} />
  </ThemeProvider>
);

export const list = Template.bind({});
list.args = {
  items: [9, 10, 11, 12, 13, 14],
  margin: "78px 0px 0px 0px",
  title: "Topics You Follow",
};
