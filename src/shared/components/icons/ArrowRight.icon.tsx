import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const ArrowRightIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='16' height='17' viewBox='0 0 16 17' fill='none'>
			<Path
				d='M13.3533 8.49998C13.3533 5.55998 10.94 3.14665 8.00001 3.14665C5.06001 3.14665 2.64668 5.55998 2.64668 8.49998C2.64668 11.44 5.06001 13.8533 8.00001 13.8533C10.94 13.8533 13.3533 11.44 13.3533 8.49998ZM14.6667 8.49998C14.6667 12.1933 11.6933 15.1666 8.00001 15.1666C4.30668 15.1666 1.33334 12.1933 1.33334 8.49998C1.33334 4.80665 4.30668 1.83331 8.00001 1.83331C11.6933 1.83331 14.6667 4.80665 14.6667 8.49998ZM9.02668 9.16665V11.1666L11.6667 8.49998L9.02668 5.83331V7.83331H4.33334V9.16665'
				fill={fillIcon || colors.greenInput}
			/>
		</Svg>
	);
};
