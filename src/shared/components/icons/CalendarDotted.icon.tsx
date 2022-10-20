import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '../../../lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const CalendarDottedIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='12' height='15' viewBox='0 0 12 15' fill='none'>
			<Path
				d='M10.6667 2.16668H10V1.50001C10 1.13334 9.7 0.833344 9.33333 0.833344C8.96667 0.833344 8.66667 1.13334 8.66667 1.50001V2.16668H3.33333V1.50001C3.33333 1.13334 3.03333 0.833344 2.66667 0.833344C2.3 0.833344 2 1.13334 2 1.50001V2.16668H1.33333C0.593333 2.16668 0.00666666 2.76668 0.00666666 3.50001L0 12.8333C0 13.5667 0.593333 14.1667 1.33333 14.1667H10.6667C11.4 14.1667 12 13.5667 12 12.8333V3.50001C12 2.76668 11.4 2.16668 10.6667 2.16668ZM10.6667 12.1667C10.6667 12.5333 10.3667 12.8333 10 12.8333H2C1.63333 12.8333 1.33333 12.5333 1.33333 12.1667V5.50001H10.6667V12.1667ZM2.66667 6.83334H4V8.16668H2.66667V6.83334ZM5.33333 6.83334H6.66667V8.16668H5.33333V6.83334ZM8 6.83334H9.33333V8.16668H8V6.83334Z'
				fill={fillIcon || colors.greenInput}
			/>
		</Svg>
	);
};
