import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SearchResultsCard from "./index";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../../themes/theme";

export default {
  title: "Organisms/SearchResultsCard",
  component: SearchResultsCard,
} as ComponentMeta<typeof SearchResultsCard>;

const Template: ComponentStory<typeof SearchResultsCard> = (args) => (
  <ThemeProvider theme={theme}>
    <SearchResultsCard {...args} />
  </ThemeProvider>
);

export const card1 = Template.bind({});
card1.args = {
  book_id: 1,
};
