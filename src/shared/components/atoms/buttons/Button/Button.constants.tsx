export const getSizeButton = (size: string) => {
	switch (size) {
		case 'xs':
			return {
				padding: 'py-1 px-2',
				fontSize: 'text-xs',
			};
		case 'sm':
			return {
				padding: 'py-2 px-4',
				fontSize: 'text-xs',
			};
		case 'md':
			return {
				padding: 'py-3 px-7',
				fontSize: 'text-sm',
			};
		default:
			return {
				padding: 'py-2 px-4',
				fontSize: 'text-md',
			};
	}
};

export const getColor = (color: string, isDisabled: boolean, variant: string) => {
	if (isDisabled) {
		if (variant === 'contained') {
			return { backgroundBorder: 'bg-grey border-grey', textColor: 'text-white' };
		} else if (variant === 'outlined') {
			return { backgroundBorder: ' border-grey', textColor: 'text-grey' };
		} else if (variant === 'text') {
			return { backgroundBorder: 'bg-grey border-white', textColor: 'text-grey' };
		}
	} else {
		if (variant === 'contained') {
			if (color === 'primary') {
				return { backgroundBorder: 'bg-greenInput border-greenInput', textColor: 'text-white' };
			} else if (color === 'secondary') {
				return { backgroundBorder: 'bg-red border-red', textColor: 'text-white' };
			}
		} else if (variant === 'outlined') {
			if (color === 'primary') {
				return { backgroundBorder: ' border-greenInput', textColor: 'text-greenInput' };
			} else if (color === 'secondary') {
				return { backgroundBorder: ' border-red', textColor: 'text-red' };
			}
		} else if (variant === 'text') {
			return { backgroundBorder: 'border-transparent', textColor: 'text-black' };
		}
	}
	return { backgroundBorder: 'bg-greenInput border-greenInput', textColor: 'text-white' };
};
