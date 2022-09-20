import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from '/public/assets/images/avatars/avatar_medium_4.png';

import Review from './index';

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderReview = async () => {
	return render(
		<Review
			image={Avatar}
			title='Radha'
			designation='Professor at Harvard  University'
			rating={4.5}
			comment='Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the '
		/>
	);
};

describe('Review', () => {
	test('Renders Review', async () => {
    await renderReview();
  });

	test('Checking for reviewer avatar', async () => {
		await renderReview();
		const reviewer_name = screen.getByAltText('Radha');
    await flushPromises();
		expect(reviewer_name).toHaveAttribute(
			'style',
			'width: 60px; height: 60px; border-radius: 100%; padding-right: 12px;'
		);
	});

	test('Checking review text properties', async () => {
		await renderReview();
		const reviewer_review = screen.getByText(
			'Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the'
		);
    await flushPromises();
		expect(reviewer_review).toBeInTheDocument();
	});

	test('Checking for review icons', async () => {
		await renderReview();
		const like = screen.getByAltText('Like');
    await flushPromises();
		expect(like).toHaveAttribute('style', 'width: 24px; height: 24px;');
		const dislike = screen.getByAltText('Dislike');
    await flushPromises();
		expect(dislike).toHaveAttribute('style', 'width: 24px; height: 24px;');
	});
});
