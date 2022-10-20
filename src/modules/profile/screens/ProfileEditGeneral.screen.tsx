import * as React from 'react';
import { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import moment from 'moment';
import { FormControl } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { DocumentPickerResponse } from 'react-native-document-picker';
import * as Yup from 'yup';

import { colors, tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../actions/common.actions';
import {
	getAppearanceProfile,
	getGeneralInfoProfile,
	getProfileData,
	putUpdateGeneralInfo,
} from '../../../actions/profile.actions';
import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { BottomButtons } from '../../../shared/components/atoms/BottomButtons/BottomButtons.component';
import { DefaultButton } from '../../../shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from '../../../shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { DocumentRow } from '../../../shared/components/atoms/DocumentRow/DocumentRow.component';
import { InputComponent } from '../../../shared/components/atoms/inputs/Input/Input.component';
import { Select } from '../../../shared/components/atoms/inputs/SelectInput/Select.component';
import { DocumentModal } from '../../../shared/components/atoms/Modals/DocumentModal';
import { CalendarDefaultIcon } from '../../../shared/components/icons/CalendarDefault.icon';
import { TemplateContainer } from '../../../shared/components/templates/Template.container';
import { TemplateContainerKeyboard } from '../../../shared/components/templates/TemplateKeyboard.container';
import { useAppDispatch, useAppSelector } from '../../../store/configureStore';
import { IUserGeneral } from '../../../types/profileTypes';
import { selectDataGender, selectDataRelationship } from '../data/SelectGeneralData.data';
import { genderStatusLabel, relationshipStatusLabel } from '../data/SelectGeneralDataEnums.enums';
import { ProfileRoute } from '../enums/profileRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const ProfileEditGeneral = () => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<navigationStack>();
	const { userGeneral } = useAppSelector(state => state.profile);
	const { birth_day, first_name, gender, last_name, middle_name, relationship_status } = userGeneral;

	const [openDate, setOpenDate] = useState<boolean>(false);
	const [err, setErr] = useState(null);
	const [date, setDate] = useState<Date>(birth_day ? moment(birth_day).toDate() : new Date());
	const [documentAssets, setDocumentAssets] = useState<DocumentPickerResponse[]>([]);
	const [activeDocument, setActiveDocument] = useState<DocumentPickerResponse | null>(null);

	useEffect(() => {
		dispatch(
			dispatchWithLoader(async () => {
				await dispatch(getGeneralInfoProfile());
			}),
		);
	}, [dispatch]);

	const validationSchema = Yup.object().shape({
		birth_day: Yup.string(),
		first_name: Yup.string(),
		gender: Yup.string(),
		last_name: Yup.string(),
		middle_name: Yup.string(),
		relationship_status: Yup.string(),
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserGeneral>({
		defaultValues: {
			birth_day: moment(birth_day).format('MM/DD/YYYY'),
			first_name: first_name,
			gender: gender,
			last_name: last_name,
			middle_name: middle_name,
			relationship_status: relationship_status,
		},
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = async (data: IUserGeneral) => {
		Keyboard.dismiss();
		await dispatch(
			dispatchWithLoader(async () => {
				console.log(data);
				const res = await dispatch(putUpdateGeneralInfo({ data })).unwrap();
				console.log(res.data.result);
				if (!res.success) {
					setErr(res.data.result.errors);
					return;
				}
				dispatch(getProfileData());
				dispatch(getGeneralInfoProfile());
				dispatch(getAppearanceProfile());
				navigation.navigate(ProfileRoute.Profile);
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
						<View style={tw`flex flex-row items-center py-2 px-3 bg-white shadow`}>
							<ButtonNavigation type='back' onPress={() => navigation.navigate(ProfileRoute.Profile)} />
							<Text style={tw`ml-4 font-bold text-xl`}>General information</Text>
						</View>
						<TemplateContainer>
							<View style={tw`mb-2 pt-6`}>
								<View style={tw`w-full`}>
									<Text style={tw`font-bold text-sm`}>Main</Text>
									<Text style={tw`text-xs text-grey`} ellipsizeMode='clip' numberOfLines={1}>
										--------------------------------------------------------------------------------------------------------------
									</Text>
								</View>
							</View>
							<View style={tw`flex-row items-start justify-between`}>
								<View style={tw`w-48%`}>
									<FormControl isInvalid={'first_name' in errors}>
										<Controller
											control={control}
											name='first_name'
											render={({ field: { onChange, value } }) => (
												<InputComponent
													onChange={onChange}
													placeholder={'FIRST NAME*'}
													value={value}
													labelValue='FIRST NAME*'
													styleContainer='mb-5'
													size='md'
													errorMessage={err?.first_name}
												/>
											)}
										/>
									</FormControl>
								</View>
								<View style={tw`w-48%`}>
									<FormControl isInvalid={'last_name' in errors}>
										<Controller
											control={control}
											name='last_name'
											render={({ field: { onChange, value } }) => (
												<InputComponent
													onChange={onChange}
													placeholder={'LAST NAME*'}
													value={value}
													labelValue='LAST NAME*'
													styleContainer='mb-5'
													size='md'
													errorMessage={err?.last_name}
												/>
											)}
										/>
									</FormControl>
								</View>
								<FormControl isInvalid={'first_name' in errors} style={tw`absolute`}>
									<Controller
										control={control}
										name='birth_day'
										render={({ field: { onChange } }) => (
											<DatePicker
												modal
												mode='date'
												open={openDate}
												date={date}
												maximumDate={moment().toDate()}
												onConfirm={dateItem => {
													setOpenDate(false);
													setDate(dateItem);
													onChange(moment(dateItem).format('MM/DD/YYYY'));
												}}
												onCancel={() => {
													setOpenDate(false);
												}}
											/>
										)}
									/>
								</FormControl>
							</View>
							<View style={tw`flex-row items-start justify-between`}>
								<View style={tw`w-48%`}>
									<FormControl isInvalid={'middle_name' in errors}>
										<Controller
											control={control}
											name='middle_name'
											render={({ field: { onChange, value } }) => (
												<InputComponent
													onChange={onChange}
													placeholder={'MIDDLE NAME'}
													value={value}
													labelValue='MIDDLE NAME'
													styleContainer='mb-5'
													size='md'
													errorMessage={err?.middle_name}
												/>
											)}
										/>
									</FormControl>
								</View>
								<View style={tw`w-48% mt-1`}>
									<TouchableOpacity
										style={tw`relative w-full rounded border border-grey mt-1 flex flex-row items-center p-3 mr-2`}
										activeOpacity={1}
										onPress={() => setOpenDate(true)}>
										<Text
											style={tw`absolute left-3 -top-[6px] bg-greyBg px-1 text-grey uppercase text-[10px]`}>
											BIRTHDAY*
										</Text>
										<CalendarDefaultIcon fillIcon={colors.greenInput} />
										<Text style={tw`ml-1`}>{moment(date).format('L')}</Text>
									</TouchableOpacity>
								</View>
							</View>
							<View style={tw`flex-row items-start justify-between`}>
								<View style={tw`w-48%`}>
									<FormControl isInvalid={'gender' in errors}>
										<Controller
											control={control}
											name='gender'
											render={({ field: { onChange, value } }) => (
												<Select
													selectedVal={value || ''}
													selectedLabel={value ? genderStatusLabel[value] : ''}
													onChange={onChange}
													label={'GENDER'}
													data={selectDataGender}
													size='sm'
													styleModal='w-48% left-1%'
												/>
											)}
										/>
									</FormControl>
								</View>
								<View style={tw`w-48%`}>
									<FormControl isInvalid={'relationship' in errors}>
										<Controller
											control={control}
											name='relationship_status'
											render={({ field: { onChange, value } }) => (
												<Select
													onChange={onChange}
													selectedVal={value || ''}
													selectedLabel={value ? relationshipStatusLabel[value] : ''}
													label={'Relationship'}
													data={selectDataRelationship}
													size='sm'
													styleModal='w-48% left-51%'
													isSearch={true}
												/>
											)}
										/>
									</FormControl>
								</View>
							</View>
							<View style={tw`mb-2 mt-7`}>
								<View style={tw`w-full`}>
									<View style={tw`flex-row items-center justify-between`}>
										<Text style={tw`font-bold text-sm`}>Documents</Text>
										<Text
											style={tw`text-grey text-[11px] pr-1`}>{`${documentAssets.length} documents`}</Text>
									</View>
									<Text style={tw`text-xs text-grey`} ellipsizeMode='clip' numberOfLines={1}>
										--------------------------------------------------------------------------------------------------------------
									</Text>
								</View>
								<DocumentRow
									maxCount={4}
									title={'Please add some files to your documents'}
									onUpload={documents => {
										setDocumentAssets([...documentAssets, ...documents]);
									}}
									documents={documentAssets}
									onItemClick={setActiveDocument}
								/>
							</View>
							<DocumentModal
								isVisible={!!activeDocument}
								document={{
									createdAt: Date.now(),
									name: activeDocument?.name ?? '',
									path: activeDocument?.uri ?? '',
								}}
								onOverlayTap={() => {
									setActiveDocument(null);
								}}
								closeModal={() => {
									setActiveDocument(null);
								}}
							/>
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
