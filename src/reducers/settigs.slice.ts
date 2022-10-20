import { IStore } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getProfileSettings } from '../actions/setting.actions';

type Store = IStore['settings'];

const initialState: Store = {
	userSettingGeneral: {
		email: '',
		is_active_subscription: false,
		phone: '',
		social: {
			apple: false,
			facebook: false,
			google: false,
		},
		subscription: {
			is_package_created: false,
			is_trial: false,
			package: '',
			package_canceled: '',
			package_end: '',
			package_id: 0,
			real_package_end: '',
		},
		timezone: '',
		timezone_name: '',
		unverified_login: {
			email: '',
			phone: '',
			two_factor_email: '',
			two_factor_phone: '',
		},
	},
};

export const settingSlice = createSlice({
	extraReducers: builder => {
		builder.addCase(getProfileSettings.fulfilled, (state: Store, action: PayloadAction<any>) => {
			state.userSettingGeneral = action.payload.data;
		});
	},
	initialState,
	name: 'settings',
	reducers: {
		// profileFull(state: IStore['auth'], action: PayloadAction<IProfileState>) {
		// 	state.userData = action.payload;
		// },
	},
});

// export const { profileFull } = profileSlice.actions;
