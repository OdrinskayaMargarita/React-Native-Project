import * as React from 'react';

import { View } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	leftButton: JSX.Element | JSX.Element[];
	rightButton: JSX.Element | JSX.Element[];
}

export const BottomButtons: React.FC<IProps> = ({ leftButton, rightButton }) => {
	return (
		<View style={tw`flex flex-row items-center justify-center bg-white pt-5 pb-5 absolute bottom-0 w-full`}>
			<View style={tw`mx-2 w-33`}>{leftButton}</View>
			<View style={tw`mx-2 w-33`}>{rightButton}</View>
		</View>
	);
};
