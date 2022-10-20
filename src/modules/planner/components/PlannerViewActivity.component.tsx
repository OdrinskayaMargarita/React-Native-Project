import * as React from 'react';

import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { AvatarItem } from '../../../shared/components/atoms/Avatar/Avatar.component';

interface IProps {
	title?: string;
}

export const PlannerViewActivity: React.FC<IProps> = () => {
	return (
		<View style={tw`my-2`}>
			<View style={tw`flex-row items-center py-4 border-b border-lightGrey`}>
				<View style={tw`pr-3 border-r border-lightGrey`}>
					<Text>08/12/20</Text>
					<Text style={tw` text-grey`}>04:12 PM</Text>
				</View>
				<View style={tw`pl-2 flex-row items-center`}>
					<Text>The cheklist added by - </Text>
					<AvatarItem firstName='Kyryllo' lastName='Sotnykov' size='small' src='' id={12312} />
					<Text style={tw`ml-1`}>Kyryllo Sotnykov</Text>
				</View>
			</View>
			<View style={tw`flex-row items-center py-4 border-b border-lightGrey`}>
				<View style={tw`pr-3 border-r border-lightGrey`}>
					<Text>08/12/20</Text>
					<Text style={tw` text-grey`}>04:12 PM</Text>
				</View>
				<View style={tw`pl-2 flex-row items-center`}>
					<Text>The cheklist added by - </Text>
					<AvatarItem firstName='Kyryllo' lastName='Sotnykov' size='small' src='' id={12312} />
					<Text style={tw`ml-1`}>Kyryllo Sotnykov</Text>
				</View>
			</View>
			<View style={tw`flex-row items-center py-4 border-b border-lightGrey`}>
				<View style={tw`pr-3 border-r border-lightGrey`}>
					<Text>08/12/20</Text>
					<Text style={tw` text-grey`}>04:12 PM</Text>
				</View>
				<View style={tw`pl-2 flex-row items-center`}>
					<Text>The cheklist added by - </Text>
					<AvatarItem firstName='Kyryllo' lastName='Sotnykov' size='small' src='' id={12312} />
					<Text style={tw`ml-1`}>Kyryllo Sotnykov</Text>
				</View>
			</View>
		</View>
	);
};
