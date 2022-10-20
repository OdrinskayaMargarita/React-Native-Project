import { FeedbackRateType } from 'src/modules/feedback/enums/feedbackRateType.enum';
import { FeedbackRateValue } from 'src/modules/feedback/enums/feedbackRateValue.enum';
import { FeedbackRateData } from 'src/modules/feedback/models/feedbackRateData.model';

export interface FeedbackRateProps {
	item: FeedbackRateData;
	onChange: (type: FeedbackRateType, value: FeedbackRateValue) => void;
}
