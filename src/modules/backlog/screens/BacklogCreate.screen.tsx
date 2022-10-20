import * as React from 'react';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import moment from 'moment';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { Image as CropImage } from 'react-native-image-crop-picker';
import { AccordionItem } from 'src/shared/components/atoms/Accordion/Accordion.component';
import { AvatarItem } from 'src/shared/components/atoms/Avatar/Avatar.component';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonBinSquare } from 'src/shared/components/atoms/buttons/ButtonBinSquare/ButtonBinSquare.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { DocumentRow } from 'src/shared/components/atoms/DocumentRow/DocumentRow.component';
import { CheckboxInput } from 'src/shared/components/atoms/inputs/CheckboxInput/CheckboxInput.component';
import { MediaRow } from 'src/shared/components/atoms/MediaRow/MediaRow.component';
import { DocumentModal } from 'src/shared/components/atoms/Modals/DocumentModal';
import { MediaModal } from 'src/shared/components/atoms/Modals/MediaModal';
import { SelectorButton } from 'src/shared/components/atoms/SelectorButton/SelectorButton.component';
import { CalendarIcon } from 'src/shared/components/icons/Calendar.icon';
import { GroupAddIcon } from 'src/shared/components/icons/GroupAdd.icon';

import { colors, tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { BottomButtons } from '../../../shared/components/atoms/BottomButtons/BottomButtons.component';
import { InputComponent } from '../../../shared/components/atoms/inputs/Input/Input.component';
import { Select } from '../../../shared/components/atoms/inputs/SelectInput/Select.component';
import { CheckIcon } from '../../../shared/components/icons/Check.icon';
import { FlagIcon } from '../../../shared/components/icons/Flag.icon';
import { BacklogRoute } from '../enums/BacklogRoute.enum';

interface IProps {
	isVisible: boolean;
}

const selectPriority = [
	{
		iconItem: <FlagIcon fillIcon={colors.red} width={18} height={18} />,
		label: 'High',
		value: 'High',
	},
	{
		iconItem: <FlagIcon fillIcon={colors.yellow} width={16} height={16} />,
		label: 'Middle',
		value: 'Middle',
	},
	{
		iconItem: <FlagIcon fillIcon={colors.greenInput} width={16} height={16} />,
		label: 'Low',
		value: 'Low',
	},
	{
		iconItem: <FlagIcon fillIcon={colors.grey} width={16} height={16} />,
		label: 'None',
		value: 'None',
	},
];

const selectData = [
	{ label: 'Kyryl', value: 'Kyryl' },
	{ label: 'Olha', value: 'Olha' },
	{ label: 'Tanya', value: 'Tanya' },
	{ label: 'Tolya', value: 'Tolya' },
];

const selectDataEdit = [
	{ iconItem: <CheckIcon />, label: 'Can edit', value: 'Can edit' },
	{ iconItem: <CheckIcon />, label: 'Dont edit', value: 'Dont edit' },
];

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const BacklogCreateScreen: React.FC<IProps> = () => {
	const [valueTitle, setValueTitle] = useState('');
	const [value, onChangeText] = useState('');
	//Date time states
	const [date, setDate] = useState(new Date());
	const [openDate, setOpenDate] = useState(false);
	const [time, setTime] = useState(new Date());
	const [openTime, setOpenTime] = useState(false);

	//Media components states
	const [mediaAssets, setMediaAssets] = useState<CropImage[]>([]);
	const [activeMedia, setActiveMedia] = useState<CropImage | null>(null);
	const [documentAssets, setDocumentAssets] = useState<DocumentPickerResponse[]>([]);
	const [activeDocument, setActiveDocument] = useState<DocumentPickerResponse | null>(null);

	const navigation = useNavigation<navigationStack>();

	return (
		<SafeAreaView style={tw`w-full h-full bg-greyBg`}>
			<View style={tw`bg-red/20 p-2`}>
				<Text style={tw`text-red text-center text-xs`}>EDIT MODE</Text>
			</View>
			<ScrollView style={tw`w-full h-full px-3`}>
				<View style={tw`w-full bg-greyBg py-5 pb-40 flex-1`}>
					<View style={tw`flex-row items-center justify-start mb-8`}>
						<ButtonNavigation type={'back'} onPress={() => navigation.navigate(BacklogRoute.Backlog)} />
						<Text style={tw`ml-4 text-xl font-bold`}>New task mobile</Text>
					</View>
					<View style={tw`flex-row justify-between`}>
						<SelectorButton variant={'backlog'} onPress={() => console.log('123')} />
						<SelectorButton variant={'todo'} onPress={() => console.log('123')} />
						<SelectorButton variant={'inProgress'} onPress={() => console.log('123')} />
						<SelectorButton variant={'done'} onPress={() => console.log('123')} />
					</View>

					<View style={tw`flex flex-row items-center justify-between mb-8`}>
						<View style={tw`w-6/12`}>
							<InputComponent
								onChange={setValueTitle}
								value={valueTitle}
								isError={false}
								labelValue='Title'
							/>
						</View>
						<View style={tw`w-5/12`}>
							<Select data={selectPriority} />
						</View>
					</View>

					<View>
						<Text style={tw`mr-2 text-sm font-bold`}>Period</Text>
						<Text style={tw`text-xs text-grey`} ellipsizeMode='clip' numberOfLines={1}>
							------------------------------------------------------------------------------------------------------------------
						</Text>
					</View>

					<View style={tw`pt-5 pb-8 items-start `}>
						<CheckboxInput label='All day' />
						<View style={tw`flex flex-row items-center justify-between w-full`}>
							<View style={tw`flex flex-row items-center justify-between w-full`}>
								<TouchableOpacity
									style={tw`relative w-[47%] rounded border border-grey mt-5 flex flex-row items-center p-3`}
									activeOpacity={1}
									onPress={() => setOpenDate(true)}>
									<Text
										style={tw`absolute left-3 -top-[6px] bg-greyBg px-1 text-grey uppercase text-[10px]`}>
										Due-date
									</Text>
									<CalendarIcon fillIcon={colors.greenInput} />
									<Text style={tw`ml-1`}>{moment(date).format('L')}</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`relative w-[47%] rounded border border-grey mt-5 flex flex-row items-center p-3`}
									activeOpacity={1}
									onPress={() => setOpenTime(true)}>
									<Text
										style={tw`absolute left-3 -top-[6px] bg-greyBg px-1 text-grey uppercase text-[10px]`}>
										Due-time
									</Text>
									<Text style={tw`ml-1`}>{moment(time).format('LT')}</Text>
								</TouchableOpacity>
								<DatePicker
									modal
									mode='date'
									open={openDate}
									date={date}
									onConfirm={date => {
										setOpenDate(false);
										setDate(date);
									}}
									onCancel={() => {
										setOpenDate(false);
									}}
								/>
								<DatePicker
									modal
									mode='time'
									open={openTime}
									date={time}
									onConfirm={time => {
										setOpenTime(false);
										setTime(time);
									}}
									onCancel={() => {
										setOpenTime(false);
									}}
								/>
							</View>
						</View>

						<View style={tw`pt-5 w-full mb-4`}>
							<Text style={tw`mr-2 text-sm font-bold`}>Description</Text>
							<Text style={tw`text-xs text-grey`} ellipsizeMode='clip' numberOfLines={1}>
								------------------------------------------------------------------------------------------------------------------
							</Text>
						</View>
						<View style={tw`pt-5 pb-8 rounded border border-grey w-full`}>
							<TextInput
								placeholder='Enter your description'
								multiline
								numberOfLines={4}
								onChangeText={text => onChangeText(text)}
								value={value}
								style={{ padding: 10 }}
							/>
						</View>

						<View>
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
							<AccordionItem
								title='Gallery'
								additionalText={`${mediaAssets.length} pictures`}
								styleAdditionalText='text-grey'
								styleAdditionalContainer='w-[93%]'
								styleBg='bg-greyBg w-full'
								styleTitle='normal-case'
								isShadow={false}
								isBorderDotted={true}>
								<MediaRow
									title={'Please add some photos to your gallery'}
									onUpload={assets => {
										setMediaAssets([...mediaAssets, ...assets]);
									}}
									assets={mediaAssets}
									onItemClick={setActiveMedia}
								/>
							</AccordionItem>
							<AccordionItem
								title='Documents'
								additionalText={`${documentAssets.length} documents`}
								styleAdditionalText='text-grey'
								styleAdditionalContainer='w-[92%]'
								styleBg='bg-greyBg w-full'
								styleTitle='normal-case'
								isShadow={false}
								isBorderDotted={true}>
								<DocumentRow
									title={'Please add some files to your documents'}
									onUpload={documents => {
										setDocumentAssets([...documentAssets, ...documents]);
									}}
									documents={documentAssets}
									onItemClick={setActiveDocument}
								/>
							</AccordionItem>
						</View>

						<View style={tw`mt-4 mb-4 w-full`}>
							<Text style={tw`mr-2 text-sm font-bold`}>Assignees</Text>
							<Text style={tw`text-xs text-grey`} ellipsizeMode='clip' numberOfLines={1}>
								-----------------------------------------------------------------------------------------------------------------------
							</Text>
						</View>
						<View style={tw`w-full`}>
							<Select label='Assignees' iconStart={<GroupAddIcon />} data={selectData} />
							<View style={tw`flex-row items-center justify-between py-2 border-b border-grey`}>
								<View style={tw`flex-row items-center w-40%`}>
									<AvatarItem
										firstName='anna'
										lastName='Petrov'
										size='small'
										isOwner={true}
										isOnline={true}
										src=''
										id={213}
									/>
									<View style={tw`ml-2`}>
										<Text style={tw`text-xs mb-1 font-bold`}>Anna Petrova</Text>
										<Text style={tw`text-xs text-grey`}>Friend</Text>
									</View>
								</View>
								<View style={tw`w-40% relative`}>
									<Select data={selectDataEdit} styleModal='w-30% left-44%' styleBorder='border-0' />
								</View>
								<View style={tw`w-11`}>
									<ButtonBinSquare onPress={() => console.log('123')} variant='noBordered' />
								</View>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<BottomButtons
				leftButton={
					<DefaultButton
						title='Cancel'
						variant='outlined'
						size='md'
						onPress={() => navigation.navigate(BacklogRoute.Backlog)}
					/>
				}
				rightButton={<DefaultButton title='Save' variant='contained' size='md' />}
			/>
		</SafeAreaView>
	);
};
