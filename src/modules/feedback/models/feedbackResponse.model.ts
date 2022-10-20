import { FeedbackRateValue } from '../enums/feedbackRateValue.enum';

export interface FeedbackResponse {
	data: {
		created_at: string;
		design: FeedbackRateValue;
		email: string;
		functionality: FeedbackRateValue;
		id: number;
		idea: FeedbackRateValue;
		message: string;
		phone: string;
	};
	message: string;
}
