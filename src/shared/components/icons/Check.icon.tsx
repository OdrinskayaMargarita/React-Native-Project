import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const CheckIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '16'} height={height || '16'} viewBox='0 0 14 15' fill='none'>
			<Path
				d='M6.99986 0.833313C3.33319 0.833313 0.333191 3.83331 0.333191 7.49998C0.333191 11.1666 3.33319 14.1666 6.99986 14.1666C10.6665 14.1666 13.6665 11.1666 13.6665 7.49998C13.6665 3.83331 10.6665 0.833313 6.99986 0.833313ZM6.99986 12.8333C4.05986 12.8333 1.66652 10.44 1.66652 7.49998C1.66652 4.55998 4.05986 2.16665 6.99986 2.16665C9.93986 2.16665 12.3332 4.55998 12.3332 7.49998C12.3332 10.44 9.93986 12.8333 6.99986 12.8333ZM10.0599 4.55331L5.66652 8.94665L3.93986 7.22665L2.99986 8.16665L5.66652 10.8333L10.9999 5.49998L10.0599 4.55331Z'
				fill={fillIcon || colors.greenInput}
			/>
		</Svg>
	);
};
