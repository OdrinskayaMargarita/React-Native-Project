import * as React from 'react';

import { Modal, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';

import { tw } from '@lib/tailwind';

interface IProps {
	modalVisible: boolean;
	onCloseModal: any;
	children: JSX.Element | JSX.Element[];
	title: string;
	variantButton?: 'contained' | 'outlined';
	titleButton?: string;
	colorButton?: 'primary' | 'secondary';
	onPressButton?: () => void | Promise<void>;
}

export const ModalHub: React.FC<IProps> = ({
	modalVisible,
	onCloseModal,
	children,
	title,
	titleButton,
	variantButton,
	colorButton,
	onPressButton,
}) => {
	return (
		<Modal animationType='slide' transparent={true} visible={modalVisible} style={tw`z-50 relative`}>
			<SafeAreaView style={tw`relative w-full h-full`}>
				<ScrollView style={tw`w-full h-full bg-greyBg relative`}>
					<View style={tw`py-2 px-5 flex flex-row items-center mb-4`}>
						<ButtonNavigation type='back' onPress={() => onCloseModal(!modalVisible)} />
						<Text style={tw`ml-4 font-bold text-xl`}>{title}</Text>
					</View>
					<View>{children}</View>
				</ScrollView>
				<View
					style={tw`items-center justify-center p-3 border-t border-grey absolute bottom-0 left-0 w-full bg-[#FFFFFF]`}>
					<DefaultButton
						variant={variantButton || 'contained'}
						title={titleButton || 'Activate'}
						size='md'
						color={colorButton}
						onPress={onPressButton}
					/>
				</View>
			</SafeAreaView>
		</Modal>
	);
};
