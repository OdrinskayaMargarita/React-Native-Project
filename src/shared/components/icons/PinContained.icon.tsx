import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const PinContainedIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '14'} height={height || '17'} viewBox='0 0 14 17' fill='none'>
			<Path
				d='M7.0001 8.46417C7.89729 8.46417 8.63135 7.73282 8.63135 6.83896C8.63135 5.9451 7.89729 5.21375 7.0001 5.21375C6.10291 5.21375 5.36885 5.9451 5.36885 6.83896C5.36885 7.73282 6.10291 8.46417 7.0001 8.46417ZM7.0001 0.338135C10.4257 0.338135 13.5251 2.95472 13.5251 7.00148C13.5251 9.58556 11.5268 12.6247 7.53841 16.127C7.22847 16.3952 6.76357 16.3952 6.45363 16.127C2.47338 12.6247 0.475098 9.58556 0.475098 7.00148C0.475098 2.95472 3.57447 0.338135 7.0001 0.338135Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};
