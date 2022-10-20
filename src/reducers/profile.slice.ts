import { IStore } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
	getAppearanceProfile,
	getGeneralInfoProfile,
	getProfileData,
	getContactsProfile,
	getBodyArtProfile,
} from '../actions/profile.actions';

type Store = IStore['profile'];

const initialState: Store = {
	userAppearance: {
		body: {
			bust: null,
			bust_cup: null,
			height: null,
			hips: null,
			shoe_size: null,
			type: null,
			waist: null,
			weight: null,
		},
		eye: {
			color: null,
			wear: null,
		},
		hair: {
			color: null,
			length: null,
			type: null,
		},
	},
	userBodyArt: null,
	userContacts: null,
	userData: null,
	userGeneral: {
		birth_day: null,
		first_name: null,
		gender: null,
		last_name: null,
		middle_name: null,
		relationship_status: null,
	},
};

export const profileSlice = createSlice({
	extraReducers: builder => {
		builder.addCase(getProfileData.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.userData = action.payload.data;
		});
		builder.addCase(getGeneralInfoProfile.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.userGeneral = action.payload.data;
		});
		builder.addCase(getAppearanceProfile.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.userAppearance = action.payload.data;
		});
		builder.addCase(getBodyArtProfile.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.userBodyArt = action.payload.data;
		});
		builder.addCase(getContactsProfile.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.userContacts = action.payload.data;
		});
	},
	initialState,
	name: 'profile',
	reducers: {
		// profileFull(state: IStore['auth'], action: PayloadAction<IProfileState>) {
		// 	state.userData = action.payload;
		// },
	},
});

// export const { profileFull } = profileSlice.actions;
