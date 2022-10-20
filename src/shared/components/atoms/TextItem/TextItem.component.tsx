import React from 'react';

import { View, Text, Image } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	typeInput?: string;
	valueInput: number | string | null | undefined;
	isPhone?: boolean;
	style?: string;
	styleValue?: string;
	styleLabel?: string;
	iconStart?: JSX.Element | JSX.Element[];
}

export const TextItem: React.FC<IProps> = ({
	typeInput = '',
	valueInput,
	isPhone = false,
	style = '',
	styleValue = '',
	styleLabel = '',
	iconStart,
}) => {
	return (
		<View style={tw`my-2 ${style}`}>
			<Text style={tw`text-[10px] uppercase text-darkGrey ${styleLabel}`}>{typeInput}</Text>
			<View style={tw`flex flex-row items-center py-1 border-b border-[#F2EDED]`}>
				{isPhone ? <Image source={require('./img/flag.png')} style={tw`mr-1`} /> : null}
				{iconStart ? <View style={tw`mr-2`}>{iconStart}</View> : null}
				<Text style={tw`${styleValue}`}>{valueInput || '-'}</Text>
			</View>
		</View>
	);
};
