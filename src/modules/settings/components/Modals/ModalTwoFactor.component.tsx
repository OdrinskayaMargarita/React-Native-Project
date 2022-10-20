import * as React from 'react';
import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import { View, Modal, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Platform, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../../actions/common.actions';
import { getProfileSettings, postVerificationMailResend, putTwoFactorAuth } from '../../../../actions/setting.actions';
import { DefaultButton } from '../../../../shared/components/atoms/buttons/Button/Button.component';
import { useAppDispatch, useAppSelector } from '../../../../store/configureStore';

import { ModalTwoFactorEmail } from './ModalTwoFactorEmail.component';
import { ModalTwoFactorPhone } from './ModalTwoFactorPhone.component';
import { ModalTwoFactorSuccess } from './ModalTwoFactorSuccess.component';

interface IProps {
	isVisible: boolean;
	onOverlayTap?: () => void | Promise<void>;
	close: () => void | Promise<void>;
	pass?: string;
}

export const ModalTwoFactor: React.FC<IProps> = ({ isVisible, onOverlayTap, close, pass }) => {
	const { userSettingGeneral } = useAppSelector(state => state.settings);
	const dispatch = useAppDispatch();
	const [activeValue, setActiveValue] = useState<string>(userSettingGeneral.phone ? 'phone' : 'email');
	const [isVisibleModalTwoFactorEmail, setIsVisibleModalTwoFactorEmail] = useState<boolean>(false);
	const [isVisibleModalTwoFactorPhone, setIsVisibleModalTwoFactorPhone] = useState<boolean>(false);
	const [isVisibleModalTwoFactorSuccess, setIsVisibleModalTwoFactorSuccess] = useState<boolean>(false);
	const [deviceToken, setDeviceToken] = useState('');

	useFocusEffect(
		useCallback(() => {
			DeviceInfo.getUniqueId().then(uniqueId => {
				setDeviceToken(uniqueId);
			});
		}, []),
	);

	const listRadio = [
		{
			child: (
				<Text style={tw`mt-4 mb-6`}>
					We'll send the security code to your phone number
					<Text style={tw`font-bold`}> {userSettingGeneral.phone}</Text>
				</Text>
			),
			key: 'phone',
			title: 'Use text messages',
		},
		{
			child: (
				<Text style={tw`mt-4 mb-6`}>
					We'll send the security code to your email
					<Text style={tw`font-bold`}> {userSettingGeneral.email}</Text>
				</Text>
			),
			key: 'email',
			title: 'Use email',
		},
	];

	const checkTypeTwoFactor = () => {
		if (
			(userSettingGeneral.email && activeValue === 'email') ||
			(userSettingGeneral.phone && activeValue === 'phone')
		) {
			dispatch(
				dispatchWithLoader(async () => {
					const resTwoFactor = await dispatch(
						putTwoFactorAuth({ device_token: deviceToken, password: pass, two_factor_stage: activeValue }),
					).unwrap();
					console.log(resTwoFactor);
					if (!resTwoFactor.success) throw resTwoFactor.statusText;
					close();
					await dispatch(getProfileSettings);
					setIsVisibleModalTwoFactorSuccess(true);
				}),
			);
		} else if (activeValue === 'phone' && !userSettingGeneral.phone) {
			close();
			setIsVisibleModalTwoFactorPhone(true);
			dispatch(
				dispatchWithLoader(async () => {
					await dispatch(postVerificationMailResend({ login: userSettingGeneral.email }));
				}),
			);
		} else if (activeValue === 'email' && !userSettingGeneral.email) {
			close();
			setIsVisibleModalTwoFactorPhone(true);
			dispatch(
				dispatchWithLoader(async () => {
					await dispatch(postVerificationMailResend({ login: userSettingGeneral.email }));
				}),
			);
		}
	};

	return (
		<SafeAreaView>
			<ModalTwoFactorEmail
				isVisible={isVisibleModalTwoFactorEmail}
				close={() => setIsVisibleModalTwoFactorEmail(false)}
			/>
			<ModalTwoFactorPhone
				isVisible={isVisibleModalTwoFactorPhone}
				close={() => setIsVisibleModalTwoFactorPhone(false)}
			/>
			<ModalTwoFactorSuccess
				isVisible={isVisibleModalTwoFactorSuccess}
				close={() => setIsVisibleModalTwoFactorSuccess(false)}
			/>
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
										{listRadio.map((res, key) => (
											<View key={key}>
												<View key={res.key} style={tw`flex-row items-center`}>
													<TouchableOpacity
														style={tw`rounded-full w-5 h-5 items-center justify-center bg-[#F3F3F3]`}
														onPress={() => setActiveValue(res.key)}>
														{activeValue === res.key && (
															<View style={tw`bg-greenInput w-3 h-3 rounded-full`} />
														)}
													</TouchableOpacity>
													<Text style={tw`text-[13px] ml-1 `}>{res.title}</Text>
												</View>
												<View>{res.child ? <View>{res.child}</View> : null}</View>
											</View>
										))}
									</View>
									<View style={tw`flex-row items-center justify-center w-full`}>
										<View style={tw`w-38% mr-5`}>
											<DefaultButton
												title='Cancel'
												size='md'
												variant='outlined'
												onPress={close}
											/>
										</View>
										<View style={tw`w-38%`}>
											<DefaultButton
												title='Confirm'
												size='md'
												variant='contained'
												onPress={checkTypeTwoFactor}
											/>
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
