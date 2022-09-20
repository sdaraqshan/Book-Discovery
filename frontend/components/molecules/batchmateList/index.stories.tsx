import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BatchmateList from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Molecules/BatchmateList",
  component: BatchmateList,
} as ComponentMeta<typeof BatchmateList>;

const Template: ComponentStory<typeof BatchmateList> = (args) => (
  <ThemeProvider theme={theme}>
    <BatchmateList {...args} />
  </ThemeProvider>
);

export const list = Template.bind({});
list.args = {
  items: [27, 28, 29, 30],
  title: "Your Batchmates Also Read",
};
