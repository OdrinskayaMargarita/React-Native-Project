import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const FeedbackIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='22' height='17' viewBox='0 0 22 17' fill='none'>
			<Path
				d='M17.1189 1.65475C16.8869 1.65475 16.6917 1.49107 16.5897 1.28267C16.284 0.657925 15.6199 0.217255 14.8542 0.217255C14.0785 0.217255 13.4419 0.669437 13.1223 1.30708C13.023 1.50537 12.8331 1.65475 12.6113 1.65475H0.479167C0.214531 1.65475 0 1.86928 0 2.13392C0 2.39856 0.21453 2.61309 0.479167 2.61309H12.5894C12.8214 2.61309 13.0166 2.77677 13.1186 2.98518C13.4244 3.60992 14.0884 4.05059 14.8542 4.05059C15.6298 4.05059 16.2664 3.59841 16.586 2.96076C16.6854 2.76247 16.8752 2.61309 17.097 2.61309H20.6042C20.8688 2.61309 21.0833 2.39856 21.0833 2.13392C21.0833 1.86928 20.8688 1.65475 20.6042 1.65475H17.1189ZM14.8542 3.09225C14.3271 3.09225 13.8958 2.661 13.8958 2.13392C13.8958 1.60684 14.3271 1.17559 14.8542 1.17559C15.3812 1.17559 15.8125 1.60684 15.8125 2.13392C15.8125 2.661 15.3812 3.09225 14.8542 3.09225Z'
				fill={fillIcon || colors.darkGrey}
			/>
			<Path
				d='M14.8542 12.9494C14.0785 12.9494 13.4419 13.4016 13.1223 14.0392C13.023 14.2375 12.8331 14.3869 12.6113 14.3869H0.479166C0.21453 14.3869 0 14.6014 0 14.8661C0 15.1307 0.21453 15.3452 0.479166 15.3452H12.5894C12.8214 15.3452 13.0166 15.5089 13.1186 15.7173C13.4244 16.3421 14.0884 16.7827 14.8542 16.7827C15.6298 16.7827 16.2664 16.3305 16.586 15.6929C16.6854 15.4946 16.8752 15.3452 17.097 15.3452H20.6042C20.8688 15.3452 21.0833 15.1307 21.0833 14.8661C21.0833 14.6014 20.8688 14.3869 20.6042 14.3869H17.097C16.8752 14.3869 16.6854 14.2375 16.586 14.0392C16.2664 13.4016 15.6298 12.9494 14.8542 12.9494ZM14.8542 15.8244C14.3271 15.8244 13.8958 15.3931 13.8958 14.8661C13.8958 14.339 14.3271 13.9077 14.8542 13.9077C15.3812 13.9077 15.8125 14.339 15.8125 14.8661C15.8125 15.3931 15.3812 15.8244 14.8542 15.8244Z'
				fill={fillIcon || colors.darkGrey}
			/>
			<Path
				d='M6.22917 6.58333C5.45349 6.58333 4.81694 7.03551 4.49734 7.67315C4.39795 7.87144 4.2081 8.02083 3.9863 8.02083H0.479167C0.214531 8.02083 0 8.23536 0 8.49999C0 8.76463 0.21453 8.97916 0.479167 8.97916H3.96441C4.19643 8.97916 4.39162 9.14284 4.49362 9.35125C4.79938 9.97599 5.46343 10.4167 6.22917 10.4167C7.00485 10.4167 7.64139 9.96448 7.96099 9.32683C8.06038 9.12854 8.25023 8.97916 8.47203 8.97916H20.6042C20.8688 8.97916 21.0833 8.76463 21.0833 8.49999C21.0833 8.23536 20.8688 8.02083 20.6042 8.02083H8.47203C8.25023 8.02083 8.06038 7.87144 7.96099 7.67315C7.64139 7.03551 7.00485 6.58333 6.22917 6.58333ZM6.22917 9.45833C5.70208 9.45833 5.27083 9.02708 5.27083 8.49999C5.27083 7.97291 5.70208 7.54166 6.22917 7.54166C6.75625 7.54166 7.1875 7.97291 7.1875 8.49999C7.1875 9.02708 6.75625 9.45833 6.22917 9.45833Z'
				fill={fillIcon || colors.darkGrey}
			/>
		</Svg>
	);
};
