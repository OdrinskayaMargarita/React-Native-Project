import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const DeleteIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='24px' height='24px' viewBox='0 0 24 24'>
			<Path
				fill={fillIcon || colors.yellowStatus}
				d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'
			/>
		</Svg>
	);
};
