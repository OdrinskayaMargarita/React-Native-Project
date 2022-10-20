import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const SendIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || 16} height={height || 16} viewBox='0 0 16 16' fill='none'>
			<Path
				d='M2.26671 13.6L13.9 8.61333C14.44 8.38 14.44 7.62 13.9 7.38667L2.26671 2.4C1.82671 2.20667 1.34004 2.53333 1.34004 3.00667L1.33337 6.08C1.33337 6.41333 1.58004 6.7 1.91337 6.74L11.3334 8L1.91337 9.25333C1.58004 9.3 1.33337 9.58667 1.33337 9.92L1.34004 12.9933C1.34004 13.4667 1.82671 13.7933 2.26671 13.6V13.6Z'
				fill={fillIcon || colors.white}
			/>
		</Svg>
	);
};
