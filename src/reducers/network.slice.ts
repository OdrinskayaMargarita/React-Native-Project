import { IStore } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
	getConnectionsAll,
	getConnectionsContacts,
	getConnectionsFriends,
	getConnectionsFutureOutgoing,
	getConnectionsFutureRequests,
	getConnectionsIncoming,
	getConnectionsIncomingCanceled,
	getConnectionsIncomingNotCanceled,
	getConnectionsOutgoing,
} from '../actions/network.actions';

type Store = IStore['network'];

const initialState: Store = {
	connectionsAll: null,
	connectionsContacts: null,
	connectionsFriends: null,
	connectionsFutureOutgoing: null,
	connectionsFutureRequests: null,
	connectionsIncoming: null,
	connectionsIncomingCanceled: null,
	connectionsIncomingNotCanceled: null,
	connectionsOutgoing: null,
};

export const networkSlice = createSlice({
	extraReducers: builder => {
		builder.addCase(getConnectionsAll.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.connectionsAll = action.payload.data;
		});
		builder.addCase(getConnectionsFriends.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.connectionsFriends = action.payload.data;
		});
		builder.addCase(getConnectionsContacts.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.connectionsContacts = action.payload.data;
		});
		builder.addCase(getConnectionsFutureOutgoing.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.connectionsFutureOutgoing = action.payload.data;
		});
		builder.addCase(getConnectionsOutgoing.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.connectionsOutgoing = action.payload.data;
		});
		builder.addCase(getConnectionsIncoming.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.connectionsIncoming = action.payload.data;
		});
		builder.addCase(getConnectionsIncomingNotCanceled.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.connectionsIncomingNotCanceled = action.payload.data;
		});
		builder.addCase(getConnectionsIncomingCanceled.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.connectionsIncomingCanceled = action.payload.data;
		});
		builder.addCase(getConnectionsFutureRequests.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.connectionsFutureRequests = action.payload.data;
		});
	},
	initialState,
	name: 'network',
	reducers: {
		// profileFull(state: IStore['auth'], action: PayloadAction<IProfileState>) {
		// 	state.userData = action.payload;
		// },
	},
});

// export const { profileFull } = profileSlice.actions;
