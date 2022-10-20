import * as React from 'react';
import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormControl } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, SafeAreaView, Text, View } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { Image as CropImage } from 'react-native-image-crop-picker';
import * as Yup from 'yup';

import { tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../actions/common.actions';
import { getProfileData, postCreateBodyArt } from '../../../actions/profile.actions';
import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { AccordionItem } from '../../../shared/components/atoms/Accordion/Accordion.component';
import { BottomButtons } from '../../../shared/components/atoms/BottomButtons/BottomButtons.component';
import { DefaultButton } from '../../../shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from '../../../shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { DocumentRow } from '../../../shared/components/atoms/DocumentRow/DocumentRow.component';
import { InputComponent } from '../../../shared/components/atoms/inputs/Input/Input.component';
import { Select } from '../../../shared/components/atoms/inputs/SelectInput/Select.component';
import { MediaRow } from '../../../shared/components/atoms/MediaRow/MediaRow.component';
import { DocumentModal } from '../../../shared/components/atoms/Modals/DocumentModal';
import { MediaModal } from '../../../shared/components/atoms/Modals/MediaModal';
import { TemplateContainer } from '../../../shared/components/templates/Template.container';
import { useAppDispatch } from '../../../store/configureStore';
import { IUserBodyArts } from '../../../types/profileTypes';
import { SettingRoute } from '../../settings/enums/SettingRoute.enum';
import { selectBodyArtType } from '../data/SelectAppearanceData.data';
import { bodyArtTypeStatusLabel } from '../data/SelectAppearanceDataEnums.enums';
import { ProfileRoute } from '../enums/profileRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const ProfileEditBodyArt = () => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<navigationStack>();
	const [mediaAssets, setMediaAssets] = useState<CropImage[]>([]);
	const [activeMedia, setActiveMedia] = useState<CropImage | null>(null);
	const [documentAssets, setDocumentAssets] = useState<DocumentPickerResponse[]>([]);
	const [activeDocument, setActiveDocument] = useState<DocumentPickerResponse | null>(null);

	const validationSchema = Yup.object().shape({
		artist: Yup.string(),
		email: Yup.string(),
		phone: Yup.string(),
		price: Yup.string(),
		salon: Yup.string(),
		title: Yup.string(),
		type: Yup.string(),
	});

	const {
		control,
		handleSubmit,
		// formState: { errors },
	} = useForm<IUserBodyArts>({
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = async (data: IUserBodyArts) => {
		Keyboard.dismiss();
		await dispatch(
			dispatchWithLoader(async () => {
				const a = await dispatch(postCreateBodyArt({ data })).unwrap();
				if (!a.success) return;
				await dispatch(getProfileData());
				navigation.navigate(ProfileRoute.Profile);
			}),
		);
	};

	return (
		<SafeAreaView>
			<View style={tw`w-full h-full bg-greyBg relative`}>
				<View style={tw`bg-red/20 p-2`}>
					<Text style={tw`text-red text-center text-xs`}>EDIT MODE</Text>
				</View>
				<View style={tw`flex flex-row items-center mb-4 p-2 bg-white`}>
					<ButtonNavigation type='back' onPress={() => navigation.navigate(ProfileRoute.Profile)} />
					<Text style={tw`ml-4 font-bold text-xl`}>Appearance</Text>
				</View>
				<TemplateContainer>
					<View style={tw``}>
						<View>
							<FormControl>
								<Controller
									control={control}
									name='type'
									rules={{
										required: true,
									}}
									render={({ field: { onChange, value = '' } }) => (
										<Select
											onChange={onChange}
											selectedVal={value}
											selectedLabel={value ? bodyArtTypeStatusLabel[value] : ''}
											label={'BODY ART TYPE*'}
											styleLabel='text-sm'
											data={selectBodyArtType}
											size='sm'
										/>
									)}
								/>
							</FormControl>
							<View style={tw`flex-row items-center justify-between`}>
								<FormControl isRequired style={tw`w-48%`}>
									<Controller
										control={control}
										name='title'
										rules={{
											required: true,
										}}
										render={({ field: { onChange, value = '' } }) => (
											<InputComponent
												onChange={onChange}
												placeholder={'title*'}
												value={value}
												labelValue='title*'
												styleContainer='mb-3'
											/>
										)}
									/>
								</FormControl>
								<FormControl isRequired style={tw`w-48%`}>
									<Controller
										control={control}
										name='artist'
										rules={{
											required: true,
										}}
										render={({ field: { onChange, value = '' } }) => (
											<InputComponent
												onChange={onChange}
												placeholder={'Artist'}
												value={value}
												labelValue='Artist'
												styleContainer='mb-3'
											/>
										)}
									/>
								</FormControl>
							</View>
							<View style={tw`flex-row items-center justify-between`}>
								<FormControl isRequired style={tw`w-48%`}>
									<Controller
										control={control}
										name='salon'
										rules={{
											required: true,
										}}
										render={({ field: { onChange, value = '' } }) => (
											<InputComponent
												onChange={onChange}
												placeholder={'salon'}
												value={value}
												labelValue='salon'
												styleContainer='mb-3'
											/>
										)}
									/>
								</FormControl>
								<FormControl isRequired style={tw`w-48%`}>
									<Controller
										control={control}
										name='price'
										rules={{
											required: true,
										}}
										render={({ field: { onChange, value = '' } }) => (
											<InputComponent
												onChange={onChange}
												placeholder={'price$'}
												value={value}
												labelValue='price$'
												styleContainer='mb-3'
											/>
										)}
									/>
								</FormControl>
							</View>
							<AccordionItem
								title={'Gallery'}
								isBorderDotted={true}
								styleBg='bg-greyBg'
								styleTitle='capitalize'>
								<View>
									<MediaRow
										title={'Please add some photos to your gallery'}
										onUpload={assets => {
											setMediaAssets([...mediaAssets, ...assets]);
										}}
										assets={mediaAssets}
										onItemClick={setActiveMedia}
									/>
									<MediaModal
										isVisible={!!activeMedia}
										media={{
											createdAt: Date.now(),
											name: activeMedia?.filename ?? '',
											path: activeMedia?.sourceURL ?? '',
										}}
										onOverlayTap={() => {
											setActiveMedia(null);
										}}
										closeModal={() => {
											setActiveMedia(null);
										}}
									/>
								</View>
							</AccordionItem>
							<AccordionItem
								title={'Documents'}
								isBorderDotted={true}
								styleBg='bg-greyBg'
								styleTitle='capitalize'>
								<View>
									<DocumentRow
										title={'Please add some files to your documents'}
										onUpload={documents => {
											setDocumentAssets([...documentAssets, ...documents]);
										}}
										documents={documentAssets}
										onItemClick={setActiveDocument}
									/>
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
								</View>
							</AccordionItem>
						</View>
					</View>
				</TemplateContainer>
			</View>
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
