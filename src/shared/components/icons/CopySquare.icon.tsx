import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const CopySquareIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='18' height='17' viewBox='0 0 18 17' fill='none'>
			<Path
				d='M14.7156 12.9697C16.4998 12.9697 16.4998 12.7384 16.4998 11.1199C16.4998 11.1199 16.4998 4.9519 16.4998 3.33332C16.4998 1.71474 16.135 1.39504 14.7156 1.33331L8.04161 1.33325C6.85218 1.33325 6.25747 1.7147 6.25747 2.8708M3.61429 15.3333H10.4865C11.6544 15.3333 12.6011 14.4378 12.6011 13.3332V6.69687C12.6011 5.5923 11.6544 4.69687 10.4865 4.69687H3.61429C2.44647 4.69687 1.49976 5.5923 1.49976 6.69687V13.3332C1.49976 14.4378 2.44647 15.3333 3.61429 15.3333Z'
				stroke={fillIcon || colors.grey}
				stroke-width='1.4'
				stroke-linecap='round'
			/>
		</Svg>
	);
};
