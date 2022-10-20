import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const PersonIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '16'} height={height || '16'} viewBox='0 0 16 16' fill='none'>
			<Path
				d='M8.0013 8.00002C9.47464 8.00002 10.668 6.80669 10.668 5.33335C10.668 3.86002 9.47464 2.66669 8.0013 2.66669C6.52797 2.66669 5.33464 3.86002 5.33464 5.33335C5.33464 6.80669 6.52797 8.00002 8.0013 8.00002ZM8.0013 9.33335C6.2213 9.33335 2.66797 10.2267 2.66797 12V12.6667C2.66797 13.0334 2.96797 13.3334 3.33464 13.3334H12.668C13.0346 13.3334 13.3346 13.0334 13.3346 12.6667V12C13.3346 10.2267 9.7813 9.33335 8.0013 9.33335Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};
