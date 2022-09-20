import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Header from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </ThemeProvider>
);

export const header1 = Template.bind({});
