import * as React from 'react';

import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { AvatarItem } from '../../../../shared/components/atoms/Avatar/Avatar.component';

interface IProps {
	title?: string;
}

export const BacklogViewActivity: React.FC<IProps> = () => {
	return (
		<View style={tw`bg-white h-full`}>
			<View style={tw`flex-row items-center py-4 border-b border-lightGrey`}>
				<View style={tw`pr-5 `}>
					<Text style={tw`text-[11px]`}>08/12/20</Text>
					<Text style={tw`text-[11px] text-grey`}>04:12 PM</Text>
				</View>
				<View style={tw`pl-5 border-l border-lightGrey`}>
					<Text style={tw`text-[13px]`}>Item 'Make an appointment' </Text>
					<View style={tw`flex-row items-center`}>
						<Text style={tw`mr-2 text-[13px]`}>Created at owner</Text>
						<AvatarItem firstName='Kyryllo' lastName='Sotnykov' size='small' src='' id={12312} />
						<Text style={tw`ml-1 text-grey text-[13px] font-bold`}>Kyryllo Sotnykov</Text>
					</View>
				</View>
			</View>
			<View style={tw`flex-row items-center py-4 border-b border-lightGrey`}>
				<View style={tw`pr-5 `}>
					<Text style={tw`text-[11px]`}>08/12/20</Text>
					<Text style={tw`text-[11px] text-grey`}>04:12 PM</Text>
				</View>
				<View style={tw`pl-5 border-l border-lightGrey`}>
					<Text style={tw`text-[13px]`}>Item 'Make an appointment' </Text>
					<View style={tw`flex-row items-center`}>
						<Text style={tw`mr-2 text-[13px]`}>Created at owner</Text>
						<AvatarItem firstName='Kyryllo' lastName='Sotnykov' size='small' src='' id={12312} />
						<Text style={tw`ml-1 text-grey text-[13px] font-bold`}>Kyryllo Sotnykov</Text>
					</View>
				</View>
			</View>
			<View style={tw`flex-row items-center py-4 border-b border-lightGrey`}>
				<View style={tw`pr-5 `}>
					<Text style={tw`text-[11px]`}>08/12/20</Text>
					<Text style={tw`text-[11px] text-grey`}>04:12 PM</Text>
				</View>
				<View style={tw`pl-5 border-l border-lightGrey`}>
					<Text style={tw`text-[13px]`}>Item 'Make an appointment' </Text>
					<View style={tw`flex-row items-center`}>
						<Text style={tw`mr-2 text-[13px]`}>Created at owner</Text>
						<AvatarItem firstName='Kyryllo' lastName='Sotnykov' size='small' src='' id={12312} />
						<Text style={tw`ml-1 text-grey text-[13px] font-bold`}>Kyryllo Sotnykov</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
