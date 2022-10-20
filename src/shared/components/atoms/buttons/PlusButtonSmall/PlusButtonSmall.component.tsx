import * as React from 'react';

import { TouchableOpacity } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { PlusIcon } from '../../../icons/Plus.icon';
import { SmallPlusOutlined } from '../../../icons/SmallPlusOutlined.icon';

interface IProps {
	isDisabled?: boolean;
	onPress: () => void | Promise<void>;
	variant?: string;
}

export const PlusButtonSmall: React.FC<IProps> = ({ isDisabled = false, onPress, variant = 'outlined' }) => {
	return (
		<TouchableOpacity
			disabled={isDisabled}
			style={tw`rounded-full flex items-center justify-center w-6 h-6 ${
				variant === 'contained' ? 'bg-greenInput' : 'bg-white'
			}`}
			onPress={() => onPress}>
			{variant === 'contained' ? <PlusIcon fillIcon={colors.white} /> : <SmallPlusOutlined />}
		</TouchableOpacity>
	);
};
