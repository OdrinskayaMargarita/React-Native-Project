import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const ArrowMissedIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='14' height='15' viewBox='0 0 14 15' fill='none'>
			<Path
				d='M6.99998 2.14665C9.93998 2.14665 12.3533 4.55998 12.3533 7.49998C12.3533 10.44 9.93998 12.8533 6.99998 12.8533C4.05998 12.8533 1.64665 10.44 1.64665 7.49998C1.64665 4.55998 4.05998 2.14665 6.99998 2.14665ZM6.99998 0.833313C3.30665 0.833313 0.333313 3.80665 0.333313 7.49998C0.333313 11.1933 3.30665 14.1666 6.99998 14.1666C10.6933 14.1666 13.6666 11.1933 13.6666 7.49998C13.6666 3.80665 10.6933 0.833313 6.99998 0.833313ZM5.74665 7.18665L4.33331 8.59331V4.83331H8.09331L6.68665 6.24665L9.99998 9.56665L9.06665 10.5'
				fill={fillIcon || colors.red}
			/>
		</Svg>
	);
};
