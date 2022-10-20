export interface IUserSettings {
	email: string;
	is_active_subscription: boolean;
	phone: string | null;
	social: {
		apple: boolean;
		facebook: boolean;
		google: boolean;
	};
	subscription: {
		is_package_created: boolean;
		is_trial: boolean;
		package: string;
		package_canceled: string;
		package_end: string;
		package_id: number;
		real_package_end: string;
	};
	timezone: string;
	timezone_name: string;
	unverified_login: {
		email: string | null;
		phone: string | null;
		two_factor_email: string | null;
		two_factor_phone: string | null;
	};
}

export type ITypeLoginData = {
	current_email: string | null;
	current_phone: string | null;
	email: string | null;
	phone: string | null;
	country: string | null;
};

export interface ITypePassword {
	current_password: string;
	password: string;
	password_confirmation: string;
}
