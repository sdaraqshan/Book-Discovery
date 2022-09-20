import { Typography } from '@mui/material';
import Image from '../../atoms/image/index';
import API from '../../../api/library';
import React, { useEffect, useState } from 'react';
import { HomeTopicType } from '../../../types';
import Constants from '../../../data/constants';
import theme from '../../../themes/theme';

type TopicProps = {
	topic_id: number;
};

export default function Topic(props: TopicProps) {
	const [topic, setTopic] = useState<HomeTopicType>(
		Constants.home_topic_details
	);

	useEffect(() => {
		const retrieveTopic = async () => {
			try {
				const response = await API.get('categories/topics/' + props.topic_id);
				return response.data;
			} catch {}
		};

		async function getTopic() {
			const fetchedTopic = await retrieveTopic();
			setTopic(fetchedTopic);
		}
		getTopic();
	}, [props.topic_id]);

	return (
		<div
			data-testid='topic'
			style={{
				height: '168px',
				width: '178px',
				margin: '0px',
				padding: '0px',
			}}
		>
			<Image
				src={topic.image}
				alt='Category'
				style={{ width: '178px', height: '134px', borderRadius: '8px' }}
			/>
			<Typography
				variant='body2'
        data-testid='topic-name'
				sx={{
					paddingTop: '12px',
					width: '178px',
					textTransform: 'uppercase',
					color: `${theme.palette.textColor.highEmphasis}`,
				}}
			>
				{topic.name}
			</Typography>
		</div>
	);
}
