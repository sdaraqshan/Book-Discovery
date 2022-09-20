import { ComponentMeta, ComponentStory } from "@storybook/react";
import DiscoverBanner from "./index";
import React from "react";

export default {
  title: "Molecules/Banner",
  component: DiscoverBanner,
} as ComponentMeta<typeof DiscoverBanner>;

const Template: ComponentStory<typeof DiscoverBanner> = () => (
  <DiscoverBanner />
);

export const explorebanner = Template.bind({});
