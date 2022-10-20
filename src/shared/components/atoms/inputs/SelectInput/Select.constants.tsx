export const getInputFontSize = (size: string) => {
	switch (size) {
		case 'sm':
			return 'text-xs';
		case 'md':
			return 'text-sm';
		default:
			return 'text-xs';
	}
};

export type PropsInputSize = 'sm' | 'md';

export const getInputSize = (size: string) => {
	switch (size) {
		case 'sm':
			return 'h-9';
		case 'md':
			return 'h-11';
		default:
			return 'h-9';
	}
};
