import { render, screen } from '@testing-library/react';
import TopicList from './index';
import React from 'react';

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderTopicList = async () => {
  return render(
    <TopicList
      items={[34, 35, 36, 37, 38, 39]}
      margin='78px 0px 0px 0px'
      title='Topics You Follow'
    />
  );
}

describe('Display Topics list', () => {
	test('Should display', async () => {
		await renderTopicList();
		const Element = screen.getByText(/Topics You Follow/);
    await flushPromises();
		expect(Element).toBeInTheDocument();
	});
});
