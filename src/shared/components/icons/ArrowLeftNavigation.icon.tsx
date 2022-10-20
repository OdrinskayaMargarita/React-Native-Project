import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const ArrowLeftNavigationIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '21'} height={height || '8'} viewBox='0 0 21 8' fill='none'>
			<Path
				d='M0.220913 3.64645C0.0256519 3.84171 0.0256519 4.15829 0.220913 4.35355L3.40289 7.53553C3.59816 7.7308 3.91474 7.7308 4.11 7.53553C4.30526 7.34027 4.30526 7.02369 4.11 6.82843L1.28157 4L4.11 1.17157C4.30526 0.976311 4.30526 0.659728 4.11 0.464466C3.91474 0.269204 3.59816 0.269204 3.40289 0.464466L0.220913 3.64645ZM21 3.5L0.574467 3.5V4.5L21 4.5V3.5Z'
				fill={fillIcon || colors.black}
			/>
		</Svg>
	);
};
