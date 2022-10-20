import * as React from 'react';
import { useCallback, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormControl } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
	View,
	Modal,
	SafeAreaView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Platform,
	Text,
	Keyboard,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import * as Yup from 'yup';

import { tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../../actions/common.actions';
import { delAccount } from '../../../../actions/setting.actions';
import { RootStackParamList } from '../../../../navigations/rootStackParams.interface';
import { DefaultButton } from '../../../../shared/components/atoms/buttons/Button/Button.component';
import { InputPassword } from '../../../../shared/components/atoms/inputs/Input/InputPassword.component';
import { useAppDispatch, useAppSelector } from '../../../../store/configureStore';
import { AuthRoute } from '../../../auth/enums/authRoute.enum';

interface IProps {
	isVisible: boolean;
	onOverlayTap?: () => void | Promise<void>;
	close: () => void | Promise<void>;
}
type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const ModalTwoFactorDeactivate: React.FC<IProps> = ({ isVisible, onOverlayTap, close }) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const [deviceToken, setDeviceToken] = useState('');
	const navigation = useNavigation<navigationStack>();
	const { userSettingGeneral } = useAppSelector(state => state.settings);

	useFocusEffect(
		useCallback(() => {
			DeviceInfo.getUniqueId().then(uniqueId => {
				setDeviceToken(uniqueId);
			});
		}, []),
	);

	const validationSchema = Yup.object().shape({
		password: Yup.string()
			.required(t('auth.login.form.password.validation.required'))
			.min(6, t('auth.login.form.password.validation.min'))
			.max(20, t('auth.login.form.password.validation.max')),
	});

	const { control, handleSubmit } = useForm({
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = async (data: any) => {
		console.log(data);
		Keyboard.dismiss();
		const login = userSettingGeneral.email;
		await dispatch(
			dispatchWithLoader(async () => {
				const res = await dispatch(
					delAccount({ device_token: deviceToken, login, password: data.password }),
				).unwrap();
				if (!res.success) throw res.statusText;
				close();
				navigation.navigate(AuthRoute.login);
			}),
		);
		// dispatch(putUpdateContacts({ callback: () => navigation.navigate(ProfileRoute.Profile), data }));
	};

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
										<Text style={tw`font-bold text-xl mb-4`}>
											Disable two-factor authentication
										</Text>
										<Text style={tw`mb-4 text-[13px] leading-4`}>
											You will no longer receive a verification code if we notice an attempted
											login from a device or browser we don't recognize. For your security, you
											must re-enter your password to continue.
										</Text>
										<FormControl style={tw``}>
											<Controller
												control={control}
												name='password'
												rules={{
													required: true,
												}}
												render={({ field: { onChange, value = '' } }) => (
													<InputPassword
														onChange={onChange}
														value={value}
														labelValue='Password'
													/>
												)}
											/>
										</FormControl>
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
												onPress={handleSubmit(onSubmit)}
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
