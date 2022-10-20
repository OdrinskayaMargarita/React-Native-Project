import * as React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { BigPlusIcon } from '../../../icons/BigPlus.icon';
import { SmallPlusIcon } from '../../../icons/SmallPlus.icon';

interface IProps {
	size: 'sm' | 'md';
	isDisabled?: boolean;
	onPress: () => void | Promise<void>;
	style?: string;
}

export const PlusButtonContained: React.FC<IProps> = ({ size = 'sm', isDisabled = false, onPress, style }) => {
	return (
		<TouchableOpacity
			disabled={isDisabled}
			style={tw`p-2 rounded-full flex items-center justify-center  ${
				isDisabled ? 'bg-grey/40' : 'bg-greenInput/30'
			}  ${size === 'sm' ? `w-8 h-8` : `w-[84px] h-[84px]`} ${style?.length ? style : ''}`}
			onPress={onPress}>
			<View
				style={tw`${
					isDisabled ? 'bg-grey border-grey' : 'bg-greenInput border-greenInput'
				} rounded-full w-full h-full flex items-center justify-center`}>
				{size === 'sm' ? <SmallPlusIcon /> : <BigPlusIcon />}
			</View>
		</TouchableOpacity>
	);
};
