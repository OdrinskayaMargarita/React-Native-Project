import * as React from 'react';

import moment from 'moment';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import { tw } from '@lib/tailwind';

import { BinIcon } from '../../icons/Bin.icon';

interface IProps {
	item: IItem;
	deleteNoteListItem: any;
}

interface IItem {
	id: number;
	title: string;
	body: string;
	updated_at: string;
	creator: {
		avatar: {
			additional_info: {
				size_urls: {
					avatar_icon: string;
				};
			};
		};
	};
}

export const NoteCard: React.FC<IProps> = ({ item, deleteNoteListItem }) => {
	const datePublication = moment(item.updated_at).format('LLLL');
	const imageUrl =
		item.creator.avatar.additional_info.size_urls.avatar_icon ?? 'https://reactnative.dev/img/tiny_logo.png';

	return (
		<View style={tw`bg-white border border-lightGrey my-3 pt-3 px-[10px] rounded-md shadow`}>
			<View style={tw`bg-white rounded-md flex flex-row items-center mb-[10px] `}>
				<View style={tw`w-1/12 mr-2`}>
					<Image style={tw`w-6 h-6 `} source={{ uri: imageUrl }} />
				</View>
				<Text style={tw`font-semibold w-9/12`} numberOfLines={2} ellipsizeMode='tail'>
					{item.title}
				</Text>
			</View>
			<ScrollView style={tw`h-27`}>
				<Text style={tw`leading-5 text-sm`}>{item.body}</Text>
			</ScrollView>
			<View style={tw`bg-white pt-[10px] pb-2 flex flex-row justify-between`}>
				<Text>{datePublication}</Text>
				<TouchableOpacity activeOpacity={0.6} onPress={deleteNoteListItem}>
					<BinIcon />
				</TouchableOpacity>
			</View>
		</View>
	);
};
