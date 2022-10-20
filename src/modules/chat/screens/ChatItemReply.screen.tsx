import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { ButtonNavigation } from '../../../shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { TemplateContainerScroll } from '../../../shared/components/templates/Template.container-scroll';
import { ChatInput } from '../components/ChatInput.component';
import { MessageItemComponent } from '../components/Message/MessageItem.component';
import { ChatRoute } from '../enums/ChatRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const ChatItemReply = () => {
	const navigation = useNavigation<navigationStack>();

	return (
		<SafeAreaView>
			<View style={tw`h-full`}>
				<View style={tw`flex flex-row items-center mb-4 pt-3 px-3`}>
					<ButtonNavigation type='back' onPress={() => navigation.navigate(ChatRoute.ChatItemPersonal)} />
					<Text style={tw`ml-4 font-bold text-xl`}>General Settings</Text>
				</View>
				<View style={tw`px-3`}>
					<MessageItemComponent isMainReply={true} id={234} />
				</View>
				<TemplateContainerScroll>
					<View style={tw`relative`}>
						<MessageItemComponent isReply={true} textMessage='Okay' id={235} />
						<MessageItemComponent
							isReply={true}
							textMessage='Morbi lorem enim tortor mauris ut a sed quis aliquam. Ac elit '
							id={236}
						/>
						<MessageItemComponent isReply={true} id={237} />
					</View>
				</TemplateContainerScroll>
				<ChatInput />
			</View>
		</SafeAreaView>
	);
};
