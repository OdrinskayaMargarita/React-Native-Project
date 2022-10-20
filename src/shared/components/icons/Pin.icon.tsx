import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const PinIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || 16} height={height || 16} viewBox='0 0 16 16' fill='none'>
			<Path
				d='M8.00008 8C7.26675 8 6.66675 7.4 6.66675 6.66667C6.66675 5.93334 7.26675 5.33334 8.00008 5.33334C8.73341 5.33334 9.33341 5.93334 9.33341 6.66667C9.33341 7.4 8.73341 8 8.00008 8ZM12.0001 6.8C12.0001 4.38 10.2334 2.66667 8.00008 2.66667C5.76675 2.66667 4.00008 4.38 4.00008 6.8C4.00008 8.36 5.30008 10.4267 8.00008 12.8933C10.7001 10.4267 12.0001 8.36 12.0001 6.8ZM8.00008 1.33334C10.8001 1.33334 13.3334 3.48 13.3334 6.8C13.3334 9.01334 11.5534 11.6333 8.00008 14.6667C4.44675 11.6333 2.66675 9.01334 2.66675 6.8C2.66675 3.48 5.20008 1.33334 8.00008 1.33334Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};
