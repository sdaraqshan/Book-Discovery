import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import SubtopicList from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Organisms/SubtopicList",
  component: SubtopicList,
} as ComponentMeta<typeof SubtopicList>;

const Template: ComponentStory<typeof SubtopicList> = (args) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <SubtopicList {...args} />
    </BrowserRouter>
  </ThemeProvider>
);

export const list = Template.bind({});
list.args = {
  topic_id: 1,
};
