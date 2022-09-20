import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RecommendationsList from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Molecules/RecommendationsList",
  component: RecommendationsList,
} as ComponentMeta<typeof RecommendationsList>;

const Template: ComponentStory<typeof RecommendationsList> = (args) => (
  <ThemeProvider theme={theme}>
    <RecommendationsList {...args} />
  </ThemeProvider>
);

export const list = Template.bind({});
list.args = {
  items: [15, 16, 17, 18],
  margin: "104px 0px 0px 0px",
  title: "Recommendations",
};
