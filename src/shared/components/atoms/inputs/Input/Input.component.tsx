import React, { useState } from 'react';

import { TouchableHighlight, TextInput, View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { CalendarIcon } from '../../../icons/Calendar.icon';
import { CloseIcon } from '../../../icons/Close.icon';

interface IProps {
	size?: typeSize;
	styleUppercase?: boolean;
	onChange: any;
	labelValue?: string;
	value: string | null | undefined;
	placeholder?: string;
	isDisabled?: boolean;
	isShrink?: boolean;
	helperText?: string;
	errorMessage?: string | null;
	clearButton?: boolean;
	isIcon?: boolean;
	styleContainer?: string;
	bgColor?: string;
	keyboardType?: string;
}

type typeSize = 'sm' | 'md';

const getInputSize = (size: string) => {
	switch (size) {
		case 'sm':
			return {
				fontSize: 'text-xs',
				height: 'h-10',
			};
		case 'md':
			return {
				fontSize: 'text-sm',
				height: 'h-11',
			};
		default:
			return {
				fontSize: 'text-xs',
				height: 'h-10',
			};
	}
};

export const InputComponent: React.FC<IProps> = ({
	size = 'sm',
	styleUppercase = false,
	isDisabled = true,
	errorMessage = '',
	clearButton = false,
	isIcon = false,
	labelValue,
	value,
	placeholder = '',
	onChange,
	styleContainer = '',
	bgColor = '',
	keyboardType,
}) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);

	const onChangeFocus = (focusStatus: boolean) => {
		setIsFocus(focusStatus);
	};

	return (
		<View style={tw`relative pt-1 my-1 pb-4 ${styleContainer} ${errorMessage ? 'mb-4' : 'mb-0'}`}>
			{labelValue && (
				<View
					style={tw`absolute px-1 ${bgColor ? bgColor : 'bg-greyBg'} ${
						!!value?.length || isFocus ? 'top-0 z-2' : 'absolute top-[14px] z-0'
					}
					 ${(isIcon && isFocus) || value?.length ? 'left-[10px]' : isIcon && !isFocus ? 'left-[30px]' : 'left-[10px]'}`}>
					<Text
						style={tw` ${bgColor ? bgColor : 'bg-greyBg'} uppercase leading-3 ${
							errorMessage && !value?.length
								? 'text-red text-sm'
								: errorMessage && value?.length
								? 'text-red text-[10px]'
								: isFocus && !errorMessage
								? 'text-greenInput text-[10px]'
								: value?.length
								? 'text-[10px] text-grey'
								: 'text-grey text-sm'
						}`}>
						{labelValue}
					</Text>
				</View>
			)}
			<View
				style={tw`border h-10 rounded-md flex flex-row ${
					errorMessage ? 'border-red' : isFocus && !errorMessage ? 'border-greenInput' : 'border-grey'
				} ${getInputSize(size).height}`}>
				{isIcon && (
					<View style={tw`absolute top-[30%] left-3 w-4 h-4 z-100`}>
						<CalendarIcon fillIcon={errorMessage ? '#F33A3D' : isFocus ? '#5DCB42' : '#C4C4C4'} />
					</View>
				)}
				<TextInput
					keyboardType={keyboardType || 'default'}
					value={value || ''}
					onChangeText={onChange}
					placeholder={isFocus ? placeholder : ''}
					editable={isDisabled}
					onFocus={() => onChangeFocus(true)}
					onBlur={() => onChangeFocus(false)}
					style={tw`${getInputSize(size).fontSize} w-full text-black p-0 pb-1 ${
						styleUppercase ? 'uppercase' : 'normal-case'
					} rounded-md ${isIcon ? 'pl-8' : 'pl-2'}`}
				/>
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
