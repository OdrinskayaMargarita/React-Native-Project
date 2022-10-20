import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../../navigations/rootStackParams.interface';
import { AvatarItem } from '../../../../shared/components/atoms/Avatar/Avatar.component';
import { DoubleCheckIcon } from '../../../../shared/components/icons/DoubleCheck.icon';
import { MoreVertical } from '../../../../shared/components/icons/MoreVertical.icon';
import { ReplyIcon } from '../../../../shared/components/icons/Reply.icon';
import { SmileIcon } from '../../../../shared/components/icons/Smile.icon';
import { ChatRoute } from '../../enums/ChatRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

interface IProps {
	isReply?: boolean;
	isMainReply?: boolean;
	textMessage?: string;
	id: number;
	activeMessageId?: number | null;
	setActiveMessageId?: (arg: number) => void;
	setModalActionVisible: any;
	isMedia?: boolean;
}

export const MessageItemComponent: React.FC<IProps> = ({
	isReply = false,
	textMessage,
	isMainReply = false,
	id,
	activeMessageId,
	setActiveMessageId,
	setModalActionVisible,
	isMedia,
}) => {
	const navigation = useNavigation<navigationStack>();

	const onPressMessage = (idM: number) => {
		if ((!isReply || !isMainReply) && setActiveMessageId) {
			setActiveMessageId(idM);
		}
	};

	return (
		<View style={tw`relative w-full my-1`}>
			<View
				style={tw`rounded-full border border-grey flex-row items-center py-1 absolute top-0 right-0 z-10 ${
					id === activeMessageId && (!isReply || !isMainReply) ? 'flex flex-row' : 'hidden'
				}`}>
				<TouchableOpacity style={tw`w-9 border-r border-grey items-center justify-center`}>
					<SmileIcon />
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-9 items-center justify-center border-r border-grey`}
					onPress={() => navigation.navigate(ChatRoute.ChatItemReply)}>
					<ReplyIcon />
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-9 items-center justify-center border-r border-grey`}
					onPress={() => setModalActionVisible(true)}>
					<MoreVertical width={36} height={18} />
				</TouchableOpacity>
			</View>

			<TouchableOpacity
				style={tw`flex-row items-start justify-between mb-3 pb-1 ${isReply ? 'pl-10' : 'pl-0'} z-5 w-full`}
				onPress={() => onPressMessage(id)}
				onLongPress={() => setModalActionVisible(true)}
				activeOpacity={0.9}>
				<AvatarItem firstName='Name' lastName='Surname' size='small' src='' id={123123} />
				<View style={tw`ml-4 w-90% relative`}>
					<View style={tw`flex-row items-center justify-between ${isReply ? 'mb-0' : 'mb-2'}`}>
						<View style={tw`flex-row items-center w-60%`}>
							<Text style={tw`text-sm text-[#898989] font-bold mr-2`}>Name Surname</Text>
							<View style={tw`pl-1 border-l border-[#F2EDED] mr-1`}>
								<Text style={tw`text-[9px] text-[#C4C4C4]`}> 5:35 PM</Text>
							</View>
							{!isReply ? <DoubleCheckIcon /> : null}
						</View>
					</View>
					<Text style={tw`text-sm w-90% text-darkGrey`}>
						{textMessage ||
							'Morbi lorem enim tortor mauris ut a sed quis aliquam. Ac elit gravida luctus proin arcu, a. Mauris, lectus ultricies suspendisse dapibus id purus. Et leo tortor lorem'}
					</Text>
					{isMedia ? (
						<View>
							<View style={tw`flex-row items-start flex-wrap`}>
								<View style={tw`mx-1 relative`}>
									<Image source={require('../../images/img.jpg')} style={tw`w-12 h-12`} />
									<Text ellipsizeMode='tail'>Name </Text>
								</View>
								<View style={tw`mx-1 relative`}>
									<Image source={require('../../images/img.jpg')} style={tw`w-12 h-12`} />
									<Text ellipsizeMode='tail'>Name </Text>
								</View>
								<View style={tw`mx-1 relative`}>
									<Image source={require('../../images/img.jpg')} style={tw`w-12 h-12`} />
									<Text ellipsizeMode='tail'>Name </Text>
								</View>
							</View>
							<View style={tw`flex-row items-start flex-wrap`}>
								<View style={tw`mx-1 relative`}>
									<Image source={require('../../images/img.jpg')} style={tw`w-12 h-12`} />
									<Text ellipsizeMode='tail'>Name </Text>
								</View>
								<View style={tw`mx-1 relative`}>
									<Image source={require('../../images/img.jpg')} style={tw`w-12 h-12`} />
									<Text ellipsizeMode='tail'>Name </Text>
								</View>
							</View>
						</View>
					) : null}
				</View>
			</TouchableOpacity>
		</View>
	);
};
