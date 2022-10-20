import { AppDispatch } from '@/store/configureStore';
import { IStore } from '@/types';
import { IUserAppearance, IUserBodyArts, IUserContacts, IUserGeneral } from '@/types/profileTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../api';

//PROFILE
export const getProfileData = createAsyncThunk<any, void, { state: IStore }>(
	'/profile/full',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.profileApi.authorize(sessionId.data.token).getFullProfile();
	},
);

export const getGeneralInfoProfile = createAsyncThunk<any, void, { state: IStore }>(
	'/profile/general-info',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;

		if (!sessionId) throw 'Has no session ID';

		return await api.profileApi.authorize(sessionId).getGeneralInfoProfile();
	},
);

export const getAppearanceProfile = createAsyncThunk<any, void, { state: IStore }>(
	'/appearance',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.profileApi.authorize(sessionId).getAppearanceProfile();
	},
);

export const getContactsProfile = createAsyncThunk<any, void, { state: IStore }>(
	'/contacts',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.profileApi.authorize(sessionId).getContactsProfile();
	},
);

export const getBodyArtProfile = createAsyncThunk<any, void, { state: IStore }>(
	'/body-arts',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.profileApi.authorize(sessionId).getBodyArtProfile();
	},
);

export const putUpdateGeneralInfo = createAsyncThunk<any, { data: IUserGeneral }, { state: IStore }>(
	'/profile/general-info',
	async ({ data }, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.profileApi.authorize(sessionId).putUpdateGeneralInfo(data);
	},
);

export const putUpdateAppearance = createAsyncThunk<
	any,
	{ data: IUserAppearance; callback: () => void },
	{ state: IStore; dispatch: AppDispatch }
>('/appearance', async ({ data, callback }, { getState, dispatch }) => {
	const sessionId = getState().auth.token;
	if (!sessionId) throw 'Has no session ID';

	const result = await api.profileApi.authorize(sessionId).putUpdateAppearance(data);
	if (result.success) {
		dispatch(getProfileData());
		callback();
	}
	return result;
});

export const putUpdateContacts = createAsyncThunk<
	any,
	{ data: IUserContacts; callback: () => void },
	{ state: IStore; dispatch: AppDispatch }
>('/contacts', async ({ data, callback }, { getState, dispatch }) => {
	const sessionId = getState().auth.token;
	if (!sessionId) throw 'Has no session ID';

	const result = await api.profileApi.authorize(sessionId).putUpdateContacts(data);
	if (result.success) {
		dispatch(getProfileData());
		callback();
	}
	return result;
});

export const putUpdateBodyArt = createAsyncThunk<
	any,
	{ data: IUserBodyArts; callback: () => void },
	{ state: IStore; dispatch: AppDispatch }
>('/body-arts/:body-art', async ({ data, callback }, { getState, dispatch }) => {
	const sessionId = getState().auth.token;
	if (!sessionId) throw 'Has no session ID';

	const result = await api.profileApi.authorize(sessionId).putUpdateBodyArt(data);
	if (result.success) {
		dispatch(getProfileData());
		callback();
	}
	return result;
});

export const postCreateBodyArt = createAsyncThunk<
	any,
	{ data: IUserBodyArts },
	{ state: IStore; dispatch: AppDispatch }
>('/body-arts', async ({ data }, { getState }) => {
	const sessionId = getState().auth.token;
	if (!sessionId) throw 'Has no session ID';

	return await api.profileApi.authorize(sessionId).postCreateBodyArt(data);
});

export const deleteBodyArt = createAsyncThunk<any, void, { state: IStore; dispatch: AppDispatch }>(
	'/body-arts',
	async (_, { getState, dispatch }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		const result = await api.profileApi.authorize(sessionId).delBodyArt();
		if (result.success) {
			dispatch(getProfileData());
		}
		return result;
	},
);
