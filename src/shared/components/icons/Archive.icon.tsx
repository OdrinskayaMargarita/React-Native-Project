import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const ArchiveIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '19'} height={height || '19'} viewBox='0 0 19 19' fill='none'>
			<Path
				d='M0.288086 0.226074H18.2881V4.22607H0.288086V0.226074ZM1.28809 18.2261V5.22607H17.2881V18.2261H1.28809ZM11.2881 11.2261V8.22607H7.28809V11.2261H4.28809L9.28809 16.2261L14.2881 11.2261H11.2881Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};
