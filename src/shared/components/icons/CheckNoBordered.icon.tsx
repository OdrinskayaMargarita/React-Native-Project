import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const CheckNoBorderedIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '24'} height={height || '25'} viewBox='0 0 24 24'>
			<Path
				d='M9 16.1999L5.5 12.6999C5.11 12.3099 4.49 12.3099 4.1 12.6999C3.71 13.0899 3.71 13.7099 4.1 14.0999L8.29 18.2899C8.68 18.6799 9.31 18.6799 9.7 18.2899L20.3 7.69995C20.69 7.30995 20.69 6.68995 20.3 6.29995C19.91 5.90995 19.29 5.90995 18.9 6.29995L9 16.1999Z'
				fill={fillIcon || colors.greenInput}
			/>
		</Svg>
	);
};
