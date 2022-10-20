import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const MessageOutlinedIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '24'} height={height || '24'} viewBox='0 0 24 24' fill='none'>
			<Path
				d='M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};
