import React, { useEffect, useRef, useState } from 'react';
import MyLibrary from '../../molecules/myLibrary';
import { UserBookProps } from '../../../types';
import RecommendationList from '../../molecules/recommendationsList';
import { usePageNavigationContext } from '../../../contexts/pageNavigationContext';
import { useSearchContext } from '../../../contexts/searchContext';
import { useTrackerContext } from '../../../contexts/trackerContext';
import API from '../../../api/library';
import { Box, Grid } from '@mui/material';

const LandingPage = () => {
	const [book_details, setBookDetails] = useState<UserBookProps[]>([]);
	const [fetch, setFetch] = useState<number>(0);
	const markedBooks: number[] = [];
	const currentlyReadingBooks: number[] = [];
	const { setPageNavigation } = usePageNavigationContext();
	const nav_state = useRef<boolean>(true);
	const { search_value } = useSearchContext();
	const { tracker } = useTrackerContext();

	useEffect(() => {
		const retrieveBookDetails = async () => {
			try {
				const response = await API.get('users/bookState');
				return response.data;
			} catch {}
		};

		async function getBookDetails() {
			const fetchedBook = await retrieveBookDetails();
			setBookDetails(fetchedBook);
		}
		setPageNavigation(nav_state.current);
		nav_state.current = false;
		getBookDetails();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search_value, fetch, tracker]);

	if (book_details.length !== 0) {
		book_details.forEach((book) => {
			if (book.status.bookmarked) {
				markedBooks.push(book.bookId);
			} else if (book.status.reading) {
				currentlyReadingBooks.push(book.bookId);
			}
		});
	}

	return (
		<Box minHeight='100vh' data-testid='landing-page'>
			{markedBooks.length !== 0 ? (
				<Grid
					container
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<Grid item>
						<RecommendationList
							items={markedBooks}
							margin=' 0px 0px 0px 0px'
							title='Bookmarked books'
							fetch={setFetch}
						/>
					</Grid>
					<Grid item>
						<RecommendationList
							items={currentlyReadingBooks}
							margin='0px 0px 0px 0px'
							title='Books You are Reading'
							fetch={setFetch}
						/>
					</Grid>
				</Grid>
			) : (
				<Box style={{ marginLeft: '100px' }}>
					<MyLibrary />
				</Box>
			)}
		</Box>
	);
};

export default LandingPage;
