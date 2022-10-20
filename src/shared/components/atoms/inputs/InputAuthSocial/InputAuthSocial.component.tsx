import React, { useState } from 'react';

import { View, Text, TouchableOpacity, Pressable } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { AppleVectorIcon } from '../../../icons/AppleVector.icon';
import { BinOutlinedIcon } from '../../../icons/BinOutlined.icon';
import { FacebookVectorIcon } from '../../../icons/FacebookVector.icon';
import { GoogleVectorIcon } from '../../../icons/GoogleVector.icon';
import { SmallPlusOutlined } from '../../../icons/SmallPlusOutlined.icon';

interface IProps {
	value: string;
	typeIcon: string;
	status?: boolean;
	func?: () => void | Promise<void>;
	isDisabled?: boolean;
}

export const InputAuthSocial: React.FC<IProps> = ({ value, func, status, typeIcon, isDisabled = false }) => {
	const getIcon = (type: string) => {
		switch (type) {
			case 'gogle':
				return <GoogleVectorIcon />;
			case 'facebook':
				return <FacebookVectorIcon />;
			case 'apple':
				return <AppleVectorIcon />;
			default:
				return <GoogleVectorIcon />;
		}
	};

	const [isActive, setIsActive] = useState<boolean>(false);

	const handlePressIn = () => {
		setIsActive(true);
	};

	const handlePressOut = () => {
		setIsActive(false);
	};

	return (
		<View
			style={tw`relative py-2 pb-1 mb-4 flex flex-row  justify-between items-center rounded-md border-b border-greyThird px-2 `}>
			<View style={tw`flex flex-row items-center w-90% ${!status ? 'opacity-60' : 'opacity-100'}`}>
				<View>{getIcon(typeIcon)}</View>
				<Text style={tw`w-11/12 h-9 p-2 text-black`}>{value}</Text>
			</View>
			<View style={tw`w-10% items-end`}>
				{status ? (
					<Pressable
						disabled={isDisabled}
						onPress={func}
						style={tw`w-4 h-4 rounded ${isDisabled ? 'opacity-60' : 'opacity-100'}`}
						onPressIn={handlePressIn}
						onPressOut={handlePressOut}>
						<BinOutlinedIcon fillIcon={isActive ? colors.red : colors.grey} />
					</Pressable>
				) : (
					<TouchableOpacity
						onPress={func}
						style={tw`w-4 h-4 ${isDisabled ? 'opacity-60' : 'opacity-100'}`}
						disabled={isDisabled}
						activeOpacity={isDisabled ? 1 : 0.7}>
						<SmallPlusOutlined width={16} height={16} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};
