import React, { useEffect, useRef, useState } from 'react';

import { FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { SelectArrowIcon } from '../../../icons/SelectArrow.style';

import { SelectButtonStyle } from './Select.style';

interface IProps {
	label?: string;
	data: Data[];
	iconStart?: JSX.Element | JSX.Element[];
	isError?: boolean;
	errorMessage?: string;
	size?: 'sm' | 'md';
	styleModal?: string;
	styleLabel?: string;
	styleLabelContainer?: string;
	styleBorder?: string;
	selectedVal?: string | null | undefined;
	selectedLabel?: string | null | undefined;
	onChange?: () => void;
	isSearch?: boolean;
}

interface Data {
	label: string;
	value: string;
	iconItem?: JSX.Element | JSX.Element[] | null;
}

export const Select: React.FC<IProps> = ({
	data,
	iconStart,
	label = '',
	isError = false,
	errorMessage,
	size = 'sm',
	styleModal = '',
	styleLabel = '',
	styleLabelContainer = '',
	styleBorder = '',
	selectedVal,
	selectedLabel,
	onChange,
	isSearch = false,
}) => {
	const DropdownButton = useRef(null);
	const [visible, setVisible] = useState<boolean>(false);
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [selected, setSelected] = useState({
		iconItem: null,
		label: selectedLabel || '',
		value: selectedVal || '',
	});
	const [dropdownTop, setDropdownTop] = useState<number>(0);
	const [inputText, setInputText] = useState('');
	const [dataSelect, setDataSelect] = useState(data);

	const toggleDropdown = () => {
		if (visible) {
			setVisible(false);
			setIsFocus(false);
		} else {
			openDropdown();
			setIsFocus(true);
		}
	};

	const openDropdown = () => {
		// @ts-ignore
		DropdownButton?.current.measure((_fx: number, _fy: number, _w: number, h: number, _px: number, py: number) => {
			setDropdownTop(py + h - 3);
		});
		setVisible(true);
	};

	const onItemPress = (item: Data) => {
		setSelected(item);
		onChange(item.value);
		setVisible(false);
		setIsFocus(false);
	};

	useEffect(() => {
		if (!inputText.length) return setDataSelect(data);
		const res = data.filter(item => item.value.includes(inputText.toLowerCase()));
		setDataSelect(res);
	}, [inputText]);

	const renderItem = ({ item }: any) => (
		<View style={tw`px-2 py-1`}>
			<TouchableOpacity
				style={tw`py-2 flex flex-row items-center justify-start rounded-md ${
					selected.label === item.label ? 'bg-lightGrey' : 'bg-white'
				}`}
				onPress={() => onItemPress(item)}>
				{item.iconItem ? (
					<View>
						<Text>{item.iconItem}</Text>
					</View>
				) : null}
				<Text style={tw`ml-2 `}>{item.label}</Text>
			</TouchableOpacity>
		</View>
	);

	const renderDropdown = () => {
		return (
			<Modal visible={visible} transparent>
				<TouchableOpacity style={tw`w-full h-full`} onPress={() => toggleDropdown()}>
					<View style={tw`${styleModal}`}>
						<View
							style={tw`absolute pt-1 bg-white w-[90%] left-[5%] rounded shadow top-[${dropdownTop}px]`}>
							{isSearch ? (
								<View style={tw`px-2 mb-1`}>
									<TextInput
										style={tw`h-8 border-b border-grey`}
										placeholder={'Search'}
										onChangeText={setInputText}
										placeholderTextColor={colors.grey}
									/>
								</View>
							) : null}
							<FlatList data={dataSelect} renderItem={renderItem} keyExtractor={item => item.label} />
						</View>
					</View>
				</TouchableOpacity>
			</Modal>
		);
	};

	return (
		<View style={tw`pt-1 my-1 w-full relative h-12`}>
			{label ? (
				<Text
					style={tw`bg-greyBg px-1 absolute z-20 ${
						(iconStart && isFocus) || selected.value.length
							? 'left-[10px]'
							: iconStart && !isFocus
							? 'left-[30px]'
							: 'left-[10px]'
					} ${isFocus || selected.value.length ? '-top-[6px]' : `top-[15px] ${styleLabelContainer}`}`}>
					<Text
						style={tw`bg-greyBg uppercase text-[10px] leading-3 ${styleLabel} leading-5  ${
							isError
								? 'text-red'
								: isFocus && !isError
								? 'text-greenInput text-[11px]'
								: selected.value.length
								? 'text-[11px] text-grey'
								: 'text-grey'
						}`}>
						{label}
					</Text>
				</Text>
			) : null}
			<TouchableOpacity
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				ref={DropdownButton}
				style={tw`flex-row h-full items-center bg-greyBg border border-lightGrey rounded-md relative rounded-md pl-3 pr-1.5 z-10 ${
					size === 'sm' ? 'text-xs py-[11px]' : 'text-sm py-4 border'
				} ${isError ? 'border-red' : isFocus && !isError ? 'border-greenInput' : 'border-grey'} ${styleBorder}`}
				onPress={toggleDropdown}>
				{iconStart ? (
					<View style={tw`mr-2`}>
						<Text>{iconStart}</Text>
					</View>
				) : null}
				{renderDropdown()}
				<View style={tw`w-full flex-row items-center justify-between`}>
					{selected.iconItem ? (
						<View style={tw`w-1/12 items-center justify-center`}>
							<Text style={tw`-mb-1`}>{selected.iconItem}</Text>
						</View>
					) : null}
					<Text
						style={tw`w-10/12 text-sm ${selected.iconItem ? 'w-9/12' : 'w-11/12'}`}
						ellipsizeMode='tail'
						numberOfLines={1}>
						{selected && selected.label}
					</Text>
					<View style={SelectButtonStyle({ isFocus }).arrowIcon}>
						<SelectArrowIcon />
					</View>
				</View>
			</TouchableOpacity>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
		</View>
	);
};
