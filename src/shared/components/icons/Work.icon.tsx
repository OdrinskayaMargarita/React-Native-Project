import * as React from 'react';

import { Path, Svg } from 'react-native-svg';
import { colors } from 'src/lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const WorkIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '24'} height={height || '24'} viewBox='0 0 24 24' fill='none'>
			<Path
				d='M20 6.5C20.58 6.5 21.05 6.7 21.42 7.09C21.8 7.5 22 7.95 22 8.5V19.5C22 20.05 21.8 20.5 21.42 20.91C21.05 21.3 20.58 21.5 20 21.5H4C3.42 21.5 2.95 21.3 2.58 20.91C2.2 20.5 2 20.05 2 19.5V8.5C2 7.95 2.2 7.5 2.58 7.09C2.95 6.7 3.42 6.5 4 6.5H8V4.5C8 3.92 8.2 3.45 8.58 3.08C8.95 2.7 9.42 2.5 10 2.5H14C14.58 2.5 15.05 2.7 15.42 3.08C15.8 3.45 16 3.92 16 4.5V6.5H20ZM4 8.5V19.5H20V8.5H4ZM14 6.5V4.5H10V6.5H14Z'
				fill={fillIcon || colors.greenInput}
			/>
		</Svg>
	);
};
