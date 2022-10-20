export const getSearchInputFontSize = (size: string) => {
	switch (size) {
		case 'sm':
			return 12;
		case 'md':
			return 14;
		default:
			return 12;
	}
};

export type PropsSearchInputSize = 'sm' | 'md';

export const getSearchInputSize = (size: string) => {
	switch (size) {
		case 'sm':
			return 35;
		case 'md':
			return 43;
		default:
			return 35;
	}
};
