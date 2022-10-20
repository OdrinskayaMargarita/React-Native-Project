import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';

import { tw } from '@lib/tailwind';

import { ProfileRoute } from '../../../../modules/profile/enums/profileRoute.enum';
import { RootStackParamList } from '../../../../navigations/rootStackParams.interface';
import { AvatarItem } from '../Avatar/Avatar.component';

import { AvatarProps } from './types';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const UsersInfo: React.FC<AvatarProps> = ({ avatar, firstName, lastName, onCloseSidebar }) => {
	const navigation = useNavigation<navigationStack>();

	const onPressAvatar = () => {
		onCloseSidebar();
		navigation.navigate(ProfileRoute.Profile);
	};

	return (
		<TouchableOpacity onPress={onPressAvatar} style={tw`flex items-center flex-row w-full`}>
			<AvatarItem
				firstName={firstName}
				lastName={lastName}
				size={'medium'}
				src={avatar}
				id={0}
				isOwner={true}
				isCrownBig={true}
			/>
			<Text style={tw`ml-2 text-xs text-darkGrey`}>
				{firstName} {lastName}
			</Text>
		</TouchableOpacity>
	);
};
