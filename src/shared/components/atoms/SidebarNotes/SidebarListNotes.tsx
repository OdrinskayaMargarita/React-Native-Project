import * as React from 'react';

import { Text, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { NoteInput } from '../inputs/NoteInput/NoteInput.component';
import { NoteCard } from '../NoteCard/NoteCard.component';

interface IProps {
	value: string;
	title: string;
	onChangeTitle: any;
	onChangeValue: any;
	addNoteItem: any;
	deleteNoteListItem: any;
	arrNotesList: typeNotesItem[];
	titlePage?: JSX.Element | JSX.Element[];
	isTitlePage?: boolean;
}

interface typeNotesItem {
	value: string;
	title: string;
	keyItem: number;
}

export const SidebarListNotes: React.FC<IProps> = ({
	value,
	title,
	onChangeTitle,
	onChangeValue,
	addNoteItem,
	titlePage,
	isTitlePage,
	// deleteNoteListItem,
	// arrNotesList,
}) => {
	const arrayNoteCards = [
		{
			body: 'Bacon ipsum dolor amet bresaola sausage salami doner shankle beef pork loin ham hock, kielbasa fatback buffalo chislic meatball t-bone rump.  Pork belly tri-tip buffalo ',
			creator: {
				avatar: {
					additional_info: {
						in_progress: false,
						size_urls: {
							avatar_icon: 'https://reactnative.dev/img/tiny_logo.png',
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
				first_name: 'Юрчик',
				id: 228,
				last_name: 'Мухомор',
			},
			id: 1488,
			title: 'My note with long title and two lines of text goes here lines of text goes here',
			updated_at: '2022-06-06 15:51:12',
		},
	];

	return (
		<View>
			{isTitlePage && titlePage ? (
				<Text>{titlePage}</Text>
			) : isTitlePage && !titlePage ? (
				<Text style={tw`uppercase mb-6  font-medium text-base`}>Notes</Text>
			) : null}
			<View style={tw`border border-lightGrey rounded-md`}>
				<NoteInput
					title={title}
					value={value}
					onChangeTitle={onChangeTitle}
					onChangeValue={onChangeValue}
					addNoteItem={addNoteItem}
					// deleteNoteListItem={deleteNoteListItem}
				/>
			</View>
			{arrayNoteCards.length
				? arrayNoteCards.map((item, key) => (
						<View key={key}>
							<NoteCard deleteNoteListItem={() => console.log('123')} item={item} />
						</View>
				  ))
				: null}
		</View>
	);
};
