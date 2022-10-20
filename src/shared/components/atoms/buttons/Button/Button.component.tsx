import * as React from 'react';

import { TouchableOpacity, View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { getColor, getSizeButton } from './Button.constants';
import { getIcon } from './ButtonIconsSwitch.component';

interface IProps {
	title: string;
	variant?: 'contained' | 'outlined';
	size?: typeSize;
	isDisabled?: boolean;
	startIcon?: JSX.Element | JSX.Element[];
	startIconColor?: string;
	endIcon?: string;
	endIconColor?: string;
	onPress?: () => void | Promise<void>;
	color?: 'primary' | 'secondary';
	isStartIcon?: boolean;
	style?: string;
}

type typeSize = 'xs' | 'sm' | 'md';

export const DefaultButton: React.FC<IProps> = ({
	title = '',
	variant = 'contained',
	color = 'primary',
	isDisabled = false,
	size = 'sm',
	onPress,
	isStartIcon = false,
	startIcon,
	endIcon,
	endIconColor = '',
	style = '',
}) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			disabled={isDisabled}
			style={tw`flex flex-row rounded-md border ${
				getColor(color, isDisabled, variant).backgroundBorder
			} justify-center items-center ${getSizeButton(size).padding} ${style}`}
			onPress={onPress}>
			{isStartIcon ? <View style={tw`mr-2`}>{startIcon}</View> : null}
			<Text
				style={tw`text-center ${getColor(color, isDisabled, variant).textColor} ${
					getSizeButton(size).fontSize
				}`}>
				{title}
			</Text>
			{endIcon && <View style={tw`ml-3`}>{getIcon(endIcon, endIconColor)}</View>}
		</TouchableOpacity>
	);
};
