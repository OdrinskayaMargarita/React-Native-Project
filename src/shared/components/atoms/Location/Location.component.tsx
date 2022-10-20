import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors, tw } from '@lib/tailwind';
import { PinIcon } from '../../icons/Pin.icon';
import { SelectArrowIcon } from '../../icons/SelectArrow.style';
import { CopyIcon } from '../../icons/Copy.icon';

interface IProps {
	location: { lat: number; lng: number };
	address: string;
	isDefaultOpenMap?: boolean;
}

export const Location: React.FC<IProps> = ({ location, address, isDefaultOpenMap }) => {
	return (
		<View style={tw`flex flex-row items-center justify-between bg-white p-2 border-b-2 border-grey`}>
			<View style={tw`w-8/12 flex `}>
				<Text>{address}</Text>
			</View>
			<View style={tw` flex flex-row items-center w-4/12`}>
				<TouchableOpacity style={tw`mr-2`}>
					<PinIcon fillIcon={colors.greenInput} width={24} height={24} />
				</TouchableOpacity>
				<TouchableOpacity style={tw`mr-2`}>
					<CopyIcon fillIcon={colors.greenInput} />
				</TouchableOpacity>
				<TouchableOpacity>
					<SelectArrowIcon fillIcon={colors.greenInput} width={24} height={24} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
