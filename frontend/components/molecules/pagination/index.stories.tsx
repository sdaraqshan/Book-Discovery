import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pagination from "./index";
import React from "react";

export default {
  title: "Molecules/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = () => (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  <Pagination postsPerPage={10} totalPosts={20} paginate={(c: number) => {}} />
);

export const pagination = Template.bind({});
