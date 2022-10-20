import React, { useState } from 'react';

import { View, TextInput, TouchableOpacity } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { SmallPlusOutlined } from '../../../icons/SmallPlusOutlined.icon';

interface IProps {
	placeholder?: string;
	value: string;
	onChange: any;
	addFunc: () => void | Promise<void>;
}

export const ListInput: React.FC<IProps> = ({ placeholder, value, onChange, addFunc }) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	return (
		<View
			style={tw`relative mb-5 flex flex-row  justify-between items-center rounded-md border-b bg-white ${
				isFocus ? 'border-greenInput' : 'border-grey'
			}`}>
			<TextInput
				style={tw`w-11/12 text-black text-sm pb-2 pl-1`}
				placeholder={placeholder}
				placeholderTextColor={colors.darkGrey}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				value={value}
				onChangeText={onChange}
			/>
			<TouchableOpacity activeOpacity={0.6} style={tw`w-1/12`} onPress={addFunc}>
				<SmallPlusOutlined width={16} height={16} />
			</TouchableOpacity>
		</View>
	);
};
