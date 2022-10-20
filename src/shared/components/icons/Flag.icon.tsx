import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const FlagIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '16'} height={height || '17'} viewBox='0 0 16 17' fill='none'>
			<Path
				d='M9.60004 4.49996L9.44004 3.69996C9.38004 3.39329 9.10671 3.16663 8.78671 3.16663H4.00004C3.63337 3.16663 3.33337 3.46663 3.33337 3.83329V13.8333C3.33337 14.2 3.63337 14.5 4.00004 14.5C4.36671 14.5 4.66671 14.2 4.66671 13.8333V9.83329H8.40004L8.56004 10.6333C8.62004 10.9466 8.89337 11.1666 9.21337 11.1666H12.6667C13.0334 11.1666 13.3334 10.8666 13.3334 10.5V5.16663C13.3334 4.79996 13.0334 4.49996 12.6667 4.49996H9.60004Z'
				fill={fillIcon || '#F7A90D'}
			/>
		</Svg>
	);
};
