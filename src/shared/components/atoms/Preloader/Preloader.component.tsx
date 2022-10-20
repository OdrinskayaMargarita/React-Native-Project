import * as React from 'react';

import { Spinner } from 'native-base';
import { SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { colors, tw } from '@lib/tailwind';

import { IStore } from '../../../../types';

interface IProps {
	size?: 'sm' | 'lg';
	color?: TypeColor;
}

type TypeColor = 'success' | 'error' | 'info' | 'primary' | 'secondary' | 'warning' | 'inherit';

export const PreloaderItem: React.FC<IProps> = ({ size = 'lg', color = 'success' }) => {
	const getColor = (colorSpinner: TypeColor) => {
		switch (colorSpinner) {
			case 'inherit':
				return colors.black;
			case 'success':
				return colors.green;
			case 'error':
				return colors.red;
			case 'info':
				return colors.blue;
			case 'primary':
				return colors.greenInput;
			case 'secondary':
				return colors.grey;
			case 'warning':
				return colors.red;
			default:
				return colors.black;
		}
	};

	const { isActive } = useSelector((store: IStore) => store.common.loader);

	if (!isActive) return null;

	return (
		<SafeAreaView>
			<View style={tw`bg-red h-full w-full`}>
				<View
					style={tw`p-2 w-full h-full  ${
						size === 'lg'
							? 'bg-lightGrey absolute inset-0 z-20 flex items-center justify-center'
							: 'relative'
					}`}>
					<Spinner color={getColor(color)} size={size} />
				</View>
			</View>
		</SafeAreaView>
	);
};
