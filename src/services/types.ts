export interface IUserData {
	username: string;
	passcode: string;
}

export interface IPublicData {
	token: string;
}

export interface IPublicDataStorage {
	setUserToken: () => Promise<IPublicData>;
}
