import * as React from 'react';

import { Box, HStack, Heading, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from 'src/store/hooks/redux';

import { FeedbackRateType } from '../../enums/feedbackRateType.enum';
import { FeedbackRateValue } from '../../enums/feedbackRateValue.enum';
import { setRate } from '../../store/feedback.slice';
import { FeedbackRateStar } from '../feedbackRateStar/FeedbackRateStar.component';

import { FEEDBACK_RATE_COLORS } from './constants/feedbackRateColors';
import { FeedbackRateProps } from './models/feedbackRateProps.interface';

export const FeedbackRate = ({ item: { title, marks, type }, onChange }: FeedbackRateProps) => {
	const dispatch = useAppDispatch();
	const { data } = useAppSelector(({ feedbackSlice }) => feedbackSlice);

	const onPressHandler = (rateType: FeedbackRateType, rateValue: FeedbackRateValue) => {
		dispatch(setRate({ key: rateType, value: rateValue }));
		onChange(rateType, rateValue);
	};

	return (
		<Box>
			{/* Rating title */}
			<Heading>{title}</Heading>

			{/* List of stars */}
			<HStack>
				{marks.map(({ key, value }, index) => {
					const isActive = data[type] === key;
					const current = isActive ? FEEDBACK_RATE_COLORS[key].active : FEEDBACK_RATE_COLORS[key].default;

					return (
						<TouchableOpacity key={index} activeOpacity={0.7} onPress={() => onPressHandler(type, key)}>
							<FeedbackRateStar fill={current.fill} stroke={current.stroke} />
							<Text>{value}</Text>
						</TouchableOpacity>
					);
				})}
			</HStack>
		</Box>
	);
};
