import React, { useState } from 'react';

import { TouchableOpacity, View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	listRadio: listRadioType[];
	activeKey: string;
}
type listRadioType = {
	key: string;
	title: string;
	child?: JSX.Element | JSX.Element[] | null;
};

export const CustomRadioButton: React.FC<IProps> = ({ listRadio }) => {
	const [activeValue, setActiveValue] = useState<string>('All');

	return (
		<View style={tw`flex-row justify-between pr-3`}>
			{listRadio.map((res, key) => (
				<View key={key}>
					<View key={res.key} style={tw`flex-row items-center`}>
						<TouchableOpacity
							style={tw`rounded-full w-5 h-5 items-center justify-center bg-[#F3F3F3]`}
							onPress={() => setActiveValue(res.key)}>
							{activeValue === res.key && <View style={tw`bg-greenInput w-3 h-3 rounded-full`} />}
						</TouchableOpacity>
						<Text style={tw`text-[13px] ml-1`}>{res.title}</Text>
					</View>
					<View>{res.child ? <View>{res.child}</View> : null}</View>
				</View>
			))}
		</View>
	);
};
