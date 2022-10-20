import * as React from 'react';
import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import moment from 'moment';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import ImagePicker, { Image as CropImage } from 'react-native-image-crop-picker';

import { colors, tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../actions/common.actions';
import { deleteBodyArt, getGeneralInfoProfile, getProfileData } from '../../../actions/profile.actions';
import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { AccordionItem } from '../../../shared/components/atoms/Accordion/Accordion.component';
import { AvatarItem } from '../../../shared/components/atoms/Avatar/Avatar.component';
import { MainHeader } from '../../../shared/components/atoms/Headers/MainHeader.component';
import { MediaRow } from '../../../shared/components/atoms/MediaRow/MediaRow.component';
import { MediaModal } from '../../../shared/components/atoms/Modals/MediaModal';
import { TextItem } from '../../../shared/components/atoms/TextItem/TextItem.component';
import { BigPlusIcon } from '../../../shared/components/icons/BigPlus.icon';
import { CalendarDefaultIcon } from '../../../shared/components/icons/CalendarDefault.icon';
import { TemplateContainerScroll } from '../../../shared/components/templates/Template.container-scroll';
import { useAppDispatch, useAppSelector } from '../../../store/configureStore';
import { relationshipStatusLabel } from '../data/SelectGeneralDataEnums.enums';
import { ProfileRoute } from '../enums/profileRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const ProfileScreen = () => {
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector(state => state.profile);
	const navigation = useNavigation<navigationStack>();

	const [mediaAssets, setMediaAssets] = useState<CropImage[]>([]);
	const [activeMedia, setActiveMedia] = useState<CropImage | null>(null);

	const [activeMediaAvatar, setActiveMediaAvatar] = useState(null);
	const [mediaAssetsAvatar, setMediaAssetsAvatar] = useState<any>(null);

	const [activeMediaBg, setActiveMediaBg] = useState(null);
	const [mediaAssetsBg, setMediaAssetsBg] = useState<any>(null);

	useEffect(() => {
		dispatch(
			dispatchWithLoader(async () => {
				await dispatch(getProfileData());
				await dispatch(getGeneralInfoProfile());
			}),
		);
	}, [dispatch]);

	const menuListGeneral = [
		{ isDisabled: false, label: 'Edit', onPress: () => navigation.navigate(ProfileRoute.ProfileEditGeneral) },
	];
	const menuListContacts = [
		{ isDisabled: false, label: 'Edit', onPress: () => navigation.navigate(ProfileRoute.ProfileEditContacts) },
	];
	const menuListBodyArt = [
		{ isDisabled: false, label: 'Edit', onPress: () => navigation.navigate(ProfileRoute.ProfileEditBodyArt) },
		{
			isDisabled: false,
			label: 'Delete',
			onPress: async () => {
				await dispatch(
					dispatchWithLoader(async () => {
						const a = await dispatch(deleteBodyArt()).unwrap();
						console.log(a);
					}),
				);
			},
		},
	];

	const menuListAppearance = [
		{
			isDisabled: false,
			label: 'Edit',
			onPress: () => navigation.navigate(ProfileRoute.ProfileEditAppearance),
		},
	];

	const openMediaLibraryAvatar = async () => {
		const res = await ImagePicker.openPicker({
			cropping: true,
			mediaType: 'photo',
			multiple: false,
		});
		setMediaAssetsAvatar(res);
	};

	const openMediaLibraryBg = async () => {
		const res = await ImagePicker.openPicker({
			cropping: true,
			mediaType: 'photo',
			multiple: false,
		});
		setMediaAssetsBg(res);
	};

	if (!userData) return <></>;
	return (
		<SafeAreaView>
			<MainHeader title='Profile' />
			<View style={tw`relative h-full pb-15`}>
				<TouchableOpacity
					onPress={() => navigation.navigate(ProfileRoute.ProfileEditBodyArt)}
					style={tw`absolute bottom-35 right-2 w-16 h-16 bg-greenInput rounded-full items-center justify-center z-50`}>
					<BigPlusIcon />
				</TouchableOpacity>
				<TemplateContainerScroll style='pt-0'>
					<View style={tw`px-1 pb-20 relative`}>
						<View style={tw`w-full relative mt-4 rounded-md overflow-hidden -ml-3 w-106.6%`}>
							<TouchableOpacity style={tw`h-26 w-full rounded-md`} onPress={openMediaLibraryBg}>
								{mediaAssetsBg ? (
									<Image source={{ uri: mediaAssetsBg?.path }} style={tw`h-26 w-full rounded-md`} />
								) : userData?.background ? (
									<Image
										source={{ uri: `https://web.hubmee.org${userData?.background.url}` }}
										style={tw`h-26 w-full rounded-md`}
									/>
								) : (
									<Image source={require('../images/bg.png')} style={tw`h-26 w-full rounded-md`} />
								)}
							</TouchableOpacity>

							<TouchableOpacity
								style={tw`absolute left-5 top-2`}
								activeOpacity={1}
								onPress={openMediaLibraryAvatar}>
								{mediaAssetsAvatar ? (
									<AvatarItem
										firstName={userData.first_name}
										lastName={userData.last_name}
										size='ml'
										src={mediaAssetsAvatar?.path}
										id={userData.id}
									/>
								) : userData?.avatar ? (
									<Image
										source={{ uri: `https://web.hubmee.org${userData?.avatar.url}` }}
										style={tw`w-20 h-20 rounded-full`}
									/>
								) : (
									<AvatarItem
										firstName={userData.first_name}
										lastName={userData.last_name}
										size='ml'
										src=''
										id={userData.id}
									/>
								)}
							</TouchableOpacity>
						</View>

						<View style={tw`pb-10`}>
							<AccordionItem
								title='General information'
								subTitle='Full name, Gender, Birthday, Relationship, Documents'
								isDisabledExpand={true}
								menuList={menuListGeneral}
								styleBg='min-h-15 pl-5'>
								<View style={tw`px-2`}>
									<TextItem valueInput={userData?.full_name} typeInput='Full name' />
									<TextItem
										valueInput={userData?.gender}
										typeInput='Gender'
										styleValue='capitalize'
									/>
									<TextItem
										valueInput={moment(userData?.birth_day).format('DD/MM/YYYY')}
										// valueInput={userData?.birth_day}
										typeInput='Birhday'
										iconStart={<CalendarDefaultIcon fillIcon={colors.greenInput} />}
									/>
									<TextItem
										valueInput={
											userData?.relationship_status
												? relationshipStatusLabel[userData?.relationship_status]
												: '-'
										}
										typeInput='relationship'
									/>

									{userData.documents?.length ? (
										<View>
											<View style={tw`pb-1 mt-4 mb-2`}>
												<Text style={tw`text-sm font-bold`}>Documents</Text>
												<Text
													ellipsizeMode='clip'
													numberOfLines={1}
													style={tw`text-xs text-grey -mb-1`}>
													----------------------------------------------------------------------------------------------------
												</Text>
											</View>
											<View style={tw`flex-row items-center justify-start`}>
												{userData?.documents?.map((item: any, key: number) => (
													<View style={tw`w-10 mr-5`} key={key}>
														<Image
															source={{
																uri: `https://web.hubmee.org${item.additional_info?.size_urls?.middle_icon}`,
															}}
															style={tw`w-10 h-10 rounded-md `}
														/>
														<Text
															ellipsizeMode='tail'
															numberOfLines={1}
															style={tw`text-[10px]`}>
															{item.original_filename}
														</Text>
													</View>
												))}
											</View>
										</View>
									) : null}
								</View>
							</AccordionItem>

							<AccordionItem
								isDisabledExpand={true}
								styleBg='min-h-15 pl-5'
								title='Contacts'
								subTitle='Home and current adress, Phone, Email'
								menuList={menuListContacts}>
								<View style={tw`px-2`}>
									<TextItem
										valueInput={
											userData?.contacts?.phones.find(item => item.type === 'personal')?.value
										}
										typeInput='Phone (HOME)'
									/>
									<TextItem
										valueInput={
											userData?.contacts?.emails.find(item => item.type === 'personal')?.value
										}
										typeInput='Email (HOME)'
									/>
									<TextItem
										valueInput={
											userData?.contacts?.phones.find(item => item.type === 'work')?.value
										}
										typeInput='Phone (work)'
									/>
									<TextItem
										valueInput={
											userData?.contacts?.emails.find(item => item.type === 'work')?.value
										}
										typeInput='Email (work)'
									/>
									{/*<TextItem valueInput={userData.adress} typeInput='Home adress' />*/}
								</View>
							</AccordionItem>

							<AccordionItem
								isDisabledExpand={true}
								styleBg='min-h-15 pl-5'
								title='Appearance'
								menuList={menuListAppearance}
								subTitle='Body type, Height, Hair, Eyes, Wais, Shoe Size '>
								<View style={tw`px-2`}>
									<View style={tw`pb-1 mb-2`}>
										<Text style={tw`text-sm font-bold`}>Body Parameters</Text>
										<Text
											ellipsizeMode='clip'
											numberOfLines={1}
											style={tw`text-xs text-grey -mb-1`}>
											----------------------------------------------------------------------------------------------------
										</Text>
									</View>
									<TextItem
										valueInput={userData?.appearance?.body.type || '-'}
										typeInput='Body type'
									/>
									<TextItem
										valueInput={userData?.appearance?.body.weight || '-'}
										typeInput='Weight (LB)'
									/>

									<TextItem
										valueInput={
											userData.appearance?.body.height
												? `${Math.floor(parseInt(userData?.appearance?.body.height, 10) / 12)}`
												: '-'
										}
										typeInput='Height (FT)'
									/>
									<TextItem
										valueInput={
											userData.appearance?.body.height
												? `${parseInt(userData.appearance?.body.height, 10) % 12}`
												: '-'
										}
										typeInput='Height (In)'
									/>

									<TextItem valueInput={userData.appearance?.body.waist} typeInput='Waist (IN)' />
									<TextItem valueInput={userData.appearance?.body.hips} typeInput='Hips (In)' />

									{userData?.gender === 'female' ? (
										<View>
											<TextItem
												valueInput={userData?.appearance?.body.bust_cup}
												typeInput='Bust (cup size)'
											/>
											<TextItem
												valueInput={userData?.appearance?.body.bust}
												typeInput='Bust (in)'
											/>
										</View>
									) : null}

									<TextItem
										valueInput={userData?.appearance?.body.shoe_size || '-'}
										typeInput='Shoe size'
									/>

									<View style={tw`pb-1 mt-4 mb-2`}>
										<Text style={tw`text-sm font-bold`}>Hair</Text>
										<Text
											ellipsizeMode='clip'
											numberOfLines={1}
											style={tw`text-xs text-grey -mb-1`}>
											----------------------------------------------------------------------------------------------------
										</Text>
									</View>
									<TextItem valueInput={userData?.appearance?.hair.type || '-'} typeInput='type' />
									<TextItem
										valueInput={userData?.appearance?.hair.length || '-'}
										typeInput='Length'
									/>
									<TextItem valueInput={userData?.appearance?.hair.color || '-'} typeInput='Color' />

									<View style={tw`pb-1 my-2`}>
										<Text style={tw`text-sm font-bold`}>Eyes</Text>
										<Text
											ellipsizeMode='clip'
											numberOfLines={1}
											style={tw`text-xs text-grey -mb-1`}>
											----------------------------------------------------------------------------------------------------
										</Text>
									</View>
									<TextItem valueInput={userData?.appearance?.eye.color || '-'} typeInput='color' />
									<TextItem valueInput={userData?.appearance?.eye.wear || '-'} typeInput='Eyewear' />
								</View>
							</AccordionItem>

							{userData?.bodyArts?.length
								? userData?.bodyArts.map((item, key) => (
										<AccordionItem
											isDisabledExpand={true}
											styleBg='min-h-15 pl-5'
											title='Body Art'
											menuList={menuListBodyArt}
											subTitle='Gallery, Documents, Contacts'
											key={key}>
											<View style={tw`px-2`}>
												<View style={tw`pb-1 mb-2`}>
													<Text style={tw`text-sm font-bold`}>Body Art</Text>
													<Text
														ellipsizeMode='clip'
														numberOfLines={1}
														style={tw`text-xs text-grey -mb-1`}>
														----------------------------------------------------------------------------------------------------
													</Text>
												</View>
												<TextItem valueInput={item.type} typeInput='Type' />
												<TextItem valueInput={item.title} typeInput='Title' />
												<TextItem valueInput={item.salon} typeInput='Salon' />
												<TextItem valueInput={item.artist} typeInput='Artist' />
												<TextItem valueInput={item.price} typeInput='Price' />
											</View>
										</AccordionItem>
								  ))
								: null}

							<AccordionItem
								isDisabledExpand={true}
								styleBg='min-h-15 pl-5'
								title='Gallery'
								subTitle='Photos'
								// menuList={menuList}
							>
								<View>
									<MediaRow
										title={'Please add some photos to your gallery'}
										onUpload={assets => {
											setMediaAssets([...mediaAssets, ...assets]);
										}}
										assets={mediaAssets}
										onItemClick={setActiveMedia}
									/>
								</View>
							</AccordionItem>

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

							<MediaModal
								isVisible={!!activeMediaAvatar}
								media={{
									createdAt: Date.now(),
									name: activeMediaAvatar?.filename ?? '',
									path: activeMediaAvatar?.sourceURL ?? '',
								}}
								onOverlayTap={() => {
									setActiveMediaAvatar(null);
								}}
								closeModal={() => {
									setActiveMediaAvatar(null);
								}}
							/>

							<MediaModal
								isVisible={!!activeMediaBg}
								media={{
									createdAt: Date.now(),
									name: activeMediaBg?.filename ?? '',
									path: activeMediaBg?.sourceURL ?? '',
								}}
								onOverlayTap={() => {
									setActiveMediaBg(null);
								}}
								closeModal={() => {
									setActiveMediaBg(null);
								}}
							/>
						</View>
					</View>
				</TemplateContainerScroll>
			</View>
		</SafeAreaView>
	);
};
