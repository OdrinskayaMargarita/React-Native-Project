export const getSize = (sizeName: string) => {
	switch (sizeName) {
		case 'small':
			return {
				positionOnline: 'bottom-0 right-0',
				positionOwner: 'top-0 right-0',
				sizeBox: 'w-[30px] h-[30px]',
				textParam: 'text-[17px]',
			};
		case 'medium':
			return {
				positionOnline: 'bottom-1 right-1',
				positionOwner: 'top-1 right-0',
				sizeBox: 'w-[56px] h-[56px]',
				textParam: 'text-[17px]',
			};
		case 'ml':
			return {
				positionOnline: 'bottom-1 right-1',
				positionOwner: 'top-1 right-0',
				sizeBox: 'w-20 h-20',
				textParam: 'text-[22px]',
			};
		case 'large':
			return {
				positionOnline: 'bottom-2 right-2',
				positionOwner: 'top-2 right-2',
				sizeBox: 'w-25 h-25',
				textParam: 'font-bold text-[30px]',
			};
		case 'extraLarge':
			return {
				positionOnline: 'bottom-4 right-4',
				positionOwner: 'top-4 right-4',
				sizeBox: 'w-[150px] h-[150px]',
				textParam: 'font-bold text-[30px]',
			};
		default:
			return {
				positionOnline: 'bottom-2 right-2',
				positionOwner: 'top-2 right-2',
				sizeBox: 'w-[30px] h-[30px]',
				textParam: 'text-[17px]',
			};
	}
};
