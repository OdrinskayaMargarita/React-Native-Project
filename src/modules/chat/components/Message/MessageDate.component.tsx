import * as React from 'react';

import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

export const MessageDateComponent = () => {
	return (
		<View style={tw`flex-row items-center justify-center my-3`}>
			<View style={tw`bg-[#FAFAFA] rounded-full py-1 px-3`}>
				<Text style={tw`font-bold text-[11px]`}>25 March, 2021</Text>
			</View>
		</View>
	);
};
