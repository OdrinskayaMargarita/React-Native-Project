import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { AvatarItem } from '../../../shared/components/atoms/Avatar/Avatar.component';
import { MessageOutlinedIcon } from '../../../shared/components/icons/MessageOutlined.icon';
import { ChatRoute } from '../enums/ChatRoute.enum';

interface IProps {
	title: string;
	members: number;
	isGroup?: boolean;
	isOnline?: boolean;
	imageSource: string;
}

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const ChatIListItem: React.FC<IProps> = ({ title, members, imageSource, isGroup = false, isOnline }) => {
	const navigation = useNavigation<navigationStack>();

	const getLetter = (titleValue: string) => {
		const initials: string[] = [];
		titleValue.split(' ').map(item => initials.push(item.charAt(0)));
		return initials.join('');
	};

	return (
		<TouchableOpacity
			style={tw`bg-greyBg p-3 flex-row items-center justify-between my-2 rounded shadow`}
			onPress={() => navigation.navigate(ChatRoute.ChatItemPersonal)}>
			<View style={tw`flex-row items-center justify-start w-80%`}>
				{isGroup ? (
					imageSource.length ? (
						<View style={tw`w-14 h-14 rounded`}>
							<Image source={{ uri: imageSource }} style={tw`h-14 w-14 rounded`} />
						</View>
					) : (
						<View style={tw`w-14 h-14 rounded bg-red items-center justify-center`}>
							<Text style={tw`uppercase text-white text-[22px]`}>{getLetter(title)}</Text>
						</View>
					)
				) : (
					<AvatarItem firstName='Kyrylly' lastName='Sotnykov' size='medium' isOnline={true} src='' id={124} />
				)}
				<View style={tw`w-55% ml-4`}>
					<View style={tw`flex-row items-start`}>
						<Text style={tw`font-bold text-sm`}>{title}</Text>
						{!isGroup && isOnline ? (
							<View style={tw`bg-greenInput w-2 h-2 rounded-full ml-1 mt-1`} />
						) : null}
					</View>
					{!isGroup ? <Text style={tw`text-grey text-[11px] mt-1`}>Friend</Text> : null}
					{isGroup ? <Text style={tw`text-xs text-grey`}>{members} members</Text> : null}
				</View>
			</View>
			<View style={tw`p-3 border-l border-grey`}>
				<View style={tw`relative`}>
					<MessageOutlinedIcon fillIcon={colors.black} />
					<View
						style={tw`w-4 h-4 bg-red rounded-full items-center justify-center absolute -bottom-1 -right-1`}>
						<Text style={tw`text-white text-[9px]`}>20</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};
