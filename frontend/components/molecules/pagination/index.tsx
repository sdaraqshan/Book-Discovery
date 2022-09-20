import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import theme from '../../../themes/theme';
import Left from '../../../../public/assets/images/icons/page_left.png';
import Right from '../../../../public/assets/images/icons/page_right.png';
import styled from '@emotion/styled';
import { usePagination } from '@mui/lab';

const List = styled('ul')({
	listStyle: 'none',
	padding: 0,
	margin: '5%',
	align: 'right',
	borderRadius: '4px',
	display: 'flex',
	justifyContent: 'center',
});

const ButtonPagination = styled('button')({
	border: `1px solid ${theme.palette.primary.main500}`,
	height: '24px',
	minWidth: '24px !important',
	padding: '0',
	borderRadius: '4px',
	background: '#fff',
});

interface PaginationProps {
	postsPerPage: number;
	totalPosts: number;
	paginate: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
	const { postsPerPage, totalPosts, paginate } = props;

	const [pageNo, setPageNo] = React.useState<number>(1);

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	const { items } = usePagination({
		count: pageNumbers.length,
	});

	return (
		<Box
		data-testid='pagination'
			sx={{
				display: 'flex',
				flexDirection: 'row',
				float: 'right',
				justifyContent: 'center',
				alignItems: 'center',
				alignContent: 'center',
			}}
		>
			<Typography variant='subtitle1' width='180px' height='24px' data-testid='pagination-pagenumbers'>
				{pageNo + (pageNo - 1) * postsPerPage} to{' '}
				{postsPerPage + (pageNo - 1) * postsPerPage} of {totalPosts} results
			</Typography>

			<nav>
				<List>
					{items.map(({ page, type, selected, ...item }, number: number) => {
						let children = null;

						if (type === 'start-ellipsis' || type === 'end-ellipsis') {
							children = '…';
						} else if (type === 'page') {
							{
								selected && paginate(page ? page : 1);
							}

							children = (
								<ButtonPagination
									{...item}
									style={{ background: selected ? '#FF725E' : '#fff' }}
								>
									<Typography
										variant='caption1'
										sx={{
											color: selected
												? theme.palette.textColor.light
												: theme.palette.textColor.highEmphasis,
										}}
									>
										{page}
									</Typography>
								</ButtonPagination>
							);
						} else {
							children = (
								<ButtonPagination {...item}>
									<Typography
										variant='caption1'
										color={theme.palette.textColor.highEmphasis}
									>
										{type === 'previous' ? (
											<img
												src={Left}
												alt='left'
												style={{
													width: '20px',
													height: '20px',
													marginTop: '1.5px',
												}}
											/>
										) : (
											<img
												src={Right}
												alt='Right'
												style={{
													width: '20px',
													height: '20px',
													marginTop: '1.5px',
												}}
											/>
										)}
									</Typography>
								</ButtonPagination>
							);
						}

						return (
							<li
								key={number}
								onClick={() => {
									paginate(number);
									setPageNo(number);
								}}
							>
								{children}
							</li>
						);
					})}
				</List>
			</nav>
		</Box>
	);
};

export default Pagination;
