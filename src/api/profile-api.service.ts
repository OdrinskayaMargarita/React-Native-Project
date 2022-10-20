import { IUserAppearance, IUserBodyArts, IUserContacts, IUserGeneral } from '@/types/profileTypes';

import { IApiTransport } from './types';

export class ProfileApiService {
	constructor(private readonly transport: IApiTransport) {}

	authorize(token: string | null | any): this {
		this.transport.authorize(token);
		return this;
	}

	//PROFILE
	getFullProfile() {
		return this.transport.get(`/profile/full`);
	}

	getGeneralInfoProfile() {
		return this.transport.get(`/profile/general-info`);
	}

	getAppearanceProfile() {
		return this.transport.get(`/appearance`);
	}

	getContactsProfile() {
		return this.transport.get(`/contacts`);
	}

	getBodyArtProfile() {
		return this.transport.get(`/body-arts`);
	}

	putUpdateGeneralInfo(dto: IUserGeneral) {
		return this.transport.put<IUserGeneral>(`/profile/general-info`, dto);
	}
	putUpdateAppearance(dto: IUserAppearance) {
		return this.transport.put<IUserAppearance>(`/appearance`, dto);
	}
	putUpdateContacts(dto: IUserContacts) {
		return this.transport.put<IUserContacts>(`/contacts`, dto);
	}
	putUpdateBodyArt(dto: IUserBodyArts) {
		return this.transport.put<IUserBodyArts>(`/body-arts/:body-art`, dto);
	}
	postCreateBodyArt(dto: IUserBodyArts) {
		return this.transport.post<IUserBodyArts>(`/body-arts`, dto);
	}
	delBodyArt() {
		return this.transport.del(`/body-arts`);
	}
}
