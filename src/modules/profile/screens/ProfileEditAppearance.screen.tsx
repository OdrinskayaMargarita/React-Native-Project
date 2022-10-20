import * as React from 'react';
import { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormControl } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard, SafeAreaView, Text, View } from 'react-native';
import * as Yup from 'yup';

import { tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../actions/common.actions';
import { getAppearanceProfile, putUpdateAppearance } from '../../../actions/profile.actions';
import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { BottomButtons } from '../../../shared/components/atoms/BottomButtons/BottomButtons.component';
import { DefaultButton } from '../../../shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from '../../../shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { InputComponent } from '../../../shared/components/atoms/inputs/Input/Input.component';
import { Select } from '../../../shared/components/atoms/inputs/SelectInput/Select.component';
import { TemplateContainerScroll } from '../../../shared/components/templates/Template.container-scroll';
import { TemplateContainerKeyboard } from '../../../shared/components/templates/TemplateKeyboard.container';
import { useAppDispatch, useAppSelector } from '../../../store/configureStore';
import { IUserAppearance } from '../../../types/profileTypes';
import {
	selectBodyType,
	selectDataBust,
	selectDataBustCup,
	selectDataColorHair,
	selectDataEyeColor,
	selectDataEyeWear,
	selectDataLengthHair,
	selectDataShoes,
	selectDataTypeHair,
} from '../data/SelectAppearanceData.data';
import {
	bodyTypeStatusLabel,
	eyesColorStatusLabel,
	eyesWearStatusLabel,
	hairColorStatusLabel,
	hairLengthStatusLabel,
	hairTypeStatusLabel,
} from '../data/SelectAppearanceDataEnums.enums';
import { ProfileRoute } from '../enums/profileRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const ProfileEditAppearance = () => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<navigationStack>();
	const { userAppearance } = useAppSelector(state => state.profile);
	const { userGeneral } = useAppSelector(state => state.profile);
	const { gender } = userGeneral;
	const { body, eye, hair } = userAppearance;

	useEffect(() => {
		dispatch(
			dispatchWithLoader(async () => {
				await dispatch(getAppearanceProfile());
			}),
		);
	}, [dispatch]);

	const validationSchema = Yup.object().shape({
		body: Yup.object({
			bust: Yup.string().nullable(),
			bust_cup: Yup.string().nullable(),
			height: Yup.string().nullable(),
			hips: Yup.string().nullable(),
			shoe_size: Yup.string().nullable(),
			type: Yup.string().nullable(),
			waist: Yup.string().nullable(),
			weight: Yup.string().nullable(),
		}).required(),
		eye: Yup.object({
			color: Yup.string().nullable(),
			wear: Yup.string().nullable(),
		}).required(),
		hair: Yup.object({
			color: Yup.string().nullable(),
			length: Yup.string().nullable(),
			type: Yup.string().nullable(),
		}),
	});

	const {
		control,
		handleSubmit,
		// formState: { errors },
	} = useForm<IUserAppearance>({
		defaultValues: {
			body: {
				bust: body?.bust,
				bust_cup: body?.bust_cup,
				height: body?.height,
				hips: body?.hips,
				shoe_size: body?.shoe_size,
				type: body?.type,
				waist: body?.waist,
				weight: body?.weight,
			},
			eye: {
				color: eye?.color,
				wear: eye?.wear,
			},
			hair: {
				color: hair?.color,
				length: hair?.length,
				type: hair?.type,
			},
		},
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data: IUserAppearance) => {
		Keyboard.dismiss();
		dispatch(
			dispatchWithLoader(async () => {
				dispatch(putUpdateAppearance({ callback: () => navigation.navigate(ProfileRoute.Profile), data }));
			}),
		);
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
							<Text style={tw`ml-4 font-bold text-xl`}>Appearance</Text>
						</View>
						<TemplateContainerScroll>
							<View style={tw`mb-2`}>
								<View style={tw`w-full`}>
									<Text style={tw`font-bold text-sm`}>Body parameters</Text>
									<Text style={tw`text-xs text-grey`} ellipsizeMode='clip' numberOfLines={1}>
										--------------------------------------------------------------------------------------------------------------
									</Text>
								</View>
							</View>
							<View style={tw`flex-row items-start justify-between`}>
								<View style={tw`w-48%`}>
									<FormControl>
										<Controller
											control={control}
											name='body.type'
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<Select
													onChange={onChange}
													selectedVal={value}
													selectedLabel={value ? bodyTypeStatusLabel[value] : ''}
													label={'BODY TYPE'}
													styleLabel='text-sm'
													data={selectBodyType}
													size='sm'
													styleModal='w-48% left-2%'
												/>
											)}
										/>
									</FormControl>
								</View>
								<View style={tw`w-48%`}>
									<FormControl>
										<Controller
											control={control}
											name='body.weight'
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<InputComponent
													keyboardType='numeric'
													onChange={onChange}
													placeholder={'Weight (LB)'}
													value={value}
													isError={false}
													labelValue='Weight (LB)'
													styleContainer='mb-3'
												/>
											)}
										/>
									</FormControl>
								</View>
							</View>
							<View style={tw`flex-row items-start justify-between`}>
								<View style={tw`w-48%`}>
									<FormControl>
										<Controller
											control={control}
											name='body.height'
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<InputComponent
													keyboardType='numeric'
													onChange={onChange}
													placeholder={'Height (LB)'}
													value={value}
													isError={false}
													labelValue='Height (FT)'
													styleContainer='mb-3'
												/>
											)}
										/>
									</FormControl>
								</View>
								<View style={tw`w-48%`}>
									<FormControl>
										<Controller
											control={control}
											name='body.shoe_size'
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<Select
													selectedVal={value}
													selectedLabel={value}
													onChange={onChange}
													label={'shoe size'}
													styleLabel='text-sm'
													data={selectDataShoes}
													size='sm'
													styleModal='w-48% left-51%'
												/>
											)}
										/>
									</FormControl>
								</View>
							</View>
							<View style={tw`flex-row items-start justify-between`}>
								<View style={tw`w-48%`}>
									<FormControl>
										<Controller
											control={control}
											name='body.waist'
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<InputComponent
													keyboardType='numeric'
													onChange={onChange}
													placeholder={'Waist (LB)'}
													value={value}
													isError={false}
													labelValue='Waist (LB)'
													styleContainer='mb-3'
												/>
											)}
										/>
									</FormControl>
								</View>
								<View style={tw`w-48%`}>
									<FormControl>
										<Controller
											control={control}
											name='body.hips'
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<InputComponent
													keyboardType='numeric'
													onChange={onChange}
													placeholder={'hIPS (IN)'}
													value={value}
													isError={false}
													labelValue='hIPS (IN)'
													styleContainer='mb-3'
												/>
											)}
										/>
									</FormControl>
								</View>
							</View>
							{gender === 'female' ? (
								<View style={tw`flex-row items-start justify-between`}>
									<View style={tw`w-48%`}>
										<FormControl>
											<Controller
												control={control}
												name='body.bust'
												rules={{
													required: true,
												}}
												render={({ field: { onChange, value } }) => (
													<Select
														selectedVal={value}
														selectedLabel={value}
														onChange={onChange}
														label={'bust (CuP SIZE)'}
														styleLabel='text-sm'
														data={selectDataBustCup}
														size='sm'
														styleModal='w-48% left-2%'
													/>
												)}
											/>
										</FormControl>
									</View>
									<View style={tw`w-48%`}>
										<FormControl>
											<Controller
												control={control}
												name='body.bust_cup'
												rules={{
													required: true,
												}}
												render={({ field: { onChange, value } }) => (
													<Select
														selectedVal={value}
														selectedLabel={value}
														onChange={onChange}
														label={'BUST (IN)'}
														styleLabel='text-sm'
														data={selectDataBust}
														size='sm'
														styleModal='w-48% left-50%'
													/>
												)}
											/>
										</FormControl>
									</View>
								</View>
							) : null}

							<View style={tw`mb-2 mt-4`}>
								<View style={tw`w-full`}>
									<Text style={tw`font-bold text-sm`}>Hair</Text>
									<Text style={tw`text-xs text-grey`} ellipsizeMode='clip' numberOfLines={1}>
										--------------------------------------------------------------------------------------------------------------
									</Text>
								</View>
							</View>
							<View style={tw`flex-row items-start justify-between`}>
								<View style={tw`w-48%`}>
									<FormControl>
										<Controller
											control={control}
											name='hair.type'
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<Select
													selectedVal={value}
													selectedLabel={value ? hairTypeStatusLabel[value] : ''}
													onChange={onChange}
													label={'Type'}
													styleLabel='text-sm'
													data={selectDataTypeHair}
													size='sm'
													styleModal='w-48% left-2%'
												/>
											)}
										/>
									</FormControl>
								</View>
								<View style={tw`w-48%`}>
									<FormControl>
										<Controller
											control={control}
											name='hair.length'
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<Select
													selectedVal={value}
													selectedLabel={value ? hairLengthStatusLabel[value] : ''}
													onChange={onChange}
													label={'length'}
													styleLabel='text-sm'
													data={selectDataLengthHair}
													size='sm'
													styleModal='w-48% left-50%'
												/>
											)}
										/>
									</FormControl>
								</View>
							</View>
							<View style={tw`w-48%`}>
								<FormControl>
									<Controller
										control={control}
										name='hair.color'
										rules={{
											required: true,
										}}
										render={({ field: { onChange, value } }) => (
											<Select
												selectedVal={value}
												selectedLabel={value ? hairColorStatusLabel[value] : ''}
												onChange={onChange}
												label={'COLOR'}
												styleLabel='text-sm'
												data={selectDataColorHair}
												size='sm'
												styleModal='w-48% left-2%'
											/>
										)}
									/>
								</FormControl>
							</View>
							<View style={tw`mb-2 mt-4`}>
								<View style={tw`w-full`}>
									<Text style={tw`font-bold text-sm`}>Eyes</Text>
									<Text style={tw`text-xs text-grey`} ellipsizeMode='clip' numberOfLines={1}>
										--------------------------------------------------------------------------------------------------------------
									</Text>
								</View>
							</View>
							<View style={tw`flex-row items-start justify-between pb-10`}>
								<View style={tw`w-48%`}>
									<FormControl>
										<Controller
											control={control}
											name='eye.color'
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<Select
													selectedVal={value}
													selectedLabel={value ? eyesColorStatusLabel[value] : ''}
													onChange={onChange}
													label={'Type'}
													styleLabel='text-sm'
													data={selectDataEyeColor}
													size='sm'
													styleModal='w-48% left-2%'
												/>
											)}
										/>
									</FormControl>
								</View>
								<View style={tw`w-48%`}>
									<FormControl>
										<Controller
											control={control}
											name='eye.wear'
											rules={{
												required: true,
											}}
											render={({ field: { onChange, value } }) => (
												<Select
													selectedVal={value}
													selectedLabel={value ? eyesWearStatusLabel[value] : ''}
													onChange={onChange}
													label={'length'}
													styleLabel='text-sm'
													data={selectDataEyeWear}
													size='sm'
													styleModal='w-48% left-50%'
												/>
											)}
										/>
									</FormControl>
								</View>
							</View>
						</TemplateContainerScroll>
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
