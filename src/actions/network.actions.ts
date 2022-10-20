import { IStore } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../api';

export const getConnectionsAll = createAsyncThunk<any, void, { state: IStore }>(
	'/connections/all',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.networkApi.authorize(sessionId).getConnectionsAll();
	},
);

export const getConnectionsFriends = createAsyncThunk<any, void, { state: IStore }>(
	'/connections/friends',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.networkApi.authorize(sessionId).getConnectionsFriends();
	},
);

export const getConnectionsContacts = createAsyncThunk<any, void, { state: IStore }>(
	'/connections/contacts',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.networkApi.authorize(sessionId).getConnectionsContacts();
	},
);

export const getConnectionsFutureOutgoing = createAsyncThunk<any, void, { state: IStore }>(
	'/connections/future_outgoing',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.networkApi.authorize(sessionId).getConnectionsFutureOutgoing();
	},
);

export const getConnectionsOutgoing = createAsyncThunk<any, void, { state: IStore }>(
	'/connections/outgoing',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.networkApi.authorize(sessionId).getConnectionsOutgoing();
	},
);

export const getConnectionsIncoming = createAsyncThunk<any, void, { state: IStore }>(
	'/connections/incoming',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.networkApi.authorize(sessionId).getConnectionsIncoming();
	},
);

export const getConnectionsIncomingNotCanceled = createAsyncThunk<any, void, { state: IStore }>(
	'/connections/incoming-not-canceled',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.networkApi.authorize(sessionId).getConnectionsIncomingNotCanceled();
	},
);

export const getConnectionsIncomingCanceled = createAsyncThunk<any, void, { state: IStore }>(
	'/connections/incoming-canceled',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.networkApi.authorize(sessionId).getConnectionsIncomingCanceled();
	},
);

export const getConnectionsFutureRequests = createAsyncThunk<any, void, { state: IStore }>(
	'/connections/future-requests',
	async (_, { getState }) => {
		const sessionId = getState().auth.token;
		if (!sessionId) throw 'Has no session ID';

		return await api.networkApi.authorize(sessionId).getConnectionsFutureRequests();
	},
);
