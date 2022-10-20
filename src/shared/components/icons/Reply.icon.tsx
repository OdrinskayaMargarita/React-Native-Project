import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const ReplyIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '12'} height={height || '11'} viewBox='0 0 12 11' fill='none'>
			<Path
				d='M4.66667 3.09448V0.427814L0 5.09448L4.66667 9.76115V7.02781C8 7.02781 10.3333 8.09448 12 10.4278C11.3333 7.09448 9.33333 3.76115 4.66667 3.09448Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};
