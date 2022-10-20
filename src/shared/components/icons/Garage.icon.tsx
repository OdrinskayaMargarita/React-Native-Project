import * as React from 'react';

import { Path, Svg } from 'react-native-svg';
import { colors } from 'src/lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const GarageIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '24'} height={height || '24'} viewBox='0 0 24 24' fill='none'>
			<Path
				d='M22 9V20H20V11H4V20H2V9L12 5L22 9ZM19 12H5V14H19V12ZM19 18H5V20H19V18ZM19 15H5V17H19V15Z'
				fill={fillIcon || colors.greenInput}
			/>
		</Svg>
	);
};
