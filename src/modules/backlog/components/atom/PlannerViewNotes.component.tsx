import * as React from 'react';
import { useState } from 'react';

import { Text, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { AvatarItem } from '../../../../shared/components/atoms/Avatar/Avatar.component';
import { SidebarListNotes } from '../../../../shared/components/atoms/SidebarNotes/SidebarListNotes';

interface IProps {
	title?: string;
}

interface typeNotesItem {
	value: string;
	title: string;
	keyItem: number;
}

export const PlannerViewNotes: React.FC<IProps> = () => {
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
		<View style={tw`my-2`}>
			<SidebarListNotes
				title={titleNoteInput}
				value={valueNoteInput}
				onChangeValue={setValueNoteInput}
				onChangeTitle={setTitleNoteInput}
				addNoteItem={addNoteItem}
				arrNotesList={arrNotesList}
				deleteNoteListItem={deleteNoteListItem}
				titlePage={
					<View style={tw`border-b border-grey pt-4 pb-2 mb-5 flex-row items-center`}>
						<AvatarItem firstName='Kyryllo' lastName='Sotnykov' size='small' src='' id={3543} />
						<Text style={tw`ml-2`}>Kyryllo Sotnykov</Text>
					</View>
				}
			/>
		</View>
	);
};
