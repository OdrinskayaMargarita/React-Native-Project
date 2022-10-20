import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const DoubleCheckIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '16'} height={height || '10'} viewBox='0 0 16 10' fill='none'>
			<Path
				d='M0.273438 5.43994L4.0001 9.16661L4.9401 8.21994L1.2201 4.49994L0.273438 5.43994ZM14.8268 0.21994L7.77344 7.27994L5.0001 4.49994L4.04677 5.43994L7.77344 9.16661L15.7734 1.16661L14.8268 0.21994ZM12.0001 1.16661L11.0601 0.21994L6.82677 4.45327L7.77344 5.39327L12.0001 1.16661Z'
				fill={fillIcon || colors.greenInput}
			/>
		</Svg>
	);
};
