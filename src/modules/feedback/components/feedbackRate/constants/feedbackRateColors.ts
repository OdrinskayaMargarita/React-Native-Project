import { FeedbackRateValue } from 'src/modules/feedback/enums/feedbackRateValue.enum';

import { colors } from '@lib/tailwind';

export const FEEDBACK_RATE_COLORS = {
	[FeedbackRateValue.noWay]: {
		active: {
			fill: colors.pink,
			stroke: colors.pink,
		},
		default: {
			fill: colors.white,
			stroke: colors.pink,
		},
	},
	[FeedbackRateValue.soSo]: {
		active: {
			fill: colors.blue,
			stroke: colors.blue,
		},
		default: {
			fill: colors.white,
			stroke: colors.blue,
		},
	},
	[FeedbackRateValue.nice]: {
		active: {
			fill: colors.yellow,
			stroke: colors.yellow,
		},
		default: {
			fill: colors.white,
			stroke: colors.yellow,
		},
	},
	[FeedbackRateValue.loveIt]: {
		active: {
			fill: colors.green,
			stroke: colors.green,
		},
		default: {
			fill: colors.white,
			stroke: colors.green,
		},
	},
};
