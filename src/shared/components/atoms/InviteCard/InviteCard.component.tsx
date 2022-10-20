import * as React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import { tw } from '@lib/tailwind';

import { PlusIcon } from '../../icons/Plus.icon';
import { AvatarItem } from '../Avatar/Avatar.component';

interface IProps {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	status: string;
	onPress?: () => void | Promise<void>;
	isOnline?: boolean;
	isOwner?: boolean;
	variant?: 'circular' | 'rounded';
	src: string;
	id: number;
	inviteButton: boolean;
	style?: string;
}

export const InviteCard: React.FC<IProps> = ({
	firstName = 'ivan',
	lastName = 'petrov',
	status = 'Not connected',
	phone = '+380991223345',
	email = 'johndow@hubmee.com',
	onPress,
	src,
	id,
	inviteButton = false,
	style = '',
}) => {
	return (
		<View style={tw`bg-white p-[10px] rounded ${style}`}>
			<View style={tw`flex flex-row items-center justify-between mb-[10px]`}>
				<View style={tw`flex flex-row items-center`}>
					<AvatarItem firstName={firstName} lastName={lastName} size='small' src={src} id={id} />
					<View style={tw`ml-[10px]`}>
						<Text style={tw`text-[11px] capitalize`}>
							{firstName} {lastName}
						</Text>
						<Text style={tw`text-grey text-[11px] capitalize`}>{status}</Text>
					</View>
				</View>
				{inviteButton && (
					<TouchableOpacity style={tw`flex flex-row items-center p-1`} onPress={onPress}>
						<PlusIcon />
						<Text style={tw`ml-1 text-sm`}>Invite</Text>
					</TouchableOpacity>
				)}
			</View>
			<View style={tw`border-b-2 border-lightGrey pb-1 mb-[10px]`}>
				<Text style={tw`uppercase text-darkGrey mb-[5px] text-[10px]`}>Phone (home)</Text>
				<View style={tw`flex flex-row items-center`}>
					<Image source={require('./img/flag.png')} style={tw`mr-1`} />
					<Text style={tw`text-sm`}>{phone}</Text>
				</View>
			</View>
			<View>
				<Text style={tw`uppercase text-darkGrey mb-[5px] text-[10px]`}>Email</Text>
				<Text style={tw`text-sm`}>{email}</Text>
			</View>
		</View>
	);
};
