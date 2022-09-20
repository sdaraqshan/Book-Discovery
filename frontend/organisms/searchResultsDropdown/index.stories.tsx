import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchResultsDropdown from "./index";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Organisms/SearchResultsDropdown",
  component: SearchResultsDropdown,
} as ComponentMeta<typeof SearchResultsDropdown>;

const Template: ComponentStory<typeof SearchResultsDropdown> = () => (
  <BrowserRouter>
    <SearchResultsDropdown />
  </BrowserRouter>
);

export const searchResultsDropdown = Template.bind({});
