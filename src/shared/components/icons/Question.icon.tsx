import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const QuestionIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='14' height='15' viewBox='0 0 14 15' fill='none'>
			<Path
				d='M6.33334 11.5H7.66667V10.1666H6.33334V11.5ZM7 0.833313C6.12452 0.833313 5.25762 1.00575 4.44878 1.34078C3.63994 1.67581 2.90501 2.16688 2.28596 2.78593C1.03571 4.03618 0.333336 5.73187 0.333336 7.49998C0.333336 9.26809 1.03571 10.9638 2.28596 12.214C2.90501 12.8331 3.63994 13.3241 4.44878 13.6592C5.25762 13.9942 6.12452 14.1666 7 14.1666C8.76811 14.1666 10.4638 13.4643 11.714 12.214C12.9643 10.9638 13.6667 9.26809 13.6667 7.49998C13.6667 6.6245 13.4942 5.75759 13.1592 4.94876C12.8242 4.13992 12.3331 3.40499 11.714 2.78593C11.095 2.16688 10.3601 1.67581 9.55123 1.34078C8.74239 1.00575 7.87548 0.833313 7 0.833313ZM7 12.8333C4.06 12.8333 1.66667 10.44 1.66667 7.49998C1.66667 4.55998 4.06 2.16665 7 2.16665C9.94 2.16665 12.3333 4.55998 12.3333 7.49998C12.3333 10.44 9.94 12.8333 7 12.8333ZM7 3.49998C6.29276 3.49998 5.61448 3.78093 5.11438 4.28103C4.61429 4.78113 4.33334 5.4594 4.33334 6.16665H5.66667C5.66667 5.81302 5.80715 5.47389 6.05719 5.22384C6.30724 4.97379 6.64638 4.83331 7 4.83331C7.35362 4.83331 7.69276 4.97379 7.94281 5.22384C8.19286 5.47389 8.33334 5.81302 8.33334 6.16665C8.33334 7.49998 6.33334 7.33331 6.33334 9.49998H7.66667C7.66667 7.99998 9.66667 7.83331 9.66667 6.16665C9.66667 5.4594 9.38572 4.78113 8.88562 4.28103C8.38552 3.78093 7.70725 3.49998 7 3.49998Z'
				fill={fillIcon || colors.yellowStatus}
			/>
		</Svg>
	);
};
