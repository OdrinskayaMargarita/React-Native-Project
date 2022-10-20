import { ApiResult } from '@/api/types';
import { AppDispatch } from '@/store/configureStore';
import { IStore } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../api';
import { ITypeLoginData, ITypePassword } from '../types/settingsTypes';

//SETTINGS
export const getProfileSettings = createAsyncThunk<any, void, { state: IStore }>(
	'/profile/settings',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.settingsApi.authorize(sessionId.data.token).getProfileSettings();
	},
);

export const putUpdatePassword = createAsyncThunk<any, { data: ITypePassword }, { state: IStore }>(
	'/profile/password',
	async ({ data }, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.settingsApi.authorize(sessionId).putUpdatePassword(data);
	},
);

export const postCheckPassword = createAsyncThunk<any, { data: any }, { state: IStore }>(
	'/profile/password',
	async ({ data }, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.settingsApi.authorize(sessionId).postCheckPassword(data);
	},
);

export const putUpdateLoginData = createAsyncThunk<any, { data: ITypeLoginData }, { state: IStore }>(
	'/profile/login-data',
	async ({ data }, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.settingsApi.authorize(sessionId).putUpdateLoginData(data);
	},
);

export const putSettingsMailSubscription = createAsyncThunk<any, any, { state: IStore }>(
	'/profile/mail-subscription',
	async (data, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.settingsApi.authorize(sessionId).putProfileMailSubscription(data);
	},
);

export const putTwoFactorAuth = createAsyncThunk<any, any, { state: IStore; dispatch: AppDispatch }>(
	'/profile/two-factor-auth',
	async (data, { getState, dispatch }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		const result = await api.settingsApi.authorize(sessionId).putTwoFactorAuth(data);
		if (result.success) {
			await dispatch(getProfileSettings);
		}
		return result;
	},
);

export const postVerificationMailResend = createAsyncThunk<any, { login: string }, { state: IStore }>(
	'/verification/resend',
	async (data, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.settingsApi.authorize(sessionId).postVerificationMailResend(data);
	},
);

export const postMailCode = createAsyncThunk<
	ApiResult<any>,
	{ device_token: string; login: string; token: string },
	{ state: IStore }
>('/verify', async (data, { getState }) => {
	const sessionId = getState().auth.token;
	if (!sessionId) throw 'Has no session ID';

	return await api.settingsApi.authorize(sessionId).postMailCode(data);
});

export const delAccount = createAsyncThunk<
	ApiResult<any>,
	{ device_token: string; login: string; password: string },
	{ state: IStore }
>('/profile', async (data, { getState }) => {
	const sessionId = getState().auth.token;
	if (!sessionId) throw 'Has no session ID';

	return await api.settingsApi.authorize(sessionId).delAccount(data);
});
