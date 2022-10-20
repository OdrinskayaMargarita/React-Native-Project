import * as React from 'react';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, TouchableOpacity, View, Text, ScrollView } from 'react-native';

import { tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { AvatarItem } from '../../../shared/components/atoms/Avatar/Avatar.component';
import { ButtonNavigation } from '../../../shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { ProfileRoute } from '../../profile/enums/profileRoute.enum';
import { ChatInput } from '../components/ChatInput.component';
import { MessageDateComponent } from '../components/Message/MessageDate.component';
import { MessageItemComponent } from '../components/Message/MessageItem.component';
import { ModalAction } from '../components/ModalAction.component';
import { ChatRoute } from '../enums/ChatRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const ChatItemPersonal = () => {
	const navigation = useNavigation<navigationStack>();
	const [activeMessageId, setActiveMessageId] = useState<number | null>(null);
	const [isEditMessage, setIsEditMessage] = useState<boolean>(false);
	const [modalActionVisible, setModalActionVisible] = useState(false);

	return (
		<SafeAreaView>
			<View style={tw`h-full relative pb-18 bg-greyBg`}>
				<View style={tw`pt-2 px-3 flex-row items-center bg-white pb-2 shadow`}>
					<ButtonNavigation type='back' onPress={() => navigation.navigate(ChatRoute.ChatMain)} />
					<TouchableOpacity
						style={tw`ml-4 flex-row items-center`}
						onPress={() => navigation.navigate(ProfileRoute.Profile)}>
						<AvatarItem
							firstName='Kyrylo'
							lastName='Sotnykov'
							size='small'
							src=''
							id={123123}
							isOnline={true}
						/>
						<View style={tw`ml-2`}>
							<Text style={tw`text-sm font-bold`}>Kyryllo Sotnykov</Text>
							<Text style={tw`text-grey text-[13px]`}>Friend</Text>
						</View>
					</TouchableOpacity>
				</View>
				<ScrollView contentOffset={{ x: 0, y: 6000 }} style={tw`bg-greyBg`}>
					<ModalAction
						modalVisible={modalActionVisible}
						onCloseModal={() => setModalActionVisible(false)}
						onPressEdit={() => setIsEditMessage(true)}
					/>
					<View style={tw`px-3 pb-10 bg-greyBg pt-3`}>
						<MessageItemComponent
							setModalActionVisible={setModalActionVisible}
							id={1}
							activeMessageId={activeMessageId}
							setActiveMessageId={setActiveMessageId}
						/>
						<MessageDateComponent />
						<MessageItemComponent
							setModalActionVisible={setModalActionVisible}
							id={3}
							activeMessageId={activeMessageId}
							setActiveMessageId={setActiveMessageId}
						/>
						<MessageItemComponent
							setModalActionVisible={setModalActionVisible}
							id={4}
							activeMessageId={activeMessageId}
							setActiveMessageId={setActiveMessageId}
						/>
						<MessageItemComponent
							setModalActionVisible={setModalActionVisible}
							id={5}
							activeMessageId={activeMessageId}
							setActiveMessageId={setActiveMessageId}
						/>
						<MessageDateComponent />
						<MessageItemComponent
							setModalActionVisible={setModalActionVisible}
							id={7}
							activeMessageId={activeMessageId}
							setActiveMessageId={setActiveMessageId}
						/>
						<MessageItemComponent
							setModalActionVisible={setModalActionVisible}
							id={8}
							activeMessageId={activeMessageId}
							setActiveMessageId={setActiveMessageId}
						/>
						<MessageItemComponent
							setModalActionVisible={setModalActionVisible}
							id={9}
							activeMessageId={activeMessageId}
							setActiveMessageId={setActiveMessageId}
						/>
						<MessageDateComponent />
						<MessageItemComponent
							setModalActionVisible={setModalActionVisible}
							id={11}
							activeMessageId={activeMessageId}
							setActiveMessageId={setActiveMessageId}
						/>
						<MessageItemComponent
							setModalActionVisible={setModalActionVisible}
							id={12}
							activeMessageId={activeMessageId}
							setActiveMessageId={setActiveMessageId}
						/>
						<MessageDateComponent />
						<MessageItemComponent
							setModalActionVisible={setModalActionVisible}
							id={14}
							activeMessageId={activeMessageId}
							setActiveMessageId={setActiveMessageId}
						/>
						<MessageItemComponent
							setModalActionVisible={setModalActionVisible}
							id={15}
							activeMessageId={activeMessageId}
							setActiveMessageId={setActiveMessageId}
							isMedia={true}
						/>
					</View>
				</ScrollView>
			</View>
			<ChatInput isEditMessage={isEditMessage} setIsEditMessage={() => setIsEditMessage(false)} />
		</SafeAreaView>
	);
};
