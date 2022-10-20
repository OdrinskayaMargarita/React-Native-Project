import * as React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	isDisabled: boolean;
	label: string;
	style?: any;
	onPress: () => void | Promise<void>;
}

export const Link: React.FC<IProps> = ({ isDisabled, label, style, onPress }) => {
	return (
		<TouchableOpacity disabled={isDisabled} onPress={onPress} style={tw`px-3 py-2 rounded`}>
			<Text style={tw`${style}`}>{label}</Text>
		</TouchableOpacity>
	);
};
