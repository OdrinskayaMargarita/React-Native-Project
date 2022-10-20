import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeedbackState } from 'src/modules/profile/models/feedbackState.model';
import { sendFeedback } from 'src/modules/feedback/store/feedback.thunk';
import { FeedbackRateType } from 'src/modules/feedback/enums/feedbackRateType.enum';
import { FeedbackRateValue } from 'src/modules/feedback/enums/feedbackRateValue.enum';

const initialState: FeedbackState = {
	data: {
		design: null,
		functionality: null,
		idea: null,
	},
	isLoading: false,
};

export const feedbackSlice = createSlice({
	name: 'feedback',
	initialState: initialState,
	reducers: {
		setRate: (state, { payload }: PayloadAction<{ key: FeedbackRateType; value: FeedbackRateValue }>) => {
			state.data[payload.key] = payload.value;
		},
		setMessage: (state, { payload }: PayloadAction<string>) => {
			state.data.message = payload;
		},
		clearState: state => {
			state.data = {
				design: null,
				functionality: null,
				idea: null,
				message: undefined,
			};
		},
		setLoading: (state, { payload }) => {
			state.isLoading = payload;
		},
	},
	extraReducers: ({ addCase }) => {
		addCase(sendFeedback.fulfilled, state => {
			state.data = {
				design: null,
				functionality: null,
				idea: null,
				message: undefined,
			};
		});
		addCase(sendFeedback.rejected, (state, { payload }) => {
			state.error = payload?.errors;
		});
	},
});

export const { setRate, setMessage, clearState, setLoading } = feedbackSlice.actions;
export default feedbackSlice.reducer;
