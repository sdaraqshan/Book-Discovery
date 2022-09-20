import { ComponentMeta, ComponentStory } from '@storybook/react';
import Author from './index';
import React from 'react';

export default {
  title: "Molecules/Author",
  component: Author,
} as ComponentMeta<typeof Author>;

const Template: ComponentStory<typeof Author> = () => <Author />;

export const author = Template.bind({});
