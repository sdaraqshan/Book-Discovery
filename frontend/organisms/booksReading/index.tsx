import Image from '../../atoms/image/index';
import { Stack, Typography } from '@mui/material';
import theme from '../../../themes/theme';
import {
	BooksReadingProps,
	BookDescriptionProps,
	UserBookProps,
} from '../../../types';
import Constants from '../../../data/constants';
import React, { useEffect, useState } from 'react';
import API from '../../../api/library';

export default function BooksReading(props: BooksReadingProps) {
	const [user_book_details, setUserBookDetails] = useState<UserBookProps>(
		Constants.user_book_details
	);
	const [book_details, setBookDetails] = useState<BookDescriptionProps>(
		Constants.book_details
	);

	useEffect(() => {
		const retrieveBookDetails = async () => {
			try {
				let response = await API.get(`users/1/books/${props.book_id}`);
				setUserBookDetails(response.data);
				response = await API.get(`books/${props.book_id}`);
				setBookDetails(response.data);
			} catch {}
		};
		retrieveBookDetails();
	}, [props.book_id]);

	return (
		<Stack
			data-testid='books-reading'
			direction='row'
			spacing={0}
			sx={{
				background: `${theme.palette.structural.main}`,
				width: '273px',
				height: '140px',
				borderRadius: '8px',
				padding: '11px',
				boxSizing: 'border-box',
				boxShadow: '0px 0px 16px rgba(125, 125, 125, 0.12)',
			}}
		>
			<Image
				src={book_details.image}
				alt={props.book_id.toString()}
				style={{
					height: '118px',
					width: '91px',
					borderRadius: '4px',
					marginRight: '16px',
				}}
			/>
			<Stack spacing={0}>
				<Typography
					variant='body1'
          data-testid='books-reading-title'
					sx={{
						height: '22px',
						marginBottom: '2px',
						color: `${theme.palette.textColor.highEmphasis}`,
					}}
				>
					{book_details.title}
				</Typography>
				<Typography
					variant='caption1'
          data-testid='books-reading-author-name'
					sx={{
						height: '16px',
						margin: '2px 0px',
						color: `${theme.palette.textColor.lowEmphasis}`,
					}}
				>
					By {book_details.authorDTO.name}
				</Typography>
				<Stack
					direction='row'
					spacing={0}
					sx={{ height: '16px', marginTop: '2px' }}
				>
					<Typography
						variant='caption1'
						sx={{
							color: `${theme.palette.textColor.lowEmphasis}`,
						}}
					>
						Category -
					</Typography>
					<Typography
						variant='caption1'
            data-testid='books-reading-category-name'
						sx={{
							color: `${theme.palette.textColor.mediumEmphasis}`,
						}}
					>
						{book_details.categoryDTO.name}
					</Typography>
				</Stack>
				<Typography
					variant='caption1'
          data-testid='books-reading-pagesLeft'
					sx={{
						height: '16px',
						color: `${theme.palette.textColor.lowEmphasis}`,
						marginTop: '40px',
					}}
				>
					{user_book_details.pagesLeft}/{book_details.pages} pages left
				</Typography>
			</Stack>
		</Stack>
	);
}
