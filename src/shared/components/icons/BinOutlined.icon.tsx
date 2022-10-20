import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '../../../lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const BinOutlinedIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='11' height='12' viewBox='0 0 11 12' fill='none'>
			<Path
				d='M6.9135 4.98L5.50016 6.39333L4.08016 4.98L3.14016 5.92L4.56016 7.33333L3.14683 8.74667L4.08683 9.68667L5.50016 8.27333L6.9135 9.68667L7.8535 8.74667L6.44016 7.33333L7.8535 5.92L6.9135 4.98ZM7.8335 0.666667L7.16683 0H3.8335L3.16683 0.666667H0.833496V2H10.1668V0.666667H7.8335ZM1.50016 10.6667C1.50016 11.4 2.10016 12 2.8335 12H8.16683C8.90016 12 9.50016 11.4 9.50016 10.6667V2.66667H1.50016V10.6667ZM2.8335 4H8.16683V10.6667H2.8335V4Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};
