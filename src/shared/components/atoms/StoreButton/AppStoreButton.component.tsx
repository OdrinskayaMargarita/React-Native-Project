import * as React from 'react';

import { TouchableOpacity, View, Text } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { AppStoreIcon } from '../../icons/AppStore.icon';

interface IProps {
	color: string;
	isDisabled?: boolean;
	onPress: () => void | Promise<void>;
}

export const AppStoreButton: React.FC<IProps> = ({ isDisabled = false, onPress, color = 'black' }) => {
	return (
		<Text style={tw`my-2`}>
			<TouchableOpacity
				activeOpacity={0.7}
				disabled={isDisabled}
				style={tw`rounded-md py-1 px-3 flex flex-row items-center ${
					color === 'black' ? 'bg-black' : 'bg-white border border-lightGrey'
				}`}
				onPress={() => onPress()}>
				<View style={tw`mr-2`}>
					<AppStoreIcon fillIcon={color === 'black' ? colors.white : colors.black} />
				</View>
				<View>
					<Text style={tw`text-xs ${color === 'black' ? 'text-white' : 'text-black'}`}>Download on the</Text>
					<Text style={tw`font-semibold text-xl ${color === 'black' ? 'text-white' : 'text-black'}`}>
						App Store
					</Text>
				</View>
			</TouchableOpacity>
		</Text>
	);
};
