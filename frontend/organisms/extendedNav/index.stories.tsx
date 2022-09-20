import { ComponentMeta, ComponentStory } from "@storybook/react";
import ExtendedNav from "./index";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Organisms/ExtendNav",
  component: ExtendedNav,
} as ComponentMeta<typeof ExtendedNav>;

const Template: ComponentStory<typeof ExtendedNav> = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ExtendedNav />
    </BrowserRouter>
  </ThemeProvider>
);

export const extendNav = Template.bind({});
