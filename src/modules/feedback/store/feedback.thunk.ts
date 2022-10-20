import { createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorType } from 'src/shared/interfaces/error.interface';
import { feedbackAPI } from 'src/modules/feedback/api/feedback.api';
import { FeedbackPayload } from 'src/modules/feedback/models/feedbackPayload.model';
import { FeedbackResponse } from 'src/modules/feedback/models/feedbackResponse.model';
import { setLoading } from './feedback.slice';

export const sendFeedback = createAsyncThunk<FeedbackResponse, FeedbackPayload, { rejectValue: ErrorType }>(
	'send',
	async (data, { dispatch, rejectWithValue }) => {
		try {
			dispatch(setLoading(true));

			return await feedbackAPI.login(data);
		} catch (e) {
			return rejectWithValue(e as ErrorType);
		} finally {
			dispatch(setLoading(false));
		}
	},
);
