import { IApiTransport } from './types';

export class UsersApiService {
	constructor(private readonly transport: IApiTransport) {}

	authorize(token: string | null): this {
		this.transport.authorize(token);
		return this;
	}

	authLogin(dto: IUsersLoginDto) {
		return this.transport.post<IUsersLoginDto, IUsersLoginRo>(`/login`, dto);
	}

	putVerify(dto: any) {
		return this.transport.put(`/verify`, dto);
	}

	getLogOut() {
		return this.transport.get(`/logout`);
	}
}

export interface IUsersLoginRo {
	accessToken: string;
	refreshToken: string;
	nickname: string;
}

interface IUsersLoginDto {
	login: string;
	password: string;
}

export interface IUsersLoginRo {
	accessToken: string;
	refreshToken: string;
	nickname: string;
}
