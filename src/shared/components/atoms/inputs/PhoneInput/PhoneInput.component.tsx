import * as React from 'react';
import { useState } from 'react';

import { View, Text } from 'react-native';
import PhoneInput from 'react-native-phone-input';

import { tw } from '@lib/tailwind';

interface IProps {
	style?: string;
	borderColor?: string;
	label?: string;
	value: string | null;
	onChange: (item: string) => void | Promise<void>;
	errorMessage?: string | null;
}

export const InputPhone: React.FC<IProps> = ({
	style = '',
	borderColor = '',
	label,
	value,
	onChange,
	errorMessage,
}) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [valueInput, setValueInput] = useState<string | null>(value);

	const onChangeFunc = (val: string) => {
		setValueInput(val);
		onChange(val);
	};

	return (
		<View style={tw`relative pt-1 ${style} pb-4`}>
			<View style={tw`absolute bg-greyBg flex px-1 z-10 -top-1 left-3`}>
				<Text
					style={tw`text-[10px] uppercase ${
						errorMessage ? 'text-red' : isFocus ? 'text-greenInput' : 'text-grey'
					}`}>
					{label?.length ? label : 'Phone'}
				</Text>
			</View>

			<PhoneInput
				textStyle={{ color: 'black' }}
				style={tw`rounded-md border p-2 pl-3  ${
					errorMessage
						? 'border-red'
						: isFocus
						? 'border-greenInput'
						: borderColor.length
						? borderColor
						: 'border-grey'
				}`}
				initialCountry={'ua'}
				onChangePhoneNumber={text => onChangeFunc(text)}
				initialValue={valueInput}
				textProps={{
					onBlur: () => setIsFocus(false),
					onFocus: () => setIsFocus(true),
				}}
			/>
			{errorMessage ? (
				<Text style={tw`text-red text-[11px] absolute bottom-0 w-full left-1`}>{errorMessage}</Text>
			) : null}
		</View>
	);
};
