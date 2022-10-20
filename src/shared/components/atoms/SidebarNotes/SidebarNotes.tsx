import * as React from 'react';
import { useState } from 'react';

import {
	View,
	Modal,
	SafeAreaView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	ScrollView,
	Platform,
} from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { CheckListIcon } from '../../icons/CheckList.icon';
import { NotificationIcon } from '../../icons/Notification.icon';
import { PenEditIcon } from '../../icons/PenEdit.icon';
import { ButtonNavigation } from '../buttons/ButtonNavigation/ButtonNavigation.component';

import { SidebarCheckList } from './SidebarCheckList';
import { SidebarListNotes } from './SidebarListNotes';

interface IProps {
	isVisible: boolean;
	onOverlayTap?: () => void | Promise<void>;
	close: () => void | Promise<void>;
}

interface typeCheckItem {
	value: string;
	keyItem: number;
}

interface typeNotesItem {
	value: string;
	title: string;
	keyItem: number;
}

export const SidebarNotes: React.FC<IProps> = ({ isVisible, onOverlayTap, close }) => {
	const [isVisibleCheckList, setIsVisibleCheckList] = useState<boolean>(true);
	const [valueCheckInput, setValueCheckInput] = useState('');
	const [arrCheckListItem, setCheckListItem] = useState<typeCheckItem[]>([]);
	const [numberKeyCheckItem, setNumberKeyCheckItem] = useState<number>(0);

	const [titleNoteInput, setTitleNoteInput] = useState('');
	const [valueNoteInput, setValueNoteInput] = useState('');
	const [arrNotesList, setArrNotesList] = useState<typeNotesItem[]>([]);
	const [numberKeyNoteItem, setNumberKeyNoteItem] = useState<number>(0);

	const addCheckListItem = () => {
		setCheckListItem([...arrCheckListItem, { keyItem: numberKeyCheckItem, value: valueCheckInput }]);
		setNumberKeyCheckItem(numberKeyCheckItem + 1);
		setValueCheckInput('');
	};

	const deleteCheckListItem = (key: number) => {
		setCheckListItem(arrCheckListItem.filter(item => item.keyItem !== key));
	};

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
		<SafeAreaView>
			<Modal animationType='fade' transparent={true} visible={isVisible}>
				<View style={tw`${Platform.OS === 'ios' ? 'pt-10' : 'pt-0'}`}>
					<TouchableOpacity
						activeOpacity={1}
						onPressOut={onOverlayTap}
						style={tw`flex h-full justify-center items-start relative`}>
						<View style={tw`w-full h-full bg-black absolute opacity-80`} />
						<View style={tw`absolute right-3 top-3 z-50`}>
							<ButtonNavigation type={'next'} onPress={close} />
						</View>
						<TouchableWithoutFeedback>
							<View style={tw`flex w-full h-full bg-white absolute right-0 flex-row items-start`}>
								<View style={tw`w-20 pt-4 bg-[#FAFAFA] h-full items-center`}>
									<View style={tw`p-2`}>
										<TouchableOpacity
											style={tw`items-center justify-center w-11 h-11 rounded-md bg-[#FAFAFA]`}>
											<NotificationIcon fillIcon={colors.darkGrey} />
										</TouchableOpacity>
									</View>
									<View style={tw`px-2 py-3 border-t border-[#F3F3F3]`}>
										<TouchableOpacity
											onPress={() => setIsVisibleCheckList(true)}
											style={tw`items-center justify-center w-11 h-11 rounded-md ${
												isVisibleCheckList ? 'bg-greenInput' : 'bg-[#FAFAFA]'
											}`}>
											<CheckListIcon
												fillIcon={isVisibleCheckList ? colors.white : colors.darkGrey}
											/>
										</TouchableOpacity>
									</View>
									<View style={tw`px-2 py-3 border-t border-[#F3F3F3]`}>
										<TouchableOpacity
											onPress={() => setIsVisibleCheckList(false)}
											style={tw`items-center justify-center w-11 h-11 rounded-md ${
												!isVisibleCheckList ? 'bg-greenInput' : 'bg-[#FAFAFA]'
											}`}>
											<PenEditIcon
												fillIcon={!isVisibleCheckList ? colors.white : colors.darkGrey}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<ScrollView style={tw` w-full h-full pt-6 px-3 w-10/12`}>
									{isVisibleCheckList ? (
										<SidebarCheckList
											valueInput={valueCheckInput}
											setValueInput={setValueCheckInput}
											addListItem={addCheckListItem}
											arrListItem={arrCheckListItem}
											deleteListItem={deleteCheckListItem}
										/>
									) : (
										<SidebarListNotes
											title={titleNoteInput}
											value={valueNoteInput}
											onChangeValue={setValueNoteInput}
											onChangeTitle={setTitleNoteInput}
											addNoteItem={addNoteItem}
											arrNotesList={arrNotesList}
											deleteNoteListItem={deleteNoteListItem}
											isTitlePage={true}
										/>
									)}
								</ScrollView>
							</View>
						</TouchableWithoutFeedback>
					</TouchableOpacity>
				</View>
			</Modal>
		</SafeAreaView>
	);
};
