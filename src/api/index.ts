import { NetworkApiService } from '../api/network-api.service';
import { NotesApiService } from '../api/notes-api.service';
import { ProfileApiService } from '../api/profile-api.service';
import { SettingsApiService } from '../api/settings-api.service';

import { BaseApiClient } from './base-api-client';
import { apiConfig } from './config';
import { UsersApiService } from './users-api.service';

const usersApiFactory = () => {
	const transport = new BaseApiClient(apiConfig);
	return new UsersApiService(transport);
};

const profileApiFactory = () => {
	const transport = new BaseApiClient(apiConfig);
	return new ProfileApiService(transport);
};

const settingsApiFactory = () => {
	const transport = new BaseApiClient(apiConfig);
	return new SettingsApiService(transport);
};

const notesApiFactory = () => {
	const transport = new BaseApiClient(apiConfig);
	return new NotesApiService(transport);
};

const networkApiFactory = () => {
	const transport = new BaseApiClient(apiConfig);
	return new NetworkApiService(transport);
};

export class ApiModel {
	usersApi = usersApiFactory();
	profileApi = profileApiFactory();
	settingsApi = settingsApiFactory();
	notesApi = notesApiFactory();
	networkApi = networkApiFactory();
}

export const api = new ApiModel();
