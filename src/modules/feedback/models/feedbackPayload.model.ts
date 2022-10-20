import { FeedbackRateValue } from 'src/modules/feedback/enums/feedbackRateValue.enum';
import { Nullable } from 'src/shared/interfaces/nullable.type';

export interface FeedbackPayload {
	design: Nullable<FeedbackRateValue>;
	functionality: Nullable<FeedbackRateValue>;
	idea: Nullable<FeedbackRateValue>;
	message?: string | undefined;
}
