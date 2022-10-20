import React, { useState } from 'react';

import { TouchableHighlight, TextInput, View, Text, TouchableOpacity } from 'react-native';

import { tw } from '@lib/tailwind';

import { CloseIcon } from '../../../icons/Close.icon';
import { EyeIcon } from '../../../icons/Eye.icon';
import { EyeLineIcon } from '../../../icons/EyeLine.icon';

interface IProps {
	size?: typeSize;
	styleUppercase?: boolean;
	onChange: any;
	labelValue?: string;
	value: string;
	placeholder?: string;
	isDisabled?: boolean;
	isRequired?: boolean;
	isFullWidth?: boolean;
	isShrink?: boolean;
	helperText?: string;
	errorMessage?: string | [] | null;
	clearButton?: boolean;
	handleFocus?: (value: boolean) => void;
}

type typeSize = 'sm' | 'md';

const getInputSize = (size: string) => {
	switch (size) {
		case 'sm':
			return {
				fontSize: 'text-xs',
			};
		case 'md':
			return {
				fontSize: 'text-sm',
			};
		default:
			return {
				fontSize: 'text-sm',
			};
	}
};

export const InputPassword: React.FC<IProps> = ({
	size = 'sm',
	styleUppercase = false,
	isDisabled = true,
	errorMessage = '',
	clearButton = false,
	labelValue,
	value = '',
	placeholder = '',
	onChange,
}) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [isSecureTextEntry, setSecureTextEntry] = useState<boolean>(true);

	return (
		<View style={tw`relative pt-1 pb-3 w-full ${errorMessage ? 'mb-4' : 'mb-0'}`}>
			{labelValue && (
				<View
					style={tw`absolute px-1 bg-greyBg z-2 left-[10px] ${
						isFocus || !!value.length ? 'top-[-2px] z-2' : 'top-[14px] z-0'
					}`}>
					<Text
						style={tw`bg-greyBg  uppercase leading-3 ${
							errorMessage && !value.length
								? 'text-red text-sm'
								: errorMessage && value.length
								? 'text-red text-[10px]'
								: isFocus && !errorMessage
								? 'text-greenInput text-[10px]'
								: value.length
								? 'text-[10px] text-grey'
								: 'text-grey text-sm'
						}`}>
						{labelValue}
					</Text>
				</View>
			)}
			<View
				style={tw`border h-10 rounded-md flex flex-row justify-between ${
					errorMessage ? 'border-red' : isFocus && !errorMessage ? 'border-greenInput' : 'border-grey'
				}`}>
				<View style={tw`w-10/12`}>
					<TextInput
						secureTextEntry={isSecureTextEntry}
						value={value}
						onChangeText={onChange}
						placeholder={!labelValue ? placeholder : ''}
						editable={isDisabled}
						onFocus={() => setIsFocus(true)}
						onBlur={() => setIsFocus(false)}
						style={tw`${getInputSize(size).fontSize} h-full text-black text-md ${
							styleUppercase ? 'uppercase' : 'normal-case'
						} rounded-md  px-3`}
					/>
				</View>
				<TouchableOpacity
					style={tw`w-10 items-center justify-center`}
					onPress={() => setSecureTextEntry(!isSecureTextEntry)}>
					{isSecureTextEntry ? <EyeLineIcon width={16} height={16} /> : <EyeIcon width={16} height={16} />}
				</TouchableOpacity>
				{clearButton && (
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor='#DDDDDD'
						onPress={() => console.log('clear!')}
						style={tw`absolute top-[30%] h-4 right-4`}>
						<CloseIcon />
					</TouchableHighlight>
				)}
			</View>
			{errorMessage ? (
				<Text style={tw`text-red text-[11px] absolute bottom-0 w-full left-1`}>{errorMessage}</Text>
			) : null}
		</View>
	);
};
