import * as React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	title: string;
	isIconStart?: boolean;
	iconStart?: JSX.Element | JSX.Element[];
	additionalText?: string;
	titleButton?: JSX.Element | JSX.Element[];
	onPress: () => void | Promise<void>;
	styleAddAll?: string;
}

export const SettingHubItemSmall: React.FC<IProps> = ({
	title,
	isIconStart = false,
	iconStart,
	additionalText = '',
	titleButton,
	onPress,
	styleAddAll = '',
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={tw`bg-white p-3 rounded shadow h-20 my-2 w-full justify-center ${styleAddAll}`}>
			<View style={tw`flex-row items-center justify-between`}>
				{isIconStart ? <View style={tw`mr-[10px]`}>{iconStart}</View> : null}
				<View style={tw`w-full flex-row items-center justify-between w-11/12`}>
					<Text style={tw`uppercase font-bold h-full w-40% text-[20px] text-[#4d4d4d] normal-case`}>
						{title}
					</Text>
					{additionalText?.length ? <Text style={tw`text-md ${styleAddAll}`}>{additionalText}</Text> : null}
					{titleButton ? <View>{titleButton}</View> : null}
				</View>
			</View>
		</TouchableOpacity>
	);
};
