import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const LogOutIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '18'} height={height || '20'} viewBox='0 0 18 20' fill='none'>
			<Path
				d='M7 15V12H0V8H7V5L12 10L7 15ZM7 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20H7C6.46957 20 5.96086 19.7893 5.58579 19.4142C5.21071 19.0391 5 18.5304 5 18V16H7V18H16V2H7V4H5V2C5 1.46957 5.21071 0.960859 5.58579 0.585786C5.96086 0.210714 6.46957 0 7 0Z'
				fill={fillIcon || colors.greenInput}
			/>
		</Svg>
	);
};
