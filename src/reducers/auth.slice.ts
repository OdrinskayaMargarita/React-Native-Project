import { IStore } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLogOut, loginUserAction } from '../actions/auth.actions';

const initialState = {
	token: null,
} as IStore['auth'];

export const authSlice = createSlice({
	extraReducers: builder => {
		builder.addCase(loginUserAction.fulfilled, (state: IStore['auth'], action: PayloadAction<any>) => {
			state.token = action.payload;
		});
		builder.addCase(getLogOut.fulfilled, (state: IStore['auth']) => {
			state.token = null;
		});
	},
	initialState,
	name: 'auth',
	reducers: {
		clearAuthData(state: IStore['auth']) {
			state.token = null;
		},
		removeToken(state: IStore['auth']) {
			state.token = null;
		},
		setToken(state: IStore['auth'], action: PayloadAction<string>) {
			state.token = action.payload;
		},
	},
});

export const { clearAuthData, setToken, removeToken } = authSlice.actions;
