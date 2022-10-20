import * as React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { AppleVectorIcon } from '../../../../shared/components/icons/AppleVector.icon';
import { FacebookVectorIcon } from '../../../../shared/components/icons/FacebookVector.icon';
import { GoogleVectorIcon } from '../../../../shared/components/icons/GoogleVector.icon';
import { MailIcon } from '../../../../shared/components/icons/Mail.icon';

interface IProps {
	type: 'google' | 'facebook' | 'apple' | 'email';
	onPress: () => void | Promise<void>;
	isDisabled?: boolean;
}

export const ButtonLogin: React.FC<IProps> = ({ type, onPress, isDisabled }) => {
	const getProps = (typeButton: string) => {
		switch (typeButton) {
			case 'google':
				return {
					icon: <GoogleVectorIcon width={24} height={24} />,
					text: 'continue with Google',
				};
			case 'facebook':
				return {
					icon: <FacebookVectorIcon width={24} height={24} />,
					text: 'continue with Facebook',
				};
			case 'apple':
				return {
					icon: <AppleVectorIcon width={22} height={27} />,
					text: 'continue with Apple',
				};
			case 'email':
				return {
					icon: <MailIcon />,
					text: 'continue with email',
				};
			default:
				return {
					icon: <MailIcon />,
					text: 'continue with email',
				};
		}
	};

	return (
		<TouchableOpacity
			style={tw`border rounded-md border-grey py-3 px-6 my-2.5 flex-row items-center ${
				isDisabled ? 'opacity-60' : 'opacity-100'
			}`}
			onPress={onPress}
			disabled={isDisabled}>
			<View style={tw`mr-4`}>{getProps(type).icon}</View>
			<Text style={tw`capitalize text-darkGrey text-base`}>{getProps(type).text}</Text>
		</TouchableOpacity>
	);
};
