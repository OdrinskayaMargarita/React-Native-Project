import { IStore } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../api';

export const getUserNotes = createAsyncThunk<any, { userId: any }, { state: IStore }>(
	'/connections/users/notes',
	async ({ userId }, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';
		return await api.notesApi.authorize(sessionId.data.token).getUserNotes(userId);
	},
);

export const postNote = createAsyncThunk<
	any,
	{ data: { title: string; device_token: string }; userId: string },
	{ state: IStore }
>('/profile/password', async ({ data, userId }, { getState }) => {
	const sessionId = getState().auth.token;
	if (!sessionId) throw 'Has no session ID';

	const result = await api.notesApi.authorize(sessionId).postNote(data, userId);
	console.log(result);
	return result;
});
