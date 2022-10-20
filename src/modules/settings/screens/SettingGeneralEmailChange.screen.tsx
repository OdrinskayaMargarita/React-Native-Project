import * as React from 'react';
import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormControl } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard, SafeAreaView, Text, View } from 'react-native';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { InputPhone } from 'src/shared/components/atoms/inputs/PhoneInput/PhoneInput.component';
import { TextItem } from 'src/shared/components/atoms/TextItem/TextItem.component';
import * as Yup from 'yup';

import { tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../actions/common.actions';
import { getProfileSettings, putUpdateLoginData } from '../../../actions/setting.actions';
import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { BottomButtons } from '../../../shared/components/atoms/BottomButtons/BottomButtons.component';
import { InputComponent } from '../../../shared/components/atoms/inputs/Input/Input.component';
import { TemplateContainer } from '../../../shared/components/templates/Template.container';
import { TemplateContainerKeyboard } from '../../../shared/components/templates/TemplateKeyboard.container';
import { useAppDispatch, useAppSelector } from '../../../store/configureStore';
import { ITypeLoginData } from '../../../types/settingsTypes';
import { SettingRoute } from '../enums/SettingRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const SettingGeneralEmailChange = () => {
	const navigation = useNavigation<navigationStack>();
	const dispatch = useAppDispatch();
	const { userSettingGeneral } = useAppSelector(state => state.settings);
	const [err, setErr] = useState(null);

	const validationSchema = Yup.object().shape({
		country: Yup.string().nullable(),
		current_email: Yup.string().nullable(),
		current_phone: Yup.string().nullable(),
		email: Yup.string().nullable(),
		phone: Yup.string().nullable(),
	});

	const { control, handleSubmit } = useForm<ITypeLoginData>({
		defaultValues: {
			country: null,
			current_email: userSettingGeneral?.email,
			current_phone: userSettingGeneral?.phone,
			email: userSettingGeneral.unverified_login.email,
			phone: userSettingGeneral.unverified_login.phone,
		},
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = async (data: ITypeLoginData) => {
		Keyboard.dismiss();
		await dispatch(
			dispatchWithLoader(async () => {
				const res = await dispatch(putUpdateLoginData({ data })).unwrap();
				console.log(res.data.result.errors);
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
					<View style={tw`flex flex-row items-center mb-4 pt-3 px-3 shadow bg-white pb-3`}>
						<ButtonNavigation type='back' onPress={() => navigation.navigate(SettingRoute.Setting)} />
						<Text style={tw`ml-4 font-bold text-xl`}>General Settings</Text>
					</View>
					<TemplateContainer>
						<View style={tw`mb-4`}>
							<View style={tw` pb-2 w-full`}>
								<Text style={tw`font-bold text-sm`}>Current Email/Phone</Text>
							</View>
							<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs -mt-2`}>
								----------------------------------------------------------------------------------------------------------------------------------------
							</Text>
						</View>
						<View style={tw`mb-5`}>
							<TextItem typeInput='email' valueInput={userSettingGeneral?.email} />
							<TextItem isPhone={true} typeInput='Phone ' valueInput={userSettingGeneral?.phone} />
						</View>
						<View style={tw`mb-2`}>
							<View style={tw`pb-2 w-full `}>
								<Text style={tw`font-bold text-sm`}>New Email/Phone</Text>
							</View>
							<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs -mt-2`}>
								--------------------------------------------------------------------
								--------------------------------------------------------------------
							</Text>
						</View>
						<View style={tw`mb-2`}>
							<FormControl>
								<Controller
									control={control}
									name='email'
									render={({ field: { onChange, value } }) => (
										<InputComponent
											onChange={onChange}
											placeholder={'Enter your new email ...'}
											value={value}
											labelValue='NEW EMAIL'
											styleContainer='mb-5'
											errorMessage={err?.email}
										/>
									)}
								/>
							</FormControl>
							<FormControl>
								<Controller
									control={control}
									name='phone'
									render={({ field: { onChange, value } }) => (
										<InputPhone onChange={onChange} value={value} errorMessage={err?.phone} />
									)}
								/>
							</FormControl>
						</View>
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
