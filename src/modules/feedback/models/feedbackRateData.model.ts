import { FeedbackRateType } from 'src/modules/feedback/enums/feedbackRateType.enum';
import { FeedbackRateValue } from 'src/modules/feedback/enums/feedbackRateValue.enum';

export interface FeedbackRateData {
	title: string;
	type: FeedbackRateType;
	marks: FeedbackRateMarkData[];
}

export interface FeedbackRateMarkData {
	key: FeedbackRateValue;
	value: string;
}
