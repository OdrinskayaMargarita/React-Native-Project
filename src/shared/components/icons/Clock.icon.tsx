import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const ClockIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='14' height='15' viewBox='0 0 14 15' fill='none'>
			<Path
				d='M7 12.8333C8.41448 12.8333 9.77104 12.2714 10.7712 11.2712C11.7714 10.271 12.3333 8.91447 12.3333 7.49998C12.3333 6.08549 11.7714 4.72894 10.7712 3.72874C9.77104 2.72855 8.41448 2.16665 7 2.16665C5.58551 2.16665 4.22895 2.72855 3.22876 3.72874C2.22856 4.72894 1.66666 6.08549 1.66666 7.49998C1.66666 8.91447 2.22856 10.271 3.22876 11.2712C4.22895 12.2714 5.58551 12.8333 7 12.8333ZM7 0.833313C7.87547 0.833313 8.74238 1.00575 9.55122 1.34078C10.3601 1.67581 11.095 2.16688 11.714 2.78593C12.3331 3.40499 12.8242 4.13992 13.1592 4.94876C13.4942 5.75759 13.6667 6.6245 13.6667 7.49998C13.6667 9.26809 12.9643 10.9638 11.714 12.214C10.4638 13.4643 8.76811 14.1666 7 14.1666C3.31333 14.1666 0.333328 11.1666 0.333328 7.49998C0.333328 5.73187 1.03571 4.03618 2.28595 2.78593C3.53619 1.53569 5.23188 0.833313 7 0.833313ZM7.33333 4.16665V7.66665L10.3333 9.44665L9.83333 10.2666L6.33333 8.16665V4.16665H7.33333Z'
				fill={fillIcon || colors.pinkStatus}
			/>
		</Svg>
	);
};