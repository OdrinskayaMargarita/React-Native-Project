import { IUserGeneral, IUserFull, IUserAppearance, IUserContacts, IUserBodyArts } from '@/types/profileTypes';
import { IUserSettings } from '@/types/settingsTypes';

export interface IStore {
	auth: { token: string | null; userId: string | null };
	common: ICommonState;
	profile: IProfileState;
	settings: ISettingState;
	notes: INotesState;
	network: INetworkState;
}

export interface ICommonState {
	deviceId: string | null;
	loader: {
		isActive: boolean;
	};
}

export interface INotesState {
	notes: any;
	checklist: any;
}

export interface INetworkState {
	connectionsAll: any;
	connectionsContacts: any;
	connectionsFutureOutgoing: any;
	connectionsOutgoing: any;
	connectionsIncoming: any;
	connectionsIncomingNotCanceled: any;
	connectionsIncomingCanceled: any;
	connectionsFutureRequests: any;
	connectionsFriends: any;
}

export interface ISettingState {
	userSettingGeneral: IUserSettings;
}

export interface IProfileState {
	userData: IUserFull | null;
	userContacts: IUserContacts | null;
	userGeneral: IUserGeneral;
	userAppearance: IUserAppearance;
	userBodyArt: IUserBodyArts[] | null;
}
