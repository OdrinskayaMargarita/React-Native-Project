import * as React from 'react';
import { useState } from 'react';

import { ScrollView, Text, View } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { Image as CropImage } from 'react-native-image-crop-picker';

import { tw } from '@lib/tailwind';

import { AccordionItem } from '../../../shared/components/atoms/Accordion/Accordion.component';
import { AdditionalInfo } from '../../../shared/components/atoms/AdditionalInfo/AdditionalInfo.component';
import { AvatarItem } from '../../../shared/components/atoms/Avatar/Avatar.component';
import { AvatarGroup } from '../../../shared/components/atoms/Avatar/AvatarGroup.component';
import { DefaultButton } from '../../../shared/components/atoms/buttons/Button/Button.component';
import { ButtonBinSquare } from '../../../shared/components/atoms/buttons/ButtonBinSquare/ButtonBinSquare.component';
import { ButtonNavigation } from '../../../shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { ButtonSendSquare } from '../../../shared/components/atoms/buttons/ButtonSendSquare/ButtonSendSquare.component';
import { PlusButtonContained } from '../../../shared/components/atoms/buttons/PlusButton/PlusButtonContained.component';
import { PlusButtonSmall } from '../../../shared/components/atoms/buttons/PlusButtonSmall/PlusButtonSmall.component';
import { DocumentRow } from '../../../shared/components/atoms/DocumentRow/DocumentRow.component';
import { MainHeader } from '../../../shared/components/atoms/Headers/MainHeader.component';
import { InputPhone } from '../../../shared/components/atoms/inputs/PhoneInput/PhoneInput.component';
import { RadioButton } from '../../../shared/components/atoms/inputs/RadioButton/RadioButton.component';
import { SearchInput } from '../../../shared/components/atoms/inputs/SearchInput/SearchInput.component';
import { Select } from '../../../shared/components/atoms/inputs/SelectInput/Select.component';
import { ToggleButton } from '../../../shared/components/atoms/inputs/ToggleButton/ToggleButton.component';
import { InviteCard } from '../../../shared/components/atoms/InviteCard/InviteCard.component';
import { Link } from '../../../shared/components/atoms/Link/Link.component';
import { MediaRow } from '../../../shared/components/atoms/MediaRow/MediaRow.component';
import { DocumentModal } from '../../../shared/components/atoms/Modals/DocumentModal';
import { MediaModal } from '../../../shared/components/atoms/Modals/MediaModal';
import { Notification } from '../../../shared/components/atoms/Notification/Notification.component';
import { PopoverUser } from '../../../shared/components/atoms/Popover/Popover.component';
import { PreloaderItem } from '../../../shared/components/atoms/Preloader/Preloader.component';
import { SelectorButton } from '../../../shared/components/atoms/SelectorButton/SelectorButton.component';
import { StatusBadge } from '../../../shared/components/atoms/StatusBadge/StatusBadge.component';
import { AppStoreButton } from '../../../shared/components/atoms/StoreButton/AppStoreButton.component';
import { PlayMarketButton } from '../../../shared/components/atoms/StoreButton/PlayMarketButton.component';

