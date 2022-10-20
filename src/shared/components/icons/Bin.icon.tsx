import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const BinIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
			<Path
				d='M4.00004 12.6667C4.00004 13.4 4.60004 14 5.33337 14H10.6667C11.4 14 12 13.4 12 12.6667V6C12 5.26667 11.4 4.66667 10.6667 4.66667H5.33337C4.60004 4.66667 4.00004 5.26667 4.00004 6V12.6667ZM6.11337 7.44667C6.37337 7.18667 6.79337 7.18667 7.05337 7.44667L8.00004 8.39333L8.94671 7.44667C9.20671 7.18667 9.62671 7.18667 9.88671 7.44667C10.1467 7.70667 10.1467 8.12667 9.88671 8.38667L8.94004 9.33333L9.88671 10.28C10.1467 10.54 10.1467 10.96 9.88671 11.22C9.62671 11.48 9.20671 11.48 8.94671 11.22L8.00004 10.2733L7.05337 11.22C6.79337 11.48 6.37337 11.48 6.11337 11.22C5.85337 10.96 5.85337 10.54 6.11337 10.28L7.06004 9.33333L6.11337 8.38667C5.85337 8.13333 5.85337 7.70667 6.11337 7.44667ZM10.3334 2.66667L9.86004 2.19333C9.74004 2.07333 9.56671 2 9.39337 2H6.60671C6.43337 2 6.26004 2.07333 6.14004 2.19333L5.66671 2.66667H4.00004C3.63337 2.66667 3.33337 2.96667 3.33337 3.33333C3.33337 3.7 3.63337 4 4.00004 4H12C12.3667 4 12.6667 3.7 12.6667 3.33333C12.6667 2.96667 12.3667 2.66667 12 2.66667H10.3334Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};