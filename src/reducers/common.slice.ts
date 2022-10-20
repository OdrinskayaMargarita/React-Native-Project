import { IStore } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

import { dispatchWithLoader, IActionError } from '../actions/common.actions';

const initialState = {
	loader: {
		isActive: false,
	},
} as IStore['common'];

export const commonSlice = createSlice({
	extraReducers: builder => {
		builder.addCase(dispatchWithLoader.pending, (state: IStore['common']) => {
			state.loader = {
				isActive: true,
			};
		});
		builder.addCase(dispatchWithLoader.fulfilled, (state: IStore['common']) => {
			state.loader = initialState.loader;
		});
		builder.addCase(
			dispatchWithLoader.rejected,
			(state: IStore['common'], action: PayloadAction<IActionError | undefined>) => {
				state.loader = initialState.loader;
				Alert.alert(
					action.payload?.error.name ?? 'Oops',
					action.payload?.error.message ?? 'Something went wrong',
				);
				// state.error = {
				// 	description: action.payload?.error.message ?? 'Something went wrong',
				// 	isActive: true,
				// 	title: action.payload?.error.name ?? 'Oops',
				// };
			},
		);
	},
	initialState,
	name: 'common',
	reducers: {
		setDeviceId(state: IStore['common'], action: PayloadAction<string>) {
			state.deviceId = action.payload;
		},
		startLoader(state: IStore['common']) {
			state.loader = {
				isActive: true,
			};
		},
		stopLoader(state: IStore['common']) {
			state.loader = initialState.loader;
		},
	},
});

export const { startLoader, stopLoader } = commonSlice.actions;
export const { reducer: commonReducer } = commonSlice;
