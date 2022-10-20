export enum eyesColorStatus {
	BLUE = 'blue',
	BLACK = 'black',
	GRAY = 'gray',
	BROWN = 'brown',
	HAZEL = 'hazel',
	GREEN = 'green',
	CHANGES_FREQUENTLY = 'changes_frequently',
	OTHER = 'other',
}
export const eyesColorStatusLabel: Record<eyesColorStatus, string> = {
	[eyesColorStatus.BLUE]: 'Blue',
	[eyesColorStatus.BLACK]: 'Black',
	[eyesColorStatus.GRAY]: 'Gray',
	[eyesColorStatus.BROWN]: 'Brown',
	[eyesColorStatus.HAZEL]: 'Hazel',
	[eyesColorStatus.GREEN]: 'Green',
	[eyesColorStatus.CHANGES_FREQUENTLY]: 'Ghanges Frequently',
	[eyesColorStatus.OTHER]: 'Other',
};

export enum eyesWearStatus {
	CONTACT_LENSES_GLASSES = 'contact_lenses_&_glasses',
	CONTACT_LENSES = 'contact_lenses',
	GLASSES = 'glasses',
	OTHER = 'other',
}
export const eyesWearStatusLabel: Record<eyesWearStatus, string> = {
	[eyesWearStatus.CONTACT_LENSES_GLASSES]: 'Contact Lenses & Glasses',
	[eyesWearStatus.CONTACT_LENSES]: 'contact Lenses',
	[eyesWearStatus.GLASSES]: 'Glasses',
	[eyesWearStatus.OTHER]: 'Other',
};

export enum hairColorStatus {
	WHITE = 'white',
	YELLOW = 'yellow',
	BROWN = 'brown',
	BLACK = 'black',
	GRAY = 'gray',
	SILVER = 'silver',
	OTHER = 'other',
}
export const hairColorStatusLabel: Record<hairColorStatus, string> = {
	[hairColorStatus.WHITE]: 'White',
	[hairColorStatus.YELLOW]: 'Yellow',
	[hairColorStatus.BROWN]: 'Brown',
	[hairColorStatus.BLACK]: 'Black',
	[hairColorStatus.GRAY]: 'Gray',
	[hairColorStatus.SILVER]: 'Silver',
	[hairColorStatus.OTHER]: 'Other',
};

export enum hairTypeStatus {
	STRAIGHT = 'straight',
	WAVY = 'wavy',
	CURLY = 'curly',
	OTHER = 'other',
}
export const hairTypeStatusLabel: Record<hairTypeStatus, string> = {
	[hairTypeStatus.STRAIGHT]: 'Straight',
	[hairTypeStatus.WAVY]: 'Wavy',
	[hairTypeStatus.CURLY]: 'Curly',
	[hairTypeStatus.OTHER]: 'Other',
};

export enum hairLengthStatus {
	BALD = 'bald',
	BALD_ON_TOP = 'bald_on_top',
	SHAVED = 'shaved',
	SHORT = 'short',
	MEDIUM = 'medium',
	LONG = 'long',
	OTHER = 'other',
}
export const hairLengthStatusLabel: Record<hairLengthStatus, string> = {
	[hairLengthStatus.BALD]: 'Bald',
	[hairLengthStatus.BALD_ON_TOP]: 'Bald on Top',
	[hairLengthStatus.SHAVED]: 'Shaved',
	[hairLengthStatus.SHORT]: 'Short',
	[hairLengthStatus.MEDIUM]: 'Medium',
	[hairLengthStatus.LONG]: 'Long',
	[hairLengthStatus.OTHER]: 'Other',
};

export enum bodyTypeStatus {
	PETTIE = 'petite',
	SLIM = 'slim',
	ATHLETIC = 'athletic',
	AVERAGE = 'average',
	FEW_EXTRA_POUNDS = 'few_extra_pounds',
	FULL_FIGURED = 'full_figured',
	LARGE_AND_LOVELY = 'large_and_lovely',
	OTHER = 'other',
}
export const bodyTypeStatusLabel: Record<bodyTypeStatus, string> = {
	[bodyTypeStatus.PETTIE]: 'Petite',
	[bodyTypeStatus.SLIM]: 'Slim',
	[bodyTypeStatus.ATHLETIC]: 'Athletic',
	[bodyTypeStatus.AVERAGE]: 'Average',
	[bodyTypeStatus.FEW_EXTRA_POUNDS]: 'Few extra pounds',
	[bodyTypeStatus.FULL_FIGURED]: 'Full figured',
	[bodyTypeStatus.LARGE_AND_LOVELY]: 'Large and lovely',
	[bodyTypeStatus.OTHER]: 'Other',
};

export enum bodyArtTypeStatus {
	BRANDING = 'branding',
	EARINGS = 'earings',
	PIERCING = 'piercing',
	TATTOO = 'tattoo',
	PERMANENT_MAKEUP = 'permanent_makeup',
	OTHER = 'other',
}
export const bodyArtTypeStatusLabel: Record<bodyArtTypeStatus, string> = {
	[bodyArtTypeStatus.BRANDING]: 'Branding',
	[bodyArtTypeStatus.EARINGS]: 'Earings',
	[bodyArtTypeStatus.PIERCING]: 'Piercing',
	[bodyArtTypeStatus.TATTOO]: 'Tattoo',
	[bodyArtTypeStatus.PERMANENT_MAKEUP]: 'Permanent Makeup',
	[bodyArtTypeStatus.OTHER]: 'Other',
};
