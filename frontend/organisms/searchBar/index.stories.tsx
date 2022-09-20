import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from "./index";
import React from "react";

export default {
  title: "Organisms/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar />;

export const search = Template.bind({});
