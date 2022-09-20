import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import HomeHeading from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Molecules/Home Heading",
  component: HomeHeading,
} as ComponentMeta<typeof HomeHeading>;

const Template: ComponentStory<typeof HomeHeading> = (args) => (
  <ThemeProvider theme={theme}>
    <HomeHeading {...args} />
  </ThemeProvider>
);

export const list = Template.bind({});
list.args = {
  title: "Books You are Reading",
};
