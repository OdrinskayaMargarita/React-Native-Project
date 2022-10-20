import * as React from 'react';

import { TouchableOpacity, View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { PlayMarketIcon } from '../../icons/PlayMarket.icon';

interface IProps {
	color: string;
	isDisabled?: boolean;
	onPress: () => void | Promise<void>;
}

export const PlayMarketButton: React.FC<IProps> = ({ isDisabled = false, onPress, color = 'black' }) => {
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
					<PlayMarketIcon />
				</View>
				<View>
					<Text style={tw` uppercase text-xs ${color === 'black' ? 'text-white' : 'text-black'}`}>
						Get it on
					</Text>
					<Text style={tw`font-semibold text-xl ${color === 'black' ? 'text-white' : 'text-black'}`}>
						Google Play
					</Text>
				</View>
			</TouchableOpacity>
		</Text>
	);
};
