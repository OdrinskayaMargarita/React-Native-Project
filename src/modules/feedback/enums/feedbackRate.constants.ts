import { FeedbackRateValue } from 'src/modules/feedback/enums/feedbackRateValue.enum';
import { FeedbackRateType } from 'src/modules/feedback/enums/feedbackRateType.enum';
import { FeedbackRateData, FeedbackRateMarkData } from '../models/feedbackRateData.model';

const marks: FeedbackRateMarkData[] = [
	{ key: FeedbackRateValue.noWay, value: 'no way!' },
	{ key: FeedbackRateValue.soSo, value: 'so-so.' },
	{ key: FeedbackRateValue.nice, value: 'nice.' },
	{ key: FeedbackRateValue.loveIt, value: 'love it!' },
];

export const feedbackRateData: FeedbackRateData[] = [
	{
		title: 'Idea',
		type: FeedbackRateType.idea,
		marks,
	},
	{
		title: 'Design',
		type: FeedbackRateType.design,
		marks,
	},
	{
		title: 'Functionality',
		type: FeedbackRateType.functionality,
		marks,
	},
];
