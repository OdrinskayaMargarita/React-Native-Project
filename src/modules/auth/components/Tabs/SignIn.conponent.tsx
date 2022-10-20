import * as React from 'react';
import { useCallback, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormControl } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Keyboard, View, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import * as Yup from 'yup';

import { tw } from '@lib/tailwind';

import { loginUserAction } from '../../../../actions/auth.actions';
import { dispatchWithLoader } from '../../../../actions/common.actions';
import { getUserNotes } from '../../../../actions/notes.actions';
import { getProfileData } from '../../../../actions/profile.actions';
import { getProfileSettings, postMailCode, postVerificationMailResend } from '../../../../actions/setting.actions';
import { RootStackParamList } from '../../../../navigations/rootStackParams.interface';
import { secureStorage } from '../../../../services/secure-storage';
import { DefaultButton } from '../../../../shared/components/atoms/buttons/Button/Button.component';
import { useAppDispatch } from '../../../../store/configureStore';
import { PlannerRoute } from '../../../planner/enums/plannerRoute.enum';
import { ButtonLogin } from '../atoms/ButtonLogin.component';
import { LoginInput } from '../atoms/LoginInput.component';
import { LoginInputPassword } from '../atoms/PasswordInput.component';
import { ModalLoginEmail } from '../ModalTwoFactorEmail.component';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

interface IProps {
	setTitle: (title: string) => void | Promise<void>;
}

export const SignIn: React.FC<IProps> = ({ setTitle }) => {
	const [deviceToken, setDeviceToken] = useState('');
	const [isSignInEmail, setIsSignInEmail] = useState<boolean>(false);
	const [modal, setModal] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const navigation = useNavigation<navigationStack>();

	useFocusEffect(
		useCallback(() => {
			let isApiSubscribed = true;
			setTitle('Sign In');
			DeviceInfo.getUniqueId().then(uniqueId => {
				if (isApiSubscribed) setDeviceToken(uniqueId);
			});
			return () => {
				isApiSubscribed = false;
			};
		}, []),
	);

	const validationSchema = Yup.object().shape({
		login: Yup.string()
			.required(t('auth.login.form.login.validation.required'))
			.email(t('auth.login.form.login.validation.email')),
		password: Yup.string()
			.required(t('auth.login.form.password.validation.required'))
			.min(6, t('auth.login.form.password.validation.min'))
			.max(20, t('auth.login.form.password.validation.max')),
	});

	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<{ login: string; password: string }>({
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = async (data: { login: string; password: string }) => {
		Keyboard.dismiss();
		await dispatch(
			dispatchWithLoader(async () => {
				const result = await dispatch(
					loginUserAction({
						data: {
							...data,
							device_token: deviceToken,
						},
					}),
				).unwrap();

				if (result?.data?.result?.data?.two_factor_stage) {
					await dispatch(postVerificationMailResend({ login: data.login }));
					setModal(true);
					return;
				}

				if (result.success) {
					const a = await dispatch(getProfileData()).unwrap();
					if (a.success) await dispatch(getUserNotes({ userId: a.data.id }));
					await dispatch(getProfileSettings());
				}

				await secureStorage.setUserToken(result.data.token);
				navigation.navigate(PlannerRoute.list);
			}),
		);
	};

	const onMailVerify = async (data: any) => {
		const login = getValues().login;
		await dispatch(
			dispatchWithLoader(async () => {
				setModal(false);
				const res = await dispatch(
					postMailCode({ device_token: deviceToken, login, token: data.token }),
				).unwrap();
				if (!res.success) throw res.statusText;
				handleSubmit(onSubmit);
			}),
		);
	};

	return (
		<View style={tw`h-full bg-white`}>
			<ModalLoginEmail isVisible={modal} close={() => setModal(false)} onSubmit={onMailVerify} />
			{!isSignInEmail ? (
				<View style={tw`pt-10`}>
					<ButtonLogin type='facebook' onPress={() => console.log('123')} />
					<ButtonLogin type='google' onPress={() => console.log('123')} />
					<ButtonLogin type='apple' onPress={() => console.log('123')} />
					<View style={tw`flex-row items-center justify-between`}>
						<View style={tw`w-full border-b border-lightGrey w-35%`} />
						<Text style={tw`text-darkGrey uppercase text-base`}>Or</Text>
						<View style={tw`w-full border-b border-lightGrey w-35%`} />
					</View>
					<ButtonLogin type='email' onPress={() => setIsSignInEmail(true)} />
				</View>
			) : (
				<View style={tw`pt-10 pb-10`}>
					<FormControl isRequired isInvalid={'login' in errors} style={tw`mb-6`}>
						<Controller
							control={control}
							name='login'
							rules={{
								required: true,
							}}
							render={({ field: { onChange, value } }) => (
								<LoginInput onChange={onChange} value={value} />
							)}
						/>
						<FormControl.ErrorMessage>{errors.login?.message}</FormControl.ErrorMessage>
					</FormControl>
					<FormControl isRequired isInvalid={'password' in errors} style={tw`mb-5`}>
						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, value } }) => (
								<LoginInputPassword onChange={onChange} value={value} />
							)}
							name='password'
						/>
						<FormControl.ErrorMessage>{errors.password?.message}</FormControl.ErrorMessage>
					</FormControl>
					<DefaultButton title='Sign In' onPress={handleSubmit(onSubmit)} size='md' />
				</View>
			)}
		</View>
	);
};
