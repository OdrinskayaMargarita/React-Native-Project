import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const ArrowRightNavigationIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '21'} height={height || '8'} viewBox='0 0 21 8' fill='none'>
			<Path
				d='M20.7791 4.35356C20.9743 4.15829 20.9743 3.84171 20.7791 3.64645L17.5971 0.464469C17.4018 0.269207 17.0853 0.269207 16.89 0.464469C16.6947 0.659731 16.6947 0.976314 16.89 1.17158L19.7184 4L16.89 6.82843C16.6947 7.02369 16.6947 7.34027 16.89 7.53554C17.0853 7.7308 17.4018 7.7308 17.5971 7.53554L20.7791 4.35356ZM-8.74228e-08 4.5L20.4255 4.5L20.4255 3.5L8.74228e-08 3.5L-8.74228e-08 4.5Z'
				fill={fillIcon || colors.black}
			/>
		</Svg>
	);
};
