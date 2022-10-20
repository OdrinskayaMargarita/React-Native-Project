import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const CalendarDefaultIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='13' height='15' viewBox='0 0 13 15' fill='none'>
			<Path
				d='M11.0046 2.16667H10.3379V0.833332H9.00456V2.16667H3.67122V0.833332H2.33789V2.16667H1.67122C0.931224 2.16667 0.344557 2.76667 0.344557 3.5L0.337891 12.8333C0.337891 13.5667 0.931224 14.1667 1.67122 14.1667H11.0046C11.7379 14.1667 12.3379 13.5667 12.3379 12.8333V3.5C12.3379 2.76667 11.7379 2.16667 11.0046 2.16667ZM11.0046 12.8333H1.67122V5.5H11.0046V12.8333ZM3.00456 6.83333H6.33789V10.1667H3.00456V6.83333Z'
				fill={fillIcon ? fillIcon : colors.greenInput}
			/>
		</Svg>
	);
};
