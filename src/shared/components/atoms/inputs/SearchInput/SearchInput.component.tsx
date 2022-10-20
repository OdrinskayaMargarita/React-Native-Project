import * as React from 'react';
import { useState } from 'react';

import { TextInput, View, Text, TouchableOpacity } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { FilterIcon } from '../../../icons/Filter.icon';
import { getInputFontSize, getInputSize } from '../SelectInput/Select.constants';

import { PropsSearchInputSize } from './SearchInput.constants';

interface IProps {
	fontSize?: PropsSearchInputSize;
	size?: PropsSearchInputSize;
	styleUppercase?: boolean;
	labelValue?: string;
	placeholder?: string;
	isFilterStart?: boolean;
	openFilter?: any;
	isFilterEnd?: boolean;
	styleBg?: string;
	isFilterText?: boolean;
}

export const SearchInput: React.FC<IProps> = ({
	fontSize = 'sm',
	size = 'sm',
	styleUppercase = false,
	isFilterStart = false,
	isFilterText = false,
	isFilterEnd = false,
	labelValue,
	placeholder = '',
	styleBg = '',
	openFilter,
}) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [valueInput, setValueInput] = useState<string>('');

	const onChangeFocus = (focusStatus: boolean) => {
		setIsFocus(focusStatus);
	};

	return (
		<View style={tw`relative w-full ${styleBg}`}>
			{labelValue && (
				<Text
					style={tw`absolute px-1 z-10 left-2 bg-greyBg ${
						isFocus || valueInput.length ? '-top-[10px] z-10 ' : 'top-[22%] -z-1'
					} ${styleBg} h-4 `}>
					<Text
						style={tw`leading-5 uppercase text-sm ${
							isFocus
								? 'text-greenInput  text-[10px]'
								: valueInput.length
								? 'text-[10px] text-darkGrey'
								: 'text-grey'
						} ${styleBg}`}>
						{labelValue}
					</Text>
				</Text>
			)}
			<View
				style={tw`border rounded-md  flex-row ${getInputSize(size)} ${styleBg} ${
					isFocus ? 'border-greenInput' : 'border-grey'
				}`}>
				<TextInput
					value={valueInput}
					onChangeText={setValueInput}
					placeholder={isFocus ? placeholder : ''}
					onFocus={() => onChangeFocus(true)}
					onBlur={() => onChangeFocus(false)}
					style={tw`h-full px-3 w-full rounded-md text-black ${styleBg} ${
						styleUppercase ? 'none' : 'uppercase'
					} ${getInputFontSize(fontSize)}`}
				/>
				{isFilterStart && (
					<TouchableOpacity
						activeOpacity={0.6}
						onPress={openFilter}
						style={tw`absolute left-2 w-4 h-4 z-100 top-4/12`}>
						<View style={tw`flex flex-row`}>
							<FilterIcon fillIcon={isFocus ? colors.greenInput : colors.darkGrey} />
							{isFilterText ? <Text style={tw`ml-1`}>Filter</Text> : null}
						</View>
					</TouchableOpacity>
				)}
				{isFilterEnd && (
					<TouchableOpacity
						activeOpacity={0.6}
						onPress={openFilter}
						style={tw`absolute right-2 h-4 z-100 top-4/12`}>
						<View style={tw`flex flex-row`}>
							<FilterIcon fillIcon={isFocus ? colors.greenInput : colors.darkGrey} />
							{isFilterText ? <Text style={tw`ml-1`}>Filter</Text> : null}
						</View>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};
