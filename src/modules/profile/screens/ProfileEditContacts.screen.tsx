import * as React from 'react';
import { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormControl } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

import { tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../actions/common.actions';
import { getContactsProfile } from '../../../actions/profile.actions';
import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { BottomButtons } from '../../../shared/components/atoms/BottomButtons/BottomButtons.component';
import { DefaultButton } from '../../../shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from '../../../shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { InputComponent } from '../../../shared/components/atoms/inputs/Input/Input.component';
import { InputPhone } from '../../../shared/components/atoms/inputs/PhoneInput/PhoneInput.component';
import { Select } from '../../../shared/components/atoms/inputs/SelectInput/Select.component';
import { SmallPlusOutlined } from '../../../shared/components/icons/SmallPlusOutlined.icon';
import { TemplateContainer } from '../../../shared/components/templates/Template.container';
import { TemplateContainerKeyboard } from '../../../shared/components/templates/TemplateKeyboard.container';
import { useAppDispatch, useAppSelector } from '../../../store/configureStore';
import { IUserContacts } from '../../../types/profileTypes';
import { ProfileRoute } from '../enums/profileRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const ProfileEditContacts = () => {
	const navigation = useNavigation<navigationStack>();
	const dispatch = useAppDispatch();
	const { userContacts } = useAppSelector(state => state.profile);
	console.log(userContacts);

	useEffect(() => {
		dispatch(
			dispatchWithLoader(async () => {
				dispatch(getContactsProfile());
			}),
		);
	}, [dispatch]);

	const selectDataPhoneType = [
		{
			label: 'personal',
			value: 'personal',
		},
		{
			label: 'work',
			value: 'work',
		},
	];

	const validationSchema = Yup.object().shape({
		birth_day: Yup.string(),
		first_name: Yup.string(),
		gender: Yup.string(),
		last_name: Yup.string(),
		middle_name: Yup.string(),
		relationship: Yup.string(),
	});

	const {
		control,
		handleSubmit,
		// formState: { errors },
	} = useForm<IUserContacts>({
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data: IUserContacts) => {
		console.log(data);
		Keyboard.dismiss();
		// dispatch(putUpdateContacts({ callback: () => navigation.navigate(ProfileRoute.Profile), data }));
	};

	return (
		<SafeAreaView>
			<View style={tw`w-full h-full bg-greyBg relative`}>
				<TemplateContainerKeyboard>
					<View>
						<View style={tw`bg-red/20 p-2`}>
							<Text style={tw`text-red text-center text-xs`}>EDIT MODE</Text>
						</View>
						<View style={tw`flex flex-row items-center mb-4 p-2 bg-white`}>
							<ButtonNavigation type='back' onPress={() => navigation.navigate(ProfileRoute.Profile)} />
							<Text style={tw`ml-4 font-bold text-xl`}>Contacts</Text>
						</View>
						<TemplateContainer>
							<View style={tw`mb-2`}>
								<View style={tw`w-full`}>
									<Text style={tw`font-bold text-sm`}>Phone numbers</Text>
									<Text style={tw`text-xs text-grey`} ellipsizeMode='clip' numberOfLines={1}>
										--------------------------------------------------------------------------------------------------------------
									</Text>
								</View>
							</View>
							{userContacts?.phones.map((item, key) => (
								<View key={key}>
									<FormControl style={tw`mb-2`}>
										<Controller
											control={control}
											name='phone'
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value = item.type } }) => (
												<Select
													selectedVal={value}
													onChange={onChange}
													label={'TYPE'}
													styleLabel='text-sm'
													data={selectDataPhoneType}
													size='sm'
												/>
											)}
										/>
									</FormControl>
									<View style={tw`flex-row items-center justify-between`}>
										<FormControl style={tw`w-92%`}>
											<Controller
												control={control}
												name='phone'
												rules={{
													required: true,
												}}
												render={({ field: { onChange, value = item.value } }) => (
													<InputPhone value={value} onChange={onChange} />
												)}
											/>
										</FormControl>
										<TouchableOpacity>
											<SmallPlusOutlined width={14} height={14} />
										</TouchableOpacity>
									</View>
								</View>
							))}

							<View style={tw`mb-2 mt-7`}>
								<View style={tw`w-full`}>
									<Text style={tw`font-bold text-sm`}>Email</Text>
									<Text style={tw`text-xs text-grey`} ellipsizeMode='clip' numberOfLines={1}>
										--------------------------------------------------------------------------------------------------------------
									</Text>
								</View>
							</View>
							<View style={tw``}>
								<FormControl style={tw`mb-2`}>
									<Controller
										control={control}
										name='body.weight'
										rules={{
											required: true,
										}}
										render={({ field: { onChange, value = '' } }) => (
											<Select
												selectedVal={value}
												onChange={onChange}
												label={'TYPE'}
												styleLabel='text-sm'
												data={selectDataPhoneType}
												size='sm'
											/>
										)}
									/>
								</FormControl>
								<FormControl style={tw``}>
									<Controller
										control={control}
										name='body.weight'
										rules={{
											required: true,
										}}
										render={({ field: { onChange, value } }) => (
											<InputComponent
												onChange={onChange}
												placeholder={'Email'}
												value={value}
												isError={false}
												labelValue='EMAIL'
												styleContainer='mb-5'
											/>
										)}
									/>
								</FormControl>
							</View>
							<View style={tw``}>
								<FormControl style={tw`mb-2`}>
									<Controller
										control={control}
										name='body.weight'
										rules={{
											required: true,
										}}
										render={({ field: { onChange, value = '' } }) => (
											<Select
												selectedVal={value}
												onChange={onChange}
												label={'TYPE'}
												styleLabel='text-sm'
												data={selectDataPhoneType}
												size='sm'
											/>
										)}
									/>
								</FormControl>
								<FormControl style={tw`mb-3`}>
									<Controller
										control={control}
										name='body.weight'
										rules={{
											required: true,
										}}
										render={({ field: { onChange, value = '' } }) => (
											<InputComponent
												onChange={onChange}
												placeholder={'Email'}
												value={value}
												isError={false}
												labelValue='EMAIL'
												styleContainer='mb-5'
											/>
										)}
									/>
								</FormControl>
							</View>
						</TemplateContainer>
					</View>
				</TemplateContainerKeyboard>
			</View>
			<BottomButtons
				leftButton={
					<DefaultButton
						title='Cancel'
						variant='outlined'
						size='md'
						onPress={() => navigation.navigate(ProfileRoute.Profile)}
					/>
				}
				rightButton={
					<DefaultButton title='Save' variant='contained' size='md' onPress={handleSubmit(onSubmit)} />
				}
			/>
		</SafeAreaView>
	);
};
