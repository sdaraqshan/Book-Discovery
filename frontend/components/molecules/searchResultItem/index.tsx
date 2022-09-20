import { Stack, Typography } from '@mui/material';
import React from 'react';
import Image from '../../atoms/image/index';
import theme from '../../../themes/theme';
import { SearchResultItemProps } from '../../../types';

export default function SearchResultItem(props: SearchResultItemProps) {
	return (
		<Stack
			data-testid='search-result-item'
			direction='row'
			sx={{ background: `${theme.palette.structural.white}` }}
		>
			<Image
				src={props.image}
				alt={props.title}
				style={{
					width: '188px',
					height: '88px',
					borderRadius: '4px',
					paddingRight: '32px',
				}}
			/>
			<Stack
				sx={{
					paddingTop: '6px',
					paddingBottom: '6px',
				}}
			>
				<Typography
					variant='subtitle1'
          data-testid='search-result-item-title'
					sx={{
						height: '24px',
						color: `${theme.palette.textColor.highEmphasis}`,
					}}
				>
					{props.title}
				</Typography>
				<Typography
					variant='body1'
          data-testid='search-result-item-author'
					sx={{
						height: '22px',
						paddingTop: '4px',
						paddingBottom: '4px',
						color: `${theme.palette.textColor.lowEmphasis}`,
					}}
				>
					{props.author}
				</Typography>
				<Stack direction='row'>
					<Typography
						variant='body1'
						sx={{
							height: '22px',
							color: `${theme.palette.textColor.lowEmphasis}`,
						}}
					>
						Category -&nbsp;
					</Typography>
					<Typography
						variant='body1'
            data-testid='search-result-item-category'
						sx={{
							height: '22px',
							color: `${theme.palette.textColor.mediumEmphasis}`,
						}}
					>
						{props.category}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
}
