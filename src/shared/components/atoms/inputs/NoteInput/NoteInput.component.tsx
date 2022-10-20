import * as React from 'react';

import moment from 'moment';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { PlusIcon } from '../../../icons/Plus.icon';

interface IProps {
	avatarUrl?: string;
	value: string;
	title: string;
	onChangeTitle: any;
	onChangeValue: any;
	addNoteItem: () => void | Promise<void>;
}

export const NoteInput: React.FC<IProps> = ({ avatarUrl, value, title, onChangeTitle, onChangeValue, addNoteItem }) => {
	const now = new Date();
	const todayDate = moment(now).format('LLL');
	const imageUrl = avatarUrl ?? 'https://reactnative.dev/img/tiny_logo.png';

	return (
		<View style={tw`bg-white px-3 rounded-md pt-2`}>
			<View style={tw`bg-white rounded-md flex flex-row items-center justify-start mb-2 relative w-full`}>
				<View style={tw`w-1/12 w-6 h-6 mr-2`}>
					<Image style={tw` w-full h-full rounded-full`} source={{ uri: imageUrl }} />
				</View>
				<TextInput
					value={title}
					placeholder='Write title'
					placeholderTextColor={colors.grey}
					style={tw`text-black font-semibold w-87%`}
					onChangeText={onChangeTitle}
				/>
			</View>
			<View>
				<TextInput
					maxLength={256}
					placeholder='Write your notes....'
					style={tw`text-sm border-0 text-black h-27 p-2`}
					textAlignVertical='top'
					multiline
					numberOfLines={6}
					onChangeText={text => onChangeValue(text)}
					value={value}
					placeholderTextColor={colors.darkGrey}
				/>
			</View>
			<View style={tw`pt-4 pb-2 bg-white flex flex-row justify-between`}>
				<Text>{todayDate}</Text>
				<TouchableOpacity activeOpacity={0.6} onPress={addNoteItem}>
					<PlusIcon />
				</TouchableOpacity>
			</View>
		</View>
	);
};
