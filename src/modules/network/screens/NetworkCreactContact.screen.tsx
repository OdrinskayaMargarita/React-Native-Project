import * as React from 'react';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import moment from 'moment/moment';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { Image as CropImage } from 'react-native-image-crop-picker';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { CheckboxInput } from 'src/shared/components/atoms/inputs/CheckboxInput/CheckboxInput.component';
import { InputPhone } from 'src/shared/components/atoms/inputs/PhoneInput/PhoneInput.component';
import { CalendarIcon } from 'src/shared/components/icons/Calendar.icon';

import { colors, tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { AccordionItem } from '../../../shared/components/atoms/Accordion/Accordion.component';
import { BottomButtons } from '../../../shared/components/atoms/BottomButtons/BottomButtons.component';
import { DocumentRow } from '../../../shared/components/atoms/DocumentRow/DocumentRow.component';
import { InputComponent } from '../../../shared/components/atoms/inputs/Input/Input.component';
import { Select } from '../../../shared/components/atoms/inputs/SelectInput/Select.component';
import { MediaRow } from '../../../shared/components/atoms/MediaRow/MediaRow.component';
import { DocumentModal } from '../../../shared/components/atoms/Modals/DocumentModal';
import { MediaModal } from '../../../shared/components/atoms/Modals/MediaModal';
import { SmallPlusOutlined } from '../../../shared/components/icons/SmallPlusOutlined.icon';
import { TemplateContainerScroll } from '../../../shared/components/templates/Template.container-scroll';
import { NetworkRoute } from '../enums/networkRoute.enum';

interface IProps {
	isVisible: boolean;
	isEdit?: boolean;
}

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const NetworkCreateContactScreen: React.FC<IProps> = ({ isEdit = false }) => {
	const navigation = useNavigation<navigationStack>();

	const [date, setDate] = useState<Date>(new Date());
	const [openDate, setOpenDate] = useState(false);

	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [email, setEmail] = useState('');
	const [company, setCompany] = useState('');
	const [url, setUrl] = useState('');
	const [socialMedia, setSocialMedia] = useState('');

	const [mediaAssets, setMediaAssets] = useState<CropImage[]>([]);
	const [activeMedia, setActiveMedia] = useState<CropImage | null>(null);
	const [documentAssets, setDocumentAssets] = useState<DocumentPickerResponse[]>([]);
	const [activeDocument, setActiveDocument] = useState<DocumentPickerResponse | null>(null);

	const dataGender = [
		{ label: 'Male', value: 'Male' },
		{ label: 'Female', value: 'Female' },
		{ label: 'Unspecified', value: 'Unspecified' },
		{ label: 'Undisclosed', value: 'Undisclosed' },
	];

	const dataPhoneType = [
		{ label: 'Work', value: 'work' },
		{ label: 'Personal', value: 'personal' },
	];

	return (
		<SafeAreaView style={tw`w-full h-full bg-greyBg`}>
			{isEdit ? (
				<View style={tw`bg-red/20 p-2`}>
					<Text style={tw`text-red text-center text-xs`}>EDIT MODE</Text>
				</View>
			) : null}

			<TemplateContainerScroll>
				<View style={tw`pb-20`}>
					<View style={tw`w-full bg-greyBg flex-row items-center justify-start mb-5`}>
						<ButtonNavigation type={'back'} onPress={() => navigation.navigate(NetworkRoute.Network)} />
						<Text style={tw`ml-4 text-xl font-bold`}>Create contact</Text>
					</View>

					<View style={tw`mb-5 w-full relative items-start`}>
						<View style={tw`w-full mb-2`}>
							<Text style={tw`font-bold text-sm`}>Main</Text>
							<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs`}>
								--------------------------------------------------------------------
								--------------------------------------------------------------------
							</Text>
						</View>

						<InputComponent
							onChange={setName}
							value={name}
							labelValue={'FIRST NAME*'}
							styleContainer='my-2'
						/>
						<InputComponent
							onChange={setSurname}
							value={surname}
							labelValue={'LAST NAME*'}
							styleContainer='my-2'
						/>
						<InputComponent
							onChange={setCompany}
							value={company}
							labelValue={'COMPANY'}
							styleContainer='my-2'
						/>
						<View style={tw`mb-2 mt-1`}>
							<CheckboxInput label='Make as a contact title' />
						</View>
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
						<View style={tw`flex-row items-center justify-between w-full relative`}>
							<TouchableOpacity
								style={tw`relative w-6/12 rounded border border-grey my-2 mt-3 flex flex-row items-center p-3`}
								activeOpacity={1}
								onPress={() => setOpenDate(true)}>
								<Text
									style={tw`absolute left-3 -top-[6px] bg-greyBg px-1 text-grey uppercase text-[10px]`}>
									Due-date
								</Text>
								<CalendarIcon fillIcon={colors.greenInput} />
								<Text style={tw`ml-1`}>{moment(date).format('L')}</Text>
							</TouchableOpacity>
							<View style={tw`w-43% relative`}>
								<Select data={dataGender} label='GENDER' styleModal='left-55% w-43%' />
							</View>
						</View>
					</View>

					<View style={tw`mb-5`}>
						<View style={tw`w-full mb-2`}>
							<Text style={tw`font-bold text-sm`}>Phone number</Text>
							<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs`}>
								--------------------------------------------------------------------
								--------------------------------------------------------------------
							</Text>
						</View>
						<View style={tw`mb-2`}>
							<Select data={dataPhoneType} label='TYPE' />
						</View>
						<View style={tw`flex-row items-center justify-between w-full`}>
							<InputPhone style='w-92%' />
							<TouchableOpacity style={tw`ml-2`}>
								<SmallPlusOutlined width={16} height={16} />
							</TouchableOpacity>
						</View>
					</View>

					<View style={tw`mb-5`}>
						<View style={tw`w-full mb-2`}>
							<Text style={tw`font-bold text-sm`}>Email</Text>
							<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs`}>
								--------------------------------------------------------------------
								--------------------------------------------------------------------
							</Text>
						</View>
						<View>
							<Select data={dataPhoneType} label='TYPE' />
						</View>
						<View style={tw`flex-row items-center justify-between w-full`}>
							<InputComponent
								onChange={setEmail}
								value={email}
								labelValue={'EMAIL'}
								styleContainer='w-92%'
							/>
							<TouchableOpacity style={tw`ml-2`}>
								<SmallPlusOutlined width={16} height={16} />
							</TouchableOpacity>
						</View>
					</View>

					<View style={tw`mb-5`}>
						<View style={tw`w-full mb-2`}>
							<Text style={tw`font-bold text-sm`}>Credentials</Text>
							<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs`}>
								--------------------------------------------------------------------
								--------------------------------------------------------------------
							</Text>
						</View>
						<View style={tw`w-4/12`}>
							<Select data={dataPhoneType} label='TYPE' />
						</View>
						<View style={tw`flex-row items-center justify-between w-full`}>
							<InputComponent onChange={setUrl} value={url} labelValue={'URL'} styleContainer='w-92%' />
							<TouchableOpacity style={tw`ml-2`}>
								<SmallPlusOutlined width={16} height={16} />
							</TouchableOpacity>
						</View>
						<View style={tw`w-4/12`}>
							<Select data={dataPhoneType} label='TYPE' />
						</View>
						<View style={tw`flex-row items-center justify-between w-full`}>
							<InputComponent
								onChange={setSocialMedia}
								value={socialMedia}
								labelValue={'SOCIAL MEDIA'}
								styleContainer='w-92%'
							/>
							<TouchableOpacity style={tw`ml-2`}>
								<SmallPlusOutlined width={16} height={16} />
							</TouchableOpacity>
						</View>
					</View>

					<View style={tw`mb-5`}>
						<View style={tw`w-full mb-2`}>
							<Text style={tw`font-bold text-sm`}>Adress</Text>
							<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs`}>
								--------------------------------------------------------------------
								--------------------------------------------------------------------
							</Text>
						</View>
						<View style={tw`w-4/12`}>
							<Select data={dataPhoneType} label='TYPE' />
						</View>
						<View style={tw`flex-row items-center justify-between w-full`}>
							<InputComponent
								onChange={setSocialMedia}
								value={socialMedia}
								labelValue={'LOCATION'}
								styleContainer='w-92%'
							/>
							<TouchableOpacity style={tw`ml-2`}>
								<SmallPlusOutlined width={16} height={16} />
							</TouchableOpacity>
						</View>

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
							styleBg='bg-greyBg w-full'
							styleTitle='normal-case'
							isShadow={false}>
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
							styleBg='bg-greyBg w-full'
							styleTitle='normal-case'
							isShadow={false}>
							<DocumentRow
								title={'Please add some files to your documents'}
								onUpload={documents => {
									setDocumentAssets([...documentAssets, ...documents]);
								}}
								documents={documentAssets}
								onItemClick={setActiveDocument}
							/>
						</AccordionItem>
						{/*<AccordionItem*/}
						{/*	title='Sharing'*/}
						{/*	styleAdditionalText='text-grey'*/}
						{/*	styleBg='bg-greyBg w-full'*/}
						{/*	styleTitle='normal-case'*/}
						{/*	isShadow={false}>*/}
						{/*	<Select*/}
						{/*		iconStart={<GroupAddIcon />}*/}
						{/*		data={selectData}*/}
						{/*		label='Select Member to share with'*/}
						{/*	/>*/}
						{/*</AccordionItem>*/}
					</View>
				</View>
			</TemplateContainerScroll>
			<BottomButtons
				leftButton={
					<DefaultButton
						title='Cancel'
						variant='outlined'
						size='md'
						onPress={() => navigation.navigate(NetworkRoute.Network)}
					/>
				}
				rightButton={<DefaultButton title='Invite' variant='contained' size='md' />}
			/>
		</SafeAreaView>
	);
};
