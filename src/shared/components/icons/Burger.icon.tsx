import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const BurgerIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '22'} height={height || '14'} viewBox='0 0 22 14' fill='none'>
			<Path
				d='M21.5416 0H0.458347C0.205347 0 0 0.209077 0 0.466671C0 0.724266 0.205347 0.933343 0.458347 0.933343H21.5417C21.7947 0.933343 22 0.724266 22 0.466671C22 0.209077 21.7946 0 21.5416 0Z'
				fill={fillIcon || colors.darkGrey}
			/>
			<Path
				d='M21.5416 6.53288H0.458347C0.205347 6.53288 0 6.74195 0 6.99955C0 7.25714 0.205347 7.46622 0.458347 7.46622H21.5417C21.7947 7.46622 22 7.25714 22 6.99955C22 6.74195 21.7946 6.53288 21.5416 6.53288Z'
				fill={fillIcon || colors.darkGrey}
			/>
			<Path
				d='M21.5416 13.0667H0.458347C0.205347 13.0667 0 13.2757 0 13.5333C0 13.7909 0.205347 14 0.458347 14H21.5417C21.7947 14 22 13.7909 22 13.5333C22 13.2757 21.7946 13.0667 21.5416 13.0667Z'
				fill={fillIcon || colors.darkGrey}
			/>
		</Svg>
	);
};
