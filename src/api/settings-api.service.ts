import { ITypeLoginData, ITypePassword } from '../types/settingsTypes';

import { IApiTransport } from './types';

export class SettingsApiService {
	constructor(private readonly transport: IApiTransport) {}

	authorize(token: string | null): this {
		this.transport.authorize(token);
		return this;
	}

	//SETTINGS
	getProfileSettings() {
		return this.transport.get(`/profile/settings`);
	}

	putUpdatePassword(dto: ITypePassword) {
		return this.transport.put<ITypePassword>(`/profile/password`, dto);
	}

	postCheckPassword(dto: { password: string }) {
		return this.transport.post<any>(`/profile/password`, dto);
	}

	putUpdateLoginData(dto: ITypeLoginData) {
		return this.transport.put<ITypeLoginData>(`/profile/login-data`, dto);
	}

	putProfileMailSubscription(dto: { is_active_subscription: boolean }) {
		return this.transport.put<{ is_active_subscription: boolean }>(`/profile/mail-subscription`, dto);
	}

	putTwoFactorAuth(dto: any) {
		return this.transport.put<any>(`/profile/two-factor-auth`, dto);
	}

	postVerificationMailResend(dto: any) {
		return this.transport.post<any>(`/verification/resend`, dto);
	}

	postMailCode(dto: any) {
		return this.transport.post<any>(`/verify`, dto);
	}

	delAccount(dto: any) {
		return this.transport.post<any>(`/profile`, dto);
	}
}
