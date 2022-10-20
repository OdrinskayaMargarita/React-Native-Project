import * as React from 'react';
import { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { FormControl } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
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
import { postMailCode } from '../../../../actions/setting.actions';
import { DefaultButton } from '../../../../shared/components/atoms/buttons/Button/Button.component';
import { InputComponent } from '../../../../shared/components/atoms/inputs/Input/Input.component';
import { useAppDispatch, useAppSelector } from '../../../../store/configureStore';

import { ModalTwoFactorSuccess } from './ModalTwoFactorSuccess.component';

interface IProps {
	isVisible: boolean;
	onOverlayTap?: () => void | Promise<void>;
	close: () => void | Promise<void>;
}

export const ModalTwoFactorPhone: React.FC<IProps> = ({ isVisible, onOverlayTap, close }) => {
	const { userSettingGeneral } = useAppSelector(state => state.settings);
	const [deviceToken, setDeviceToken] = useState('');
	const [isVisibleModalTwoFactorSuccess, setIsVisibleModalTwoFactorSuccess] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	useEffect(() => {
		DeviceInfo.getUniqueId().then(uniqueId => setDeviceToken(uniqueId));
	}, []);

	const validationSchema = Yup.object().shape({
		token: Yup.string(),
	});

	const { control, handleSubmit } = useForm({
		defaultValues: {
			token: '',
		},
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = async (data: { token: string }) => {
		console.log(data);
		Keyboard.dismiss();

		const login = userSettingGeneral.email;
		await dispatch(
			dispatchWithLoader(async () => {
				const res = await dispatch(
					postMailCode({ device_token: deviceToken, login, token: data.token }),
				).unwrap();
				if (!res.success) throw res.statusText;
				close();
				setIsVisibleModalTwoFactorSuccess(true);
			}),
		);
	};

	return (
		<SafeAreaView>
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
									<View style={tw`mb-11`}>
										<Text style={tw`font-bold text-xl mb-4`}>Enable two-factor authentication</Text>
										<Text style={tw`text-[13px] mb-4 leading-4`}>
											We send a security code to
											<Text style={tw`font-bold`}> {userSettingGeneral.phone}</Text> Please, enter
											it below to verify your phone number
										</Text>
										<FormControl style={tw``}>
											<Controller
												control={control}
												name='token'
												rules={{
													required: true,
												}}
												render={({ field: { onChange, value } }) => (
													<InputComponent
														onChange={onChange}
														value={value}
														labelValue='security Code'
														bgColor='bg-white'
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
