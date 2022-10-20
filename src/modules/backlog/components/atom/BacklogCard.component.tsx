import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { AdditionalInfo } from 'src/shared/components/atoms/AdditionalInfo/AdditionalInfo.component';
import { AvatarGroup } from 'src/shared/components/atoms/Avatar/AvatarGroup.component';
import { FlagIcon } from 'src/shared/components/icons/Flag.icon';

import { tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../../navigations/rootStackParams.interface';
import { TextItem } from '../../../../shared/components/atoms/TextItem/TextItem.component';
import { BacklogRoute } from '../../enums/BacklogRoute.enum';

interface IProps {
	title?: string;
}

const users = [
	{
		avatar: {
			additional_info: {
				in_progress: false,
				size_urls: {
					avatar_icon: '',
					avatar_profile: '',
				},
				sizes: ['avatar_icon', 'avatar_profile'],
			},
			created_at: '2022-05-09 07:19:36',
			filename: 'original',
			id: 20682,
			original_filename: '20220509_1019.jpeg',
			url: '',
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
					avatar_icon: '',
					avatar_profile: '',
				},
				sizes: ['avatar_icon', 'avatar_profile'],
			},
			created_at: '2022-05-09 07:19:36',
			filename: 'original',
			id: 20682,
			original_filename: '20220509_1019.jpeg',
			url: '',
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
					avatar_icon: '',
					avatar_profile: '',
				},
				sizes: ['avatar_icon', 'avatar_profile'],
			},
			created_at: '2022-05-31 13:35:24',
			filename: 'original',
			id: 21100,
			original_filename: '20220531_1635.jpeg',
			url: '',
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
					avatar_icon: '',
					avatar_profile: '',
				},
				sizes: ['avatar_icon', 'avatar_profile'],
			},
			created_at: '2022-05-31 13:35:24',
			filename: 'original',
			id: 21100,
			original_filename: '20220531_1635.jpeg',
			url: '',
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
				avatar_icon: '',
				avatar_profile: '',
			},
			sizes: ['avatar_icon', 'avatar_profile'],
		},
		created_at: '2022-05-31 13:35:24',
		filename: 'original',
		id: 21100,
		original_filename: '20220531_1635.jpeg',
		url: '',
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

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const BacklogCard: React.FC<IProps> = () => {
	const navigation = useNavigation<navigationStack>();

	return (
		<View style={tw`my-2 bg-white`}>
			<TouchableOpacity
				activeOpacity={0.9}
				style={tw`p-3 bg-white rounded w-full shadow bg-white`}
				onPress={() => navigation.navigate(BacklogRoute.BacklogItemView)}>
				<View style={tw`flex flex-row items-center justify-start mb-3`}>
					<Text style={tw`text-sm font-bold mr-1`}>Backlog Task room cleaning</Text>
					<FlagIcon />
				</View>
				<View style={tw`flex-row items-center justify-between`}>
					<TextItem valueInput='09/05/22' typeInput='Due-date' style='w-full' />
				</View>
				<TextItem valueInput='Figure out a target number' typeInput='Description' />
				<View style={tw`flex flex-row items-center justify-between mt-4 z-100`}>
					<View style={tw`flex-row w-48% justify-between`}>
						<AvatarGroup users={users} owner={owner} />
						<View>
							<Text style={tw`text-[6px] text-grey`}>|</Text>
							<Text style={tw`text-[6px] text-grey`}>|</Text>
							<Text style={tw`text-[6px] text-grey`}>|</Text>
							<Text style={tw`text-[6px] text-grey`}>|</Text>
						</View>
					</View>
					<AdditionalInfo
						photoCount={21}
						commentCount={34}
						documentCount={34}
						isUnreadComments={true}
						hasUnreadDocuments={false}
						hasUnreadPhotos={true}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};
