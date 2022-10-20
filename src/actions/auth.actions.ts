import { ApiResult } from '@/api/types';
import { IUsersLoginRo } from '@/api/users-api.service';
import { LoginPayload } from '@/modules/auth/components/LoginForm.models';
import { IStore } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../api';
import { secureStorage } from '../services/secure-storage';

export const loginUserAction = createAsyncThunk<ApiResult<IUsersLoginRo>, { data: LoginPayload }>(
	'/login',
	async ({ data }) => {
		return api.usersApi.authLogin(data);
	},
);

export const putVerify = createAsyncThunk<any, { data: { login: string; device_token: string } }, { state: IStore }>(
	'/profile/password',
	async ({ data }, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		const result = await api.usersApi.authorize(sessionId).putVerify(data);
		return result;
	},
);

export const getLogOut = createAsyncThunk<any, void, { state: IStore }>('/logout', async (_, { getState }) => {
	const sessionId = getState().auth.token;
	if (!sessionId) throw 'Has no session ID';

	await secureStorage.removeUserToken();
	const logoutRes = await api.usersApi.authorize(sessionId).getLogOut();
	return logoutRes;
});
