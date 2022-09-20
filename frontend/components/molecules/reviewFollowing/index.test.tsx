import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '/public/assets/images/avatars/avatar_medium_1.png';

import ReviewFollowing from './index';

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderReviewFollowing = async () => {
	return render(
		<ReviewFollowing
			image={Image}
			title='Anvitha Sharma'
			designation='Student'
			rating={4.5}
			comment="JD Lee was the 2016 recipient of the American Chemical Society's Grady Stack "
		/>
	);
};

describe('Review', () => {
	test('Renders Review Following', async () => {
    await renderReviewFollowing();
  });

	test('Checking for reviewer avatar', async () => {
		await renderReviewFollowing();
		const reviewer_name = screen.getByAltText('Anvitha Sharma');
    await flushPromises();
		expect(reviewer_name).toHaveAttribute(
			'style',
			'height: 60px; width: 60px; border-radius: 100%; margin-right: 24px;'
		);
	});

	test('Checking review text properties', async () => {
		await renderReviewFollowing();
		const reviewer_name = screen.getByText('Anvitha Sharma');
    await flushPromises();
		expect(reviewer_name).toHaveStyle('height: 24px;');
		const reviewer_designation = screen.getByText('Student');
    await flushPromises();
		expect(reviewer_designation).toHaveStyle('height: 16px;');
		const reviewer_rating = screen.getByText(4.5);
    await flushPromises();
		expect(reviewer_rating).toHaveStyle('width: 17px; height: 16px;');
	});
});
