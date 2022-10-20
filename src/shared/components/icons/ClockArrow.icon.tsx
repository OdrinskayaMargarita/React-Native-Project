import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const ClockArrowIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='12' height='13' viewBox='0 0 12 13' fill='none'>
			<Path
				d='M12 5.24667H7.48001L9.30668 3.36667C7.48668 1.56667 4.54001 1.5 2.72001 3.3C0.900013 5.10667 0.900013 8.02 2.72001 9.83333C4.54001 11.6333 7.48668 11.6333 9.30668 9.83333C10.2133 8.93333 10.6667 7.88667 10.6667 6.56667H12C12 7.88667 11.4133 9.6 10.24 10.76C7.90001 13.08 4.10001 13.08 1.76001 10.76C-0.57332 8.44667 -0.59332 4.68667 1.74668 2.37333C4.08668 0.0599999 7.84001 0.0599999 10.18 2.37333L12 0.5V5.24667ZM6.33335 3.83333V6.66667L8.66668 8.05333L8.18668 8.86L5.33335 7.16667V3.83333H6.33335Z'
				fill={fillIcon || colors.linkStatus}
			/>
		</Svg>
	);
};
