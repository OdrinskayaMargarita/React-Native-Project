import * as React from 'react';

import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { AvatarItem } from '../../../../shared/components/atoms/Avatar/Avatar.component';

interface IProps {
	title?: string;
}

export const BacklogViewComments: React.FC<IProps> = () => {
	return (
		<View style={tw`h-full bg-white`}>
			<View style={tw`flex-row items-center py-4 border-b border-lightGrey`}>
				<View style={tw`pr-5 `}>
					<Text style={tw`text-[11px]`}>08/12/20</Text>
					<Text style={tw`text-[11px] text-grey`}>04:12 PM</Text>
				</View>
				<View style={tw`pl-5 border-l border-lightGrey flex-row items-start`}>
					<AvatarItem firstName='Kyryllo' lastName='Sotnykov' size='small' src='' id={12312} />
					<View style={tw`pl-2`}>
						<Text style={tw`text-grey text-[13px] font-bold`}>Kyryllo Sotnykov</Text>
						<Text style={tw`text-[13px]`}>Hey buddy! You are the best.</Text>
					</View>
				</View>
			</View>
			<View style={tw`flex-row items-center py-4 border-b border-lightGrey`}>
				<View style={tw`pr-5 `}>
					<Text style={tw`text-[11px]`}>08/12/20</Text>
					<Text style={tw`text-[11px] text-grey`}>04:12 PM</Text>
				</View>
				<View style={tw`pl-5 border-l border-lightGrey flex-row items-start`}>
					<AvatarItem firstName='Kyryllo' lastName='Sotnykov' size='small' src='' id={12312} />
					<View style={tw`pl-2 w-80%`}>
						<Text style={tw`text-grey text-[13px] font-bold leading-5`}>Kyryllo Sotnykov</Text>
						<Text style={tw`text-[13px]`}>
							Hey buddy! You are the best. Hey buddy! You are the best.Hey buddy! You are the best.Hey
							buddy! You are the best.
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
