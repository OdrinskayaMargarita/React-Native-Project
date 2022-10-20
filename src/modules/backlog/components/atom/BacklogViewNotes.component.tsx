import * as React from 'react';
import { useState } from 'react';

import { View } from 'react-native';

import { tw } from '@lib/tailwind';

import { SidebarListNotes } from '../../../../shared/components/atoms/SidebarNotes/SidebarListNotes';

interface IProps {
	title?: string;
}

interface typeNotesItem {
	value: string;
	title: string;
	keyItem: number;
}

export const BacklogViewNotes: React.FC<IProps> = () => {
	const [titleNoteInput, setTitleNoteInput] = useState<string>('');
	const [valueNoteInput, setValueNoteInput] = useState<string>('');
	const [arrNotesList, setArrNotesList] = useState<typeNotesItem[]>([]);
	const [numberKeyNoteItem, setNumberKeyNoteItem] = useState<number>(0);

	const addNoteItem = () => {
		setArrNotesList([
			...arrNotesList,
			{ keyItem: numberKeyNoteItem, title: titleNoteInput, value: valueNoteInput },
		]);
		setNumberKeyNoteItem(numberKeyNoteItem + 1);
		setTitleNoteInput('');
		setValueNoteInput('');
	};

	const deleteNoteListItem = () => {
		console.log('delete item');
	};
	return (
		<View style={tw`bg-white h-full py-4`}>
			<SidebarListNotes
				title={titleNoteInput}
				value={valueNoteInput}
				onChangeValue={setValueNoteInput}
				onChangeTitle={setTitleNoteInput}
				addNoteItem={addNoteItem}
				arrNotesList={arrNotesList}
				deleteNoteListItem={deleteNoteListItem}
				isTitlePage={false}
			/>
		</View>
	);
};
