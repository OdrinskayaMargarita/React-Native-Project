import * as React from 'react';

import { View, Modal, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Platform, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { ButtonNavigation } from '../../../shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { UploadPhoto } from '../../../shared/components/icons/uploadPhoto.icon';
import { IUserAvatar } from '../../../types/profileTypes';

interface IProps {
	isVisible: boolean;
	onOverlayTap?: () => void | Promise<void>;
	close: () => void | Promise<void>;
	avatar: null | IUserAvatar;
}

export const ModalAvatar: React.FC<IProps> = ({ isVisible, onOverlayTap, close, avatar }) => {
	return (
		<SafeAreaView>
			<Modal animationType='fade' transparent={true} visible={isVisible}>
				<View style={tw`${Platform.OS === 'ios' ? 'pt-10' : 'pt-0'}`}>
					<TouchableOpacity
						activeOpacity={1}
						onPressOut={onOverlayTap}
						style={tw`flex h-full justify-center items-start relative`}>
						<View style={tw`w-full h-full bg-black absolute opacity-40`} />
						<View style={tw`absolute right-5 top-5`}>
							<ButtonNavigation type={'close'} onPress={close} />
						</View>
						<TouchableWithoutFeedback>
							<View style={tw`w-full h-full items-center justify-center`}>
								<View style={tw`w-95% h-50% bg-white shadow rounded-md p-4`}>
									{/*{avatar === null ? (*/}
									<View>
										<Text style={tw`text-xl font-bold text-center mb-10`}>
											Select your profile photo
										</Text>
										<View style={tw`items-center justify-around`}>
											<TouchableOpacity style={tw`items-center mb-12`}>
												<UploadPhoto />
												<Text style={tw`mt-2 text-sm`}>Upload Local File</Text>
											</TouchableOpacity>
											<TouchableOpacity style={tw`items-center`}>
												<UploadPhoto />
												<Text style={tw`mt-2 text-sm`}>Take from Cam</Text>
											</TouchableOpacity>
										</View>
									</View>
									{/*) : (*/}
									{/*	<View>*/}
									{/*		<Text>Change</Text>*/}
									{/*	</View>*/}
									{/*)}*/}
								</View>
							</View>
						</TouchableWithoutFeedback>
					</TouchableOpacity>
				</View>
			</Modal>
		</SafeAreaView>
	);
};
