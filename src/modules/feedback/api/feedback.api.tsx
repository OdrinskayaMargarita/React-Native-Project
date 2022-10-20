import axios from 'axios';
import { FeedbackPayload } from '../models/feedbackPayload.model';
import { FeedbackResponse } from '../models/feedbackResponse.model';

export const feedbackAPI = {
	login: (data: FeedbackPayload): Promise<FeedbackResponse> => {
		return axios.post('/feedback', data);
	},
};
