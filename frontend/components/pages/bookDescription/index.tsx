import React, { useEffect, useRef } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import theme from '../../../themes/theme';
import Author from '../../molecules/author';
import AuthorList from '../../molecules/authorList';
import ReviewfollowingList from '../../molecules/reviewFollowingList/index';
import OtherReviewList from '../../molecules/otherReviewsList/index';
import BatchmateList from '../../molecules/batchmateList/index';
import RecommendationList from '../../molecules/recommendationsList';
import BookCard from '../../organisms/bookDescriptionCard/index';
import { useBookIdContext } from '../../../contexts/bookIdContext';
import { usePageNavigationContext } from '../../../contexts/pageNavigationContext';
import { useSearchContext } from '../../../contexts/searchContext';

export default function BookDescriptionPage() {
	const { book_id } = useBookIdContext();
	const { setPageNavigation } = usePageNavigationContext();
	const nav_state = useRef<boolean>(true);
	const { search_value } = useSearchContext();

	useEffect(() => {
		setPageNavigation(nav_state.current);
		nav_state.current = false;
	}, [search_value, setPageNavigation]);

	return (
		<div style={{ paddingBottom: '56px', alignItems: 'center', position: 'relative', margin: '0 0 0 100px' }} data-testid='book-description-page'>
			{/* page stack */}
			<Grid container direction={'row'} sx={{marginTop: '56px', display: 'flex', justifyContent: 'space-between'}}>
					{/* left stack */}
					<Grid item xs={9}>
						{/* card stack */}
						<BookCard book_id={book_id} />
						{/* description */}
						<Stack direction='column' marginTop='40px' gap='8px' width='164px'>
							<Typography
								variant='subtitle2'
								color={theme.palette.textColor.highEmphasis}
								fontWeight='700px'
								width='123px'
							>
								Book Description
							</Typography>
							<Typography
								variant='body1'
								width='767px'
								height='132px'
								color={theme.palette.textColor.lowEmphasis}
							>
								Through a series of recent breakthroughs, deep learning has
								boosted the entire field of machine learning. Now, even
								programmers who know close to nothing about this technology can
								use simple, efficient tools to implement programs capable of
								learning from data. This practical book shows you how. By using
								concrete examples, minimal theory, and two production-ready
								Python frameworks—Scikit-Learn and TensorFlow—author Aurélien
								Géron helps you gain an intuitive understanding of the concepts
								and tools for building intelligent systems. You’ll learn a range
								of techniques, starting with simple linear regression and
								progressing to deep neural networks.
							</Typography>
						</Stack>
						{/* author */}
						<Stack marginTop='40px'>
							<Author />
						</Stack>
						{/* books by jd lee */}
						<AuthorList items={[31, 32, 33]} title='Books by J D Lee' />
						{/* reviews of following */}
						<ReviewfollowingList />
						{/* other reviews */}
						<OtherReviewList />
						{/* recommendations */}
						<RecommendationList
							items={[15, 16, 17, 18]}
							margin='64px px 56px 0px'
							title='Recommendations'
						/>
					</Grid>
					{/* right stack */}
					<Grid item xs={3}>
						<BatchmateList
							items={[27, 28, 29, 30]}
							title='Your Batchmates Also Read'
						/>
					</Grid>
			</Grid>
		</div>
	);
}
