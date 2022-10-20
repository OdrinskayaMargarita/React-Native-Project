import * as React from 'react';

import { TouchableOpacity } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { BinIcon } from '../../../icons/Bin.icon';

interface IProps {
	isDisabled?: boolean;
	onPress: () => void | Promise<void>;
	variant?: 'contained' | 'outlined' | 'noBordered';
	style?: string;
}

export const ButtonBinSquare: React.FC<IProps> = ({
	isDisabled = false,
	onPress,
	variant = 'contained',
	style = '',
}) => {
	return (
		<TouchableOpacity
			disabled={isDisabled}
			style={tw`rounded-md border ${
				isDisabled
					? 'bg-greyBg border-grey'
					: variant === 'contained'
					? 'bg-red border-red'
					: variant === 'noBordered'
					? 'bg-greyBg border-0'
					: 'bg-greyBg border-red'
			} flex items-center justify-center border w-11 h-11 ${style}`}
			onPress={onPress}>
			<BinIcon fillIcon={isDisabled ? colors.grey : variant === 'contained' ? colors.white : colors.red} />
		</TouchableOpacity>
	);
};