export const UIScreen = () => {
	const [mediaAssets, setMediaAssets] = useState<CropImage[]>([]);
	const [activeMedia, setActiveMedia] = useState<CropImage | null>(null);
	const [documentAssets, setDocumentAssets] = useState<DocumentPickerResponse[]>([]);
	const [activeDocument, setActiveDocument] = useState<DocumentPickerResponse | null>(null);
	const [valueSearch, setValueSearch] = useState('');

	const users = [
		{
			avatar: {
				additional_info: {
					in_progress: false,
					size_urls: {
						avatar_icon: '/storage/avatar_preview/2021/11/02/aFG3DwFGV0Xcqctv/avatar_icon.jpeg',
						avatar_profile: '/storage/avatar_preview/2021/11/02/aFG3DwFGV0Xcqctv/avatar_profile.jpeg',
					},
					sizes: ['avatar_icon', 'avatar_profile'],
				},
				created_at: '2022-05-09 07:19:36',
				filename: 'original',
				id: 20682,
				original_filename: '20220509_1019.jpeg',
				url: '/storage/avatar_preview/2021/11/02/aFG3DwFGV0Xcqctv/original.jpeg',
			},
			connection_role: 'Friend',
			contacts: null,
			entity_type: 'friend',
			first_name: 'Вася',
			id: 1286,
			is_can_view_media: false,
			is_fake: 0,
			last_name: 'Бой',
			package: 'personal_hub',
			recurring_group: null,
			role: 'viewer',
			status: 'done',
		},
		{
			avatar: {
				additional_info: {
					in_progress: false,
					size_urls: {
						avatar_icon: '/storage/avatar_preview/2022/06/01/yTe5zQuC1B5VWA86/avatar_icon.jpeg',
						avatar_profile: '/storage/avatar_preview/2022/06/01/yTe5zQuC1B5VWA86/avatar_profile.jpeg',
					},
					sizes: ['avatar_icon', 'avatar_profile'],
				},
				created_at: '2022-05-09 07:19:36',
				filename: 'original',
				id: 20682,
				original_filename: '20220509_1019.jpeg',
				url: '/storage/avatar_preview/2022/06/01/yTe5zQuC1B5VWA86/original.jpeg',
			},
			connection_role: 'Friend',
			contacts: null,
			entity_type: 'friend',
			first_name: 'Ivan',
			id: 1282,
			is_can_view_media: false,
			is_fake: 0,
			last_name: 'Vlasenko',
			package: 'personal_hub',
			recurring_group: null,
			role: 'viewer',
			status: 'done',
		},
		{
			avatar: null,
			connection_role: 'Friend',
			contacts: null,
			entity_type: 'friend',
			first_name: 'andrii',
			id: 1276,
			is_can_view_media: false,
			is_fake: 0,
			last_name: 'shcherbyna',
			package: 'personal_hub',
			recurring_group: null,
			role: 'viewer',
			status: 'pending',
		},
		{
			avatar: {
				additional_info: {
					in_progress: false,
					size_urls: {
						avatar_icon: '/storage/avatar_preview/2022/05/31/haMgrzBcusSUSXMv/avatar_icon.jpeg',
						avatar_profile: '/storage/avatar_preview/2022/05/31/haMgrzBcusSUSXMv/avatar_profile.jpeg',
					},
					sizes: ['avatar_icon', 'avatar_profile'],
				},
				created_at: '2022-05-31 13:35:24',
				filename: 'original',
				id: 21100,
				original_filename: '20220531_1635.jpeg',
				url: '/storage/avatar_preview/2022/05/31/haMgrzBcusSUSXMv/original.jpeg',
			},
			connection_role: 'Parent',
			contacts: null,
			entity_type: 'friend',
			first_name: 'Mila',
			id: 1279,
			is_can_view_media: false,
			is_fake: 0,
			last_name: 'Petrenko',
			package: 'personal_hub',
			recurring_group: null,
			role: 'viewer',
			status: 'in-progress',
		},
		{
			avatar: {
				additional_info: {
					in_progress: false,
					size_urls: {
						avatar_icon: '/storage/avatar_preview/2021/11/08/laGjfKyS7fqyG9zM/avatar_icon.jpeg',
						avatar_profile: '/storage/avatar_preview/2021/11/08/laGjfKyS7fqyG9zM/avatar_profile.jpeg',
					},
					sizes: ['avatar_icon', 'avatar_profile'],
				},
				created_at: '2022-05-31 13:35:24',
				filename: 'original',
				id: 21100,
				original_filename: '20220531_1635.jpeg',
				url: '/storage/avatar_preview/2021/11/08/laGjfKyS7fqyG9zM/original.jpeg',
			},
			connection_role: 'Parent',
			contacts: null,
			entity_type: 'friend',
			first_name: 'Stas',
			id: 1281,
			is_can_view_media: false,
			is_fake: 0,
			last_name: 'Khort',
			package: 'personal_hub',
			recurring_group: null,
			role: 'viewer',
			status: 'in-progress',
		},
	];
	const owner = {
		avatar: {
			additional_info: {
				in_progress: false,
				size_urls: {
					avatar_icon: '/storage/avatar_preview/2022/04/15/ltOa1jzFVvrXHqJZ/avatar_icon.jpeg',
					avatar_profile: '/storage/avatar_preview/2022/04/15/ltOa1jzFVvrXHqJZ/avatar_profile.jpeg',
				},
				sizes: ['avatar_icon', 'avatar_profile'],
			},
			created_at: '2022-05-31 13:35:24',
			filename: 'original',
			id: 21100,
			original_filename: '20220531_1635.jpeg',
			url: '/storage/avatar_preview/2022/04/15/ltOa1jzFVvrXHqJZ/original.jpeg',
		},
		connection_role: 'Parent',
		contacts: null,
		entity_type: 'friend',
		first_name: 'Юрчик',
		id: 1279,
		is_can_view_media: false,
		is_fake: 0,
		last_name: 'Мухомор',
		package: 'personal_hub',
		recurring_group: null,
		role: 'viewer',
		status: 'in-progress',
	};

	const ListRadio = [
		{ id: 1, isDisabled: true, label: 'label1', value: 'value1' },
		{ id: 2, isDisabled: false, label: 'label2', value: 'value2' },
		{ id: 3, isDisabled: false, label: 'label3', value: 'value3' },
	];

	const selectData = [
		{
			label: 'label',
			value: 'test1',
		},
		{
			label: 'label',
			value: 'test2',
		},
		{
			label: 'label',
			value: 'test3',
		},
		{
			label: 'label',
			value: 'test4',
		},
		{
			label: 'label',
			value: 'test5',
		},
	];

	const menuList = [
		{
			isDisabled: false,
			label: 'Appearance',
		},
		{
			isDisabled: false,
			label: 'Task',
		},
		{
			isDisabled: true,
			label: 'Event',
		},
		{
			isDisabled: true,
			label: 'Meeting',
			tooltipTitle: 'hello',
		},
	];

	const item = {
		avatar: {
			url: '',
		},
		connection_role: 'Parent',
		contacts: {
			current_address: {
				map: {
					lat: 1313,
					lng: 33,
				},
				physical_address: 'test',
			},
			emails: [
				{
					type: 'home',
					value: 'hubmee',
				},
			],
			hometown_address: {
				map: {
					lat: 1313,
					lng: 33,
				},
				physical_address: 'test test',
			},
			is_same_hometown: false,
			phones: [
				{
					type: 'home',
					value: '+380635767528',
				},
			],
		},
		entity_type: 'friend',
		first_name: 'Юрчик',
		id: 1279,
		is_can_view_media: false,
		is_fake: 0,
		last_name: 'Мухомор',
		package: 'personal_hub',
		recurring_group: null,
		role: 'viewer',
		status: 'in-progress',
	};

	return (
		<ScrollView style={tw`w-full h-full bg-white`}>
			<MainHeader title={'UI'} />
			<View style={tw`px-4  pb-6`}>
				<View>
					<Text style={tw`font-bold text-center`}>BUTTONS</Text>
					<DefaultButton title='Contained default xs primary' variant='contained' size='xs' color='primary' />
					<DefaultButton title='Contained default sm primary' variant='contained' size='sm' color='primary' />
					<DefaultButton title='Contained default md primary' variant='contained' size='md' color='primary' />
					<DefaultButton
						title='Contained default xs primary'
						variant='contained'
						size='xs'
						color='secondary'
					/>
					<DefaultButton
						title='Contained default sm primary'
						variant='contained'
						size='sm'
						color='secondary'
					/>
					<DefaultButton
						title='Contained default md primary'
						variant='contained'
						size='md'
						color='secondary'
					/>
					<DefaultButton title='Contained default xs primary' variant='outlined' size='xs' color='primary' />
					<DefaultButton title='Contained default sm primary' variant='outlined' size='sm' color='primary' />
					<DefaultButton title='Contained default md primary' variant='outlined' size='md' color='primary' />
					<DefaultButton
						title='Contained default xs primary'
						variant='outlined'
						size='xs'
						color='secondary'
					/>
					<DefaultButton
						title='Contained default sm primary'
						variant='outlined'
						size='sm'
						color='secondary'
					/>
					<DefaultButton
						title='Contained default md primary'
						variant='outlined'
						size='md'
						color='secondary'
					/>
					<DefaultButton
						title='Contained default md primary'
						variant='contained'
						size='md'
						color='primary'
						isDisabled={true}
					/>
					<DefaultButton
						// startIcon='delete'
						endIcon='close'
						title='Contained default md primary'
						variant='outlined'
						size='md'
						color='secondary'
					/>
					<ToggleButton />
					<View style={tw` flex flex-row items-center justify-between my-2`}>
						<ButtonBinSquare onPress={() => console.log('bin')} variant='contained' />
						<ButtonBinSquare onPress={() => console.log('bin')} variant='outlined' />
						<ButtonBinSquare isDisabled={true} onPress={() => console.log('bin')} />
						<ButtonSendSquare onPress={() => console.log('send')} variant='contained' />
						<ButtonSendSquare onPress={() => console.log('send')} variant='outlined' />
						<ButtonSendSquare isDisabled={true} onPress={() => console.log('send')} />
					</View>
					<View style={tw` flex flex-row items-center justify-between my-2`}>
						<PlusButtonSmall onPress={() => console.log('plus')} />
						<PlusButtonContained size='sm' onPress={() => console.log('1')} />
						<PlusButtonContained size='sm' onPress={() => console.log('1')} isDisabled={true} />
						<PlusButtonContained size='md' onPress={() => console.log('1')} />
						<PlusButtonContained size='md' onPress={() => console.log('1')} isDisabled={true} />
					</View>
					<View style={tw` flex flex-row items-center justify-between my-2`}>
						<ButtonNavigation type='back' onPress={() => console.log('1')} />
						<ButtonNavigation type='close' onPress={() => console.log('1')} />
						<ButtonNavigation type='next' onPress={() => console.log('1')} />
					</View>
					<View style={tw` flex flex-row items-center justify-between my-2`}>
						<AppStoreButton color='black' onPress={() => console.log('app store')} />
						<PlayMarketButton color='black' onPress={() => console.log('play market')} />
					</View>
					<View style={tw` flex flex-row items-center justify-between my-2`}>
						<AppStoreButton color='color' onPress={() => console.log('app store')} />
						<PlayMarketButton color='color' onPress={() => console.log('play market')} />
					</View>
					<Link key={345} isDisabled={false} label='Link label' />
				</View>
				<View>
					<Text style={tw`uppercase font-bold text-center my-2`}>Avatar</Text>
					<AvatarGroup users={users} owner={owner} />
					<View style={tw`flex flex-row items-center justify-between mt-20`}>
						<AvatarItem firstName='Kyrylo' lastName='Sotnykov' size='small' src={''} id={5} />
						<AvatarItem firstName='Kyrylo' lastName='Sotnykov' size='medium' src={''} id={5} />
						<AvatarItem firstName='Kyrylo' lastName='Sotnykov' size='large' src={''} id={5} />
						<AvatarItem firstName='Kyrylo' lastName='Sotnykov' size='extraLarge' src={''} id={5} />
					</View>
					<View style={tw`border-b-2 border-t-2 border-grey`}>
						<InviteCard
							firstName={'Kyrylo'}
							lastName={'Sotnykov'}
							phone={'+380998776543'}
							email={'kyrylo@gmail.com'}
							status={'friend'}
							src={''}
							id={45}
							inviteButton={true}
						/>
					</View>
				</View>
				<View>
					<Text style={tw`font-bold text-center my-3`}>INPUTS</Text>
					<RadioButton listRadio={ListRadio} name='radioGroup1' />

					<MediaRow
						title={'Please add some photos to your gallery'}
						onUpload={assets => {
							setMediaAssets([...mediaAssets, ...assets]);
						}}
						assets={mediaAssets}
						onItemClick={setActiveMedia}
					/>
					<DocumentRow
						title={'Please add some files to your documents'}
						onUpload={documents => {
							setDocumentAssets([...documentAssets, ...documents]);
						}}
						documents={documentAssets}
						onItemClick={setActiveDocument}
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
					<InputPhone />
					<Select label={'Label select'} data={selectData} />
					<SearchInput onChange={setValueSearch} labelValue='Label for search' value={valueSearch} />
					<AccordionItem
						title={'Accordion'}
						subTitle='some subtitle'
						menuList={menuList}
						isDisabledExpand={true}>
						<View style={tw`bg-yellow p-4`}>
							<Text>Some additional info for dropdown</Text>
						</View>
					</AccordionItem>
					<AccordionItem
						title={'Accordion'}
						subTitle='some subtitle'
						menuList={menuList}
						labelTooltip='label for tooltip'>
						<View style={tw`bg-yellow p-4`}>
							<Text>Some additional info for dropdown</Text>
						</View>
					</AccordionItem>
					<AdditionalInfo photoCount={23} commentCount={34} documentCount={45} hasUnreadDocuments={true} />
					<Notification
						variant={'success'}
						title={'Some title notification'}
						msg={'The task status has been successfully updated.'}
					/>
					<Notification
						title={'Some title notification'}
						variant={'success'}
						msg={'The task status has been successfully updated.'}
					/>
					<Notification
						title={'Some title notification'}
						variant={'error'}
						msg={'The task status has been successfully updated.'}
					/>
					<Notification
						title={'Some title notification'}
						variant={'info'}
						msg={'The task status has been successfully updated.'}
					/>
					<Notification
						title={'Some title notification'}
						variant={'update'}
						msg={'The task status has been successfully updated.'}
					/>
					<Notification
						title={'Some title notification'}
						variant={'maintenance'}
						msg={'The task status has been successfully updated.'}
					/>
					<PopoverUser item={item} userId={234} />
				</View>
				<View>
					<Text style={tw`uppercase text-center my-4 font-bold`}>Statuses</Text>
					<View style={tw`flex flex-row flex-wrap items-center mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='todo' isDisabled={true} />
						<StatusBadge
							isShowBackground={true}
							size='small'
							variant='todo'
							isSquare={true}
							isDisabled={true}
						/>
						<StatusBadge isShowBackground={false} size='small' variant='todo' isDisabled={true} />
						<StatusBadge
							isShowBackground={false}
							size='small'
							isBordered={true}
							variant='todo'
							isDisabled={true}
						/>
						<StatusBadge
							isShowBackground={false}
							size='large'
							isBordered={true}
							variant='todo'
							isDisabled={true}
						/>
						<StatusBadge isShowBackground={true} size='large' variant='todo' isDisabled={true} />
						<StatusBadge isShowBackground={false} size='large' variant='todo' isDisabled={true} />
						<StatusBadge
							isShowBackground={false}
							size='large'
							variant='todo'
							isIcon={false}
							isDisabled={true}
						/>
					</View>
					<View style={tw`flex flex-row flex-wrap items-center mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='todo' />
						<StatusBadge isShowBackground={true} size='small' variant='todo' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='todo' />
						<StatusBadge isShowBackground={false} size='small' isBordered={true} variant='todo' />
						<StatusBadge isShowBackground={false} size='large' isBordered={true} variant='todo' />
						<StatusBadge isShowBackground={true} size='large' variant='todo' />
						<StatusBadge isShowBackground={false} size='large' variant='todo' />
						<StatusBadge isShowBackground={false} size='large' variant='todo' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap items-center  mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='inProgress' />
						<StatusBadge isShowBackground={true} size='small' variant='inProgress' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='inProgress' />
						<StatusBadge isShowBackground={false} size='small' variant='inProgress' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='inProgress' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='inProgress' />
						<StatusBadge isShowBackground={false} size='large' variant='inProgress' />
						<StatusBadge isShowBackground={false} size='large' variant='inProgress' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap  items-center mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='done' />
						<StatusBadge isShowBackground={true} size='small' variant='done' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='done' />
						<StatusBadge isShowBackground={false} size='small' variant='done' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='done' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='done' />
						<StatusBadge isShowBackground={false} size='large' variant='done' />
						<StatusBadge isShowBackground={false} size='large' variant='done' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap  items-center mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='backlog' />
						<StatusBadge isShowBackground={true} size='small' variant='backlog' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='backlog' />
						<StatusBadge isShowBackground={false} size='small' variant='backlog' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='backlog' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='backlog' />
						<StatusBadge isShowBackground={false} size='large' variant='backlog' />
						<StatusBadge isShowBackground={false} size='large' variant='backlog' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap  items-center mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='late' />
						<StatusBadge isShowBackground={true} size='small' variant='late' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='late' />
						<StatusBadge isShowBackground={false} size='small' variant='late' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='late' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='late' />
						<StatusBadge isShowBackground={false} size='large' variant='late' />
						<StatusBadge isShowBackground={false} size='large' variant='late' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap items-center  mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='missed' />
						<StatusBadge isShowBackground={true} size='small' variant='missed' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='missed' />
						<StatusBadge isShowBackground={false} size='small' variant='missed' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='missed' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='missed' />
						<StatusBadge isShowBackground={false} size='large' variant='missed' />
						<StatusBadge isShowBackground={false} size='large' variant='missed' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap items-center  mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='went' />
						<StatusBadge isShowBackground={true} size='small' variant='went' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='went' />
						<StatusBadge isShowBackground={false} size='small' variant='went' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='went' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='went' />
						<StatusBadge isShowBackground={false} size='large' variant='went' />
						<StatusBadge isShowBackground={false} size='large' variant='went' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap  items-center mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='going' />
						<StatusBadge isShowBackground={true} size='small' variant='going' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='going' />
						<StatusBadge isShowBackground={false} size='small' variant='going' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='going' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='going' />
						<StatusBadge isShowBackground={false} size='large' variant='going' />
						<StatusBadge isShowBackground={false} size='large' variant='going' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap  items-center mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='notGoing' />
						<StatusBadge isShowBackground={true} size='small' variant='notGoing' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='notGoing' />
						<StatusBadge isShowBackground={false} size='small' variant='notGoing' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='notGoing' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='notGoing' />
						<StatusBadge isShowBackground={false} size='large' variant='notGoing' />
						<StatusBadge isShowBackground={false} size='large' variant='notGoing' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap  items-center mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='pending' />
						<StatusBadge isShowBackground={true} size='small' variant='pending' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='pending' />
						<StatusBadge isShowBackground={false} size='small' variant='pending' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='pending' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='pending' />
						<StatusBadge isShowBackground={false} size='large' variant='pending' />
						<StatusBadge isShowBackground={false} size='large' variant='pending' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap  items-center mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='maybe' />
						<StatusBadge isShowBackground={true} size='small' variant='maybe' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='maybe' />
						<StatusBadge isShowBackground={false} size='small' variant='maybe' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='maybe' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='maybe' />
						<StatusBadge isShowBackground={false} size='large' variant='maybe' />
						<StatusBadge isShowBackground={false} size='large' variant='maybe' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap items-center  mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='paid' />
						<StatusBadge isShowBackground={true} size='small' variant='paid' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='paid' />
						<StatusBadge isShowBackground={false} size='small' variant='paid' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='paid' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='paid' />
						<StatusBadge isShowBackground={false} size='large' variant='paid' />
						<StatusBadge isShowBackground={false} size='large' variant='paid' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap  items-center mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='noAnswer' />
						<StatusBadge isShowBackground={true} size='small' variant='noAnswer' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='noAnswer' />
						<StatusBadge isShowBackground={false} size='small' variant='noAnswer' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='noAnswer' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='noAnswer' />
						<StatusBadge isShowBackground={false} size='large' variant='noAnswer' />
						<StatusBadge isShowBackground={false} size='large' variant='noAnswer' isIcon={false} />
					</View>
					<View style={tw`flex flex-row flex-wrap  items-center mb-2`}>
						<StatusBadge isShowBackground={true} size='small' variant='scheduled' />
						<StatusBadge isShowBackground={true} size='small' variant='scheduled' isSquare={true} />
						<StatusBadge isShowBackground={false} size='small' variant='scheduled' />
						<StatusBadge isShowBackground={false} size='small' variant='scheduled' isBordered={true} />
						<StatusBadge isShowBackground={false} size='large' variant='scheduled' isBordered={true} />
						<StatusBadge isShowBackground={true} size='large' variant='scheduled' />
						<StatusBadge isShowBackground={false} size='large' variant='scheduled' />
						<StatusBadge isShowBackground={false} size='large' variant='scheduled' isIcon={false} />
					</View>
					<View>
						<Text style={tw`uppercase text-center my-2 font-bold`}>Selector Button</Text>
						<View style={tw` flex flex-row justify-between flex-wrap`}>
							<SelectorButton variant={'todo'} onPress={() => console.log('123')} />
							<SelectorButton variant={'inProgress'} onPress={() => console.log('123')} />
							<SelectorButton variant={'done'} onPress={() => console.log('123')} />
							<SelectorButton variant={'backlog'} onPress={() => console.log('123')} />
							<SelectorButton variant={'late'} onPress={() => console.log('123')} />
							<SelectorButton variant={'missed'} onPress={() => console.log('123')} />
							<SelectorButton variant={'went'} onPress={() => console.log('123')} />
							<SelectorButton variant={'going'} onPress={() => console.log('123')} />
							<SelectorButton variant={'notGoing'} onPress={() => console.log('123')} />
							<SelectorButton variant={'pending'} onPress={() => console.log('123')} />
							<SelectorButton variant={'maybe'} onPress={() => console.log('123')} />
							<SelectorButton variant={'paid'} onPress={() => console.log('123')} />
							<SelectorButton variant={'noAnswer'} onPress={() => console.log('123')} />
							<SelectorButton variant={'scheduled'} onPress={() => console.log('123')} />
							<SelectorButton variant={'todo'} onPress={() => console.log('123')} isDisabled={true} />
						</View>
					</View>
				</View>
				<View style={tw`relative h-20`}>
					<PreloaderItem />
				</View>
			</View>
		</ScrollView>
	);
};
