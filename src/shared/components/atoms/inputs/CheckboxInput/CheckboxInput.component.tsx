import * as React from 'react';
import { useState } from 'react';

import { Pressable, Text, View } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { CheckNoBorderedIcon } from '../../../icons/CheckNoBordered.icon';

interface IProps {
	label?: string;
	styleLabel?: string;
	isCircle?: boolean;
	isDisabled?: boolean;
}

export const CheckboxInput: React.FC<IProps> = ({ label = '', isCircle, styleLabel = '', isDisabled = false }) => {
	const [isChecked, setIsChange] = useState<boolean>(true);

	const onCheckmarkPress = () => {
		setIsChange(!isChecked);
	};

	return (
		<View>
			{isDisabled ? (
				<View style={tw`flex-row items-center justify-center`}>
					<View
						style={tw`items-center justify-center mr-1  w-5 h-5 bg-grey ${
							isCircle ? 'rounded-full' : 'rounded'
						}`}>
						<CheckNoBorderedIcon fillIcon={colors.white} width={15} height={15} />
					</View>
					<Text style={tw`${styleLabel}`}>{label}</Text>
				</View>
			) : (
				<Pressable style={tw`flex-row items-center justify-center`} onPress={onCheckmarkPress}>
					<View
						style={tw`items-center justify-center mr-1 ${isCircle ? 'rounded-full' : 'rounded'} w-5 h-5 ${
							isChecked ? 'bg-greenInput' : 'bg-grey'
						}`}>
						<CheckNoBorderedIcon fillIcon={colors.white} width={15} height={15} />
					</View>
					<Text style={tw`${styleLabel}`}>{label}</Text>
				</Pressable>
			)}
		</View>
	);
};
