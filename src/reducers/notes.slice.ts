import { IStore } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUserNotes } from '../actions/notes.actions';

type Store = IStore['notes'];

const initialState: Store = {
	checklist: null,
	notes: null,
};

export const notesSlice = createSlice({
	extraReducers: builder => {
		builder.addCase(getUserNotes.fulfilled, (state: IStore['notes'], action: PayloadAction<string>) => {
			state.notes = action.payload;
		});
	},
	initialState,
	name: 'notes',
	reducers: {
		// clearAuthData(state: IStore['auth']) {
		// 	state.token = null;
		// },
		// removeToken(state: IStore['auth']) {
		// 	state.token = null;
		// },
		// setToken(state: IStore['auth'], action: PayloadAction<string>) {
		// 	state.token = action.payload;
		// },
	},
});

// export const { clearAuthData, setToken, removeToken } = authSlice.actions;
