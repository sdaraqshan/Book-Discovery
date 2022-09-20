import { ComponentMeta, ComponentStory } from "@storybook/react";
import RecommendationCard from "./index";
import React from "react";

export default {
  title: "Organisms/RecommendationCard",
  component: RecommendationCard,
} as ComponentMeta<typeof RecommendationCard>;

const Template: ComponentStory<typeof RecommendationCard> = () => (
  <RecommendationCard book_id={21} />
);

export const recommendationCard = Template.bind({});
