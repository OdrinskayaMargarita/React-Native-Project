import * as React from 'react';

import { View, Modal, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Platform, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { DefaultButton } from '../../../../shared/components/atoms/buttons/Button/Button.component';

interface IProps {
	isVisible: boolean;
	onOverlayTap?: () => void | Promise<void>;
	close: () => void | Promise<void>;
}

export const ModalTwoFactorSuccess: React.FC<IProps> = ({ isVisible, onOverlayTap, close }) => {
	return (
		<SafeAreaView>
			<Modal animationType='fade' transparent={true} visible={isVisible}>
				<View style={tw`${Platform.OS === 'ios' ? 'pt-10' : 'pt-0'}`}>
					<TouchableOpacity
						activeOpacity={1}
						onPressOut={onOverlayTap}
						style={tw`flex h-full justify-center items-start relative`}>
						<View style={tw`w-full h-full bg-black absolute opacity-40`} />
						<TouchableWithoutFeedback>
							<View style={tw`items-center justify-center h-full w-full`}>
								<View style={tw`flex w-95% bg-white items-center justify-center rounded-md p-4 pb-5`}>
									<View style={tw`mb-5`}>
										<Text style={tw`font-bold text-xl mb-4`}>Enable two-factor authentication</Text>
										<Text>
											From now on, when you sign in to the hubmee from a new device or browser,
											you’ll need to enter a security code from your phone (email).
										</Text>
									</View>
									<View style={tw`flex-row items-center justify-center w-full`}>
										<View style={tw`w-38%`}>
											<DefaultButton title='Done' size='md' variant='contained' onPress={close} />
										</View>
									</View>
								</View>
							</View>
						</TouchableWithoutFeedback>
					</TouchableOpacity>
				</View>
			</Modal>
		</SafeAreaView>
	);
};
