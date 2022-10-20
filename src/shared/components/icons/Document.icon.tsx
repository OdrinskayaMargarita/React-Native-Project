import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const DocumentIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
			<Path
				d='M14.17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V9.83C21 9.3 20.79 8.79 20.41 8.42L15.58 3.59C15.21 3.21 14.7 3 14.17 3ZM8 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17H8C7.45 17 7 16.55 7 16C7 15.45 7.45 15 8 15ZM8 11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11ZM8 7H13C13.55 7 14 7.45 14 8C14 8.55 13.55 9 13 9H8C7.45 9 7 8.55 7 8C7 7.45 7.45 7 8 7Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};
