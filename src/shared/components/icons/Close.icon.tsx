import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const CloseIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '16'} height={height || '16'} viewBox='0 0 16 16' fill='none'>
			<Path
				d='M12.6667 4.27337L11.7267 3.33337L8.00004 7.06004L4.27337 3.33337L3.33337 4.27337L7.06004 8.00004L3.33337 11.7267L4.27337 12.6667L8.00004 8.94004L11.7267 12.6667L12.6667 11.7267L8.94004 8.00004L12.6667 4.27337Z'
				fill={fillIcon || '#F33A3D'}
			/>
		</Svg>
	);
};
