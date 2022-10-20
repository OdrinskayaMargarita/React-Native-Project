import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const CopyIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
			<Path
				d='M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM15 5H8C6.9 5 6.01 5.9 6.01 7L6 21C6 22.1 6.89 23 7.99 23H19C20.1 23 21 22.1 21 21V11L15 5ZM8 21V7H14V12H19V21H8Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};
