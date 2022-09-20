import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLibrary from "./index";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Molecules/MyLibrary",
  component: MyLibrary,
} as ComponentMeta<typeof MyLibrary>;

const Template: ComponentStory<typeof MyLibrary> = () => (
  <BrowserRouter>
    <MyLibrary />
  </BrowserRouter>
);

export const explorebanner = Template.bind({});
