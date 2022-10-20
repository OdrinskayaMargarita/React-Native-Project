import { RelationshipStatus } from '../modules/profile/data/SelectGeneralDataEnums.enums';

export interface IUserGeneral {
	first_name: string | null;
	last_name: string | null;
	middle_name: string | null;
	gender: string | null;
	birth_day: string | null;
	relationship_status: string | null;
}

export interface IUserContacts {
	is_same_hometown: boolean;
	phones: IUserPhone[];
	emails: IUserEmail[];
	hometown_address: {
		map: {
			lat: null;
			lng: null;
		};
		physical_address: null;
	};
	current_address: {
		map: {
			lat: null;
			lng: null;
		};
		physical_address: null;
	};
}

export interface IUserAvatar {
	id: number;
	filename: string;
	original_filename: string;
	additional_info: {
		sizes: string[];
		size_urls: {
			avatar_icon: string;
			avatar_profile: string;
		};
		in_progress: boolean;
	};
	created_at: string;
	url: string;
}

export interface IUserAvatarBackground {
	id: number;
	filename: string;
	original_filename: string;
	additional_info: {
		sizes: string[];
		size_urls: {
			background_lg: string;
			background_md: string;
			background_sm: string;
			background_sx: string;
		};
		in_progress: true;
	};
	created_at: string;
	url: string;
}

interface IUserGalleryItem {
	id: number;
	filename: string;
	original_filename: string;
	additional_info: {
		sizes: string[];
		size_urls: {
			big_icon: string;
			gallery: string;
		};
		in_progress: boolean;
	};
	created_at: string;
	url: string;
}

interface IUserDocumentItem {
	id: number;
	filename: string;
	original_filename: string;
	additional_info: {
		sizes: string[];
		size_urls: {
			big_icon: string;
			gallery: string;
		};
		in_progress: boolean;
	};
	created_at: string;
	url: string;
}

export interface IUserEmail {
	type: string;
	value: string;
}

export interface IUserBodyArts {
	artist: string;
	documents: [];
	email: string;
	phone: string;
	photos: [];
	price: string;
	salon: string;
	title: string;
	type: string;
}

export interface IUserPhone {
	type: string;
	value: string;
	country: string;
}

export interface IUserAppearance {
	hair: {
		color: string | null;
		length: string | null;
		type: string | null;
	};
	eye: {
		color: string | null;
		wear: string | null;
	};
	body: {
		height: string | null;
		weight: string | null;
		type: string | null;
		bust_cup: string | null;
		bust: string | null;
		waist: string | null;
		hips: string | null;
		shoe_size: string | null;
	};
}

export interface IUserFull {
	id: number;
	gender: string | null;
	first_name: string;
	middle_name: string | null;
	last_name: string;
	full_name: string;
	email: string | null;
	phone: string | null;
	birth_day: string | null;
	relationship_status: RelationshipStatus | null;
	avatar: IUserAvatar | null;
	background: IUserAvatarBackground | null;
	gallery: IUserGalleryItem[] | [];
	documents: IUserDocumentItem[];
	contacts: {
		is_same_hometown: false;
		phones: IUserPhone[];
		emails: IUserEmail[];
		hometown_address: {
			map: {
				lat: null;
				lng: null;
			};
			physical_address: null;
		};
		current_address: {
			map: {
				lat: null;
				lng: null;
			};
			physical_address: null;
		};
	};
	appearance: IUserAppearance;
	bodyArts: IUserBodyArts[] | null;
}
