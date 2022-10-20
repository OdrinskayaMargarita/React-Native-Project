import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Modal, SafeAreaView } from 'react-native';

import { tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { ChatRoute } from '../enums/ChatRoute.enum';

import { ActionButton } from './ActionButton.component';

interface IProps {
	modalVisible: boolean;
	onPressEdit: any;
	onCloseModal: any;
}
type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const ModalAction: React.FC<IProps> = ({ modalVisible, onCloseModal, onPressEdit }) => {
	const onPressEditFunc = () => {
		onPressEdit();
		onCloseModal();
	};
	const onPressReplyFunc = () => {
		navigation.navigate(ChatRoute.ChatItemReply);
		onCloseModal();
	};

	const navigation = useNavigation<navigationStack>();

	return (
		<Modal animationType='slide' transparent={true} visible={modalVisible} style={tw`z-50 relative`}>
			<SafeAreaView style={tw`relative w-full h-full bg-black/80 pb-5`}>
				<View style={tw`justify-end px-3 h-full`}>
					<ActionButton
						title='Edit'
						onPress={onPressEditFunc}
						isBorderInner={true}
						styleButton='rounded-t-md'
						styleText='text-greenInput'
					/>
					<ActionButton title='Reply' onPress={onPressReplyFunc} isBorderInner={true} />
					<ActionButton title='Delete Message' onPress={onCloseModal} styleButton='rounded-b-md' />
					<View style={tw`mt-4 w-full`}>
						<ActionButton title='Cancel' onPress={onCloseModal} styleButton='rounded-md' />
					</View>
				</View>
			</SafeAreaView>
		</Modal>
	);
};
