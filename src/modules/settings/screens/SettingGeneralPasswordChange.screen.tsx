import * as React from 'react';
import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormControl } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, SafeAreaView, Text, View } from 'react-native';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import * as Yup from 'yup';

import { tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../actions/common.actions';
import { getProfileSettings, putUpdatePassword } from '../../../actions/setting.actions';
import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { BottomButtons } from '../../../shared/components/atoms/BottomButtons/BottomButtons.component';
import { InputPassword } from '../../../shared/components/atoms/inputs/Input/InputPassword.component';
import { TemplateContainer } from '../../../shared/components/templates/Template.container';
import { TemplateContainerKeyboard } from '../../../shared/components/templates/TemplateKeyboard.container';
import { useAppDispatch } from '../../../store/configureStore';
import { ITypePassword } from '../../../types/settingsTypes';
import { SettingRoute } from '../enums/SettingRoute.enum';

interface IProps {
	modalVisible: boolean;
	onCloseModal: () => void | Promise<void>;
}
type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const SettingGeneralPasswordChange: React.FC<IProps> = () => {
	const navigation = useNavigation<navigationStack>();
	const dispatch = useAppDispatch();

	const [err, setErr] = useState(null);

	const validationSchema = Yup.object().shape({
		current_password: Yup.string(),
		password: Yup.string(),
		password_confirmation: Yup.string(),
	});

	const { control, handleSubmit } = useForm<ITypePassword>({
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = async (data: ITypePassword) => {
		Keyboard.dismiss();
		await dispatch(
			dispatchWithLoader(async () => {
				const res = await dispatch(putUpdatePassword({ data })).unwrap();
				if (!res.success) {
					setErr(res.data.result.errors);
					return;
				}
				setErr(null);
				await dispatch(getProfileSettings());
				navigation.push(SettingRoute.Setting);
			}),
		);
	};

	return (
		<SafeAreaView>
			<TemplateContainerKeyboard>
				<View style={tw`w-full h-full bg-greyBg relative`}>
					<View style={tw`bg-red/20 p-2`}>
						<Text style={tw`text-red text-center text-xs`}>EDIT MODE</Text>
					</View>
					<View style={tw`py-2 flex flex-row items-center mb-6 px-3 pb-3 shadow bg-white`}>
						<ButtonNavigation type='back' onPress={() => navigation.navigate(SettingRoute.Setting)} />
						<Text style={tw`ml-4 font-bold text-xl`}>Change Password</Text>
					</View>
					<TemplateContainer>
						<View style={tw`mb-2`}>
							<View style={tw`pb-2 w-full`}>
								<Text style={tw`font-bold text-sm`}>Password</Text>
							</View>
							<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs -mt-2`}>
								----------------------------------------------------------------------------------------------------------------------------------------
							</Text>
						</View>

						<FormControl isRequired style={tw`mb-1`}>
							<Controller
								control={control}
								name='current_password'
								rules={{
									required: true,
								}}
								render={({ field: { onChange, value } }) => (
									<InputPassword
										onChange={onChange}
										value={value}
										labelValue='Password'
										errorMessage={err?.current_password}
									/>
								)}
							/>
							{/*<FormControl.ErrorMessage>{errors.login?.message}</FormControl.ErrorMessage>*/}
						</FormControl>

						<FormControl isRequired style={tw`mb-1`}>
							<Controller
								control={control}
								name='password'
								rules={{
									required: true,
								}}
								render={({ field: { onChange, value } }) => (
									<InputPassword
										onChange={onChange}
										value={value}
										labelValue='new Password'
										errorMessage={err?.password}
									/>
								)}
							/>
						</FormControl>

						<FormControl isRequired style={tw`mb-1`}>
							<Controller
								control={control}
								name='password_confirmation'
								rules={{
									required: true,
								}}
								render={({ field: { onChange, value } }) => (
									<InputPassword
										onChange={onChange}
										value={value}
										labelValue='confirm new Password'
										errorMessage={err?.password_confirmation}
									/>
								)}
							/>
						</FormControl>
					</TemplateContainer>
				</View>
			</TemplateContainerKeyboard>

			<BottomButtons
				leftButton={
					<DefaultButton
						title='Cancel'
						variant='outlined'
						size='md'
						onPress={() => navigation.navigate(SettingRoute.Setting)}
					/>
				}
				rightButton={
					<DefaultButton title='Save' variant='contained' size='md' onPress={handleSubmit(onSubmit)} />
				}
			/>
		</SafeAreaView>
	);
};
