import React, { useState } from 'react';

import { View, Text, TouchableOpacity, Pressable } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { BinIcon } from '../../icons/Bin.icon';
import { CheckNoBorderedIcon } from '../../icons/CheckNoBordered.icon';

interface IProps {
	labelValue?: string;
	isDeleteIcon?: boolean;
	deleteFunc: () => void | Promise<void>;
	styleCheckListItem?: string;
}

export const CheckListItem: React.FC<IProps> = ({
	labelValue,
	isDeleteIcon = true,
	deleteFunc,
	styleCheckListItem = '',
}) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const onCheckmarkPress = () => {
		setIsChecked(!isChecked);
	};

	return (
		<View
			style={tw`relative py-[14px] px-[10px] mb-5 flex flex-row items-center justify-between items-center border-b border-lightGrey ${styleCheckListItem}`}>
			<View style={tw`w-1/12 rounded-full`}>
				<Pressable
					style={tw`flex items-center justify-center rounded-full w-4 h-4 ${
						isChecked ? 'bg-greenInput' : 'bg-lightGrey'
					}`}
					onPress={onCheckmarkPress}>
					<CheckNoBorderedIcon fillIcon={colors.white} width={12} height={12} />
				</Pressable>
			</View>
			<Text style={tw`w-10/12 text-sm`}>{labelValue}</Text>
			{isDeleteIcon && (
				<TouchableOpacity style={tw`w-1/12`} activeOpacity={0.6} onPress={deleteFunc}>
					<BinIcon />
				</TouchableOpacity>
			)}
		</View>
	);
};
