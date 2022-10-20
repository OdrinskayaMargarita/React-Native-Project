import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const PeopleIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '24'} height={height || '24'} viewBox='0 0 24 24' fill='none'>
			<Path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M16.6699 13.13C18.0399 14.06 18.9999 15.32 18.9999 17V20H21.9999C22.5499 20 22.9999 19.55 22.9999 19V17C22.9999 14.82 19.4299 13.53 16.6699 13.13Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				d='M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M14.9999 12C17.2099 12 18.9999 10.21 18.9999 8C18.9999 5.79 17.2099 4 14.9999 4C14.5299 4 14.0899 4.1 13.6699 4.24C14.4999 5.27 14.9999 6.58 14.9999 8C14.9999 9.42 14.4999 10.73 13.6699 11.76C14.0899 11.9 14.5299 12 14.9999 12Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M9 13C6.33 13 1 14.34 1 17V19C1 19.55 1.45 20 2 20H16C16.55 20 17 19.55 17 19V17C17 14.34 11.67 13 9 13Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};
