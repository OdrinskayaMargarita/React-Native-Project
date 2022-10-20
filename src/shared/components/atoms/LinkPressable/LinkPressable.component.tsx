import { useState } from 'react';
import * as React from 'react';

import { Pressable, Text } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	isDisabled: boolean;
	onClosePopover: () => void | Promise<void>;
	handleNavigate: () => void | Promise<void>;
	label: string;
}

export const LinkPressable: React.FC<IProps> = ({ onClosePopover, handleNavigate, isDisabled, label }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handlePressable = () => {
		onClosePopover();
		console.log(handleNavigate);
		handleNavigate();
	};

	const handlePressIn = () => {
		setIsActive(true);
	};

	const handlePressOut = () => {
		setIsActive(false);
	};

	return (
		<Pressable
			onPress={handlePressable}
			style={tw`p-1 px-2 my-0.5 rounded ${isActive ? 'bg-greenInput' : 'bg-white'}`}
			disabled={isDisabled}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}>
			<Text style={tw` ${isDisabled ? 'text-grey' : isActive ? 'text-white' : 'text-black'}`}>{label}</Text>
		</Pressable>
	);
};
