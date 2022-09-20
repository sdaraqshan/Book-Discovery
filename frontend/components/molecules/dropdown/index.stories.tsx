import { ComponentMeta, ComponentStory } from '@storybook/react';
import DropDown from './index';
import React from 'react';

export default {
  title: "Molecules/DropDown",
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = () => (
  <DropDown />
);

export const CategoryDropdown = Template.bind({});
