import * as React from 'react';

import { TouchableOpacity, Text, View } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	title: string;
	onPress: any;
	styleButton?: string;
	styleText?: string;
	isBorderInner?: boolean;
}

export const ActionButton: React.FC<IProps> = ({ title, onPress, styleButton = '', isBorderInner, styleText = '' }) => {
	return (
		<TouchableOpacity
			style={tw`w-full bg-white items-center px-4 text-base ${styleButton}`}
			onPress={onPress}
			activeOpacity={0.8}>
			<View style={tw` py-4 w-full items-center ${isBorderInner ? 'border-b border-lightGrey' : ''}`}>
				<Text style={tw`font-bold text-darkGrey text-md ${styleText}`}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};
