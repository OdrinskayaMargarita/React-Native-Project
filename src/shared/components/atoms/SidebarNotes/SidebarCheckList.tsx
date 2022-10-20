import * as React from 'react';

import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { CheckListItem } from '../CheckListItem/CheckListItem.component';
import { ListInput } from '../inputs/ListInput/ListInput.component';

interface IProps {
	valueInput: string;
	setValueInput: any;
	addListItem: () => void | Promise<void>;
	arrListItem: typeItem[];
	deleteListItem: (keyItem: number) => void;
	styleCheckListItem?: string;
	title?: JSX.Element | JSX.Element[];
}

interface typeItem {
	value: string;
	keyItem: number;
}

export const SidebarCheckList: React.FC<IProps> = ({
	valueInput,
	setValueInput,
	addListItem,
	arrListItem,
	deleteListItem,
	styleCheckListItem,
	title,
}) => {
	return (
		<View>
			{title || <Text style={tw`uppercase mb-10 font-medium text-base`}>CheckList</Text>}
			<ListInput
				value={valueInput}
				onChange={setValueInput}
				addFunc={addListItem}
				placeholder='Write your notes'
			/>
			{arrListItem.length
				? arrListItem?.map((item, key) => (
						<CheckListItem
							key={key}
							labelValue={item.value}
							isDeleteIcon={true}
							deleteFunc={() => deleteListItem(item.keyItem)}
							styleCheckListItem={styleCheckListItem}
						/>
				  ))
				: null}
		</View>
	);
};
