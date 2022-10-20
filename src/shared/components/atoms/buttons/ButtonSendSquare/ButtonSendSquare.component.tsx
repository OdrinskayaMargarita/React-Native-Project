import * as React from 'react';

import { TouchableOpacity } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { SendIcon } from '../../../icons/Send.icon';

interface IProps {
	isDisabled?: boolean;
	onPress: () => void | Promise<void>;
	variant?: 'contained' | 'outlined';
}

export const ButtonSendSquare: React.FC<IProps> = ({ isDisabled = false, onPress, variant = 'contained' }) => {
	return (
		<TouchableOpacity
			disabled={isDisabled}
			style={tw`rounded-md border ${
				isDisabled
					? 'bg-white border-grey'
					: variant === 'contained'
					? 'bg-greenInput border-greenInput'
					: 'bg-white border-greenInput'
			} flex items-center justify-center border w-11 h-11`}
			onPress={() => onPress}>
			<SendIcon
				fillIcon={isDisabled ? colors.grey : variant === 'contained' ? colors.white : colors.greenInput}
			/>
		</TouchableOpacity>
	);
};
