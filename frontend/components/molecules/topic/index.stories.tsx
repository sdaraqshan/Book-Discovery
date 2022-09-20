import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Topic from "./index";

export default {
  title: "Molecules/Topic",
  component: Topic,
} as ComponentMeta<typeof Topic>;

const Template: ComponentStory<typeof Topic> = (args) => <Topic {...args} />;

export const TopicCard = Template.bind({});
TopicCard.args = {
  topic_id: 9,
};
