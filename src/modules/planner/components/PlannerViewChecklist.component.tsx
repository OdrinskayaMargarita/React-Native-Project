import * as React from 'react';
import { useState } from 'react';

import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { AvatarItem } from '../../../shared/components/atoms/Avatar/Avatar.component';
import { SidebarCheckList } from '../../../shared/components/atoms/SidebarNotes/SidebarCheckList';

interface IProps {
	title?: string;
}

interface typeCheckItem {
	value: string;
	keyItem: number;
}

export const PlannerViewChecklist: React.FC<IProps> = () => {
	const [valueCheckInput, setValueCheckInput] = useState<string>('');
	const [arrCheckListItem, setCheckListItem] = useState<typeCheckItem[]>([]);
	const [numberKeyCheckItem, setNumberKeyCheckItem] = useState<number>(0);

	const addCheckListItem = () => {
		setCheckListItem([...arrCheckListItem, { keyItem: numberKeyCheckItem, value: valueCheckInput }]);
		setNumberKeyCheckItem(numberKeyCheckItem + 1);
		setValueCheckInput('');
	};

	const deleteCheckListItem = (key: number) => {
		setCheckListItem(arrCheckListItem.filter(item => item.keyItem !== key));
	};

	return (
		<View style={tw`my-2`}>
			<SidebarCheckList
				valueInput={valueCheckInput}
				setValueInput={setValueCheckInput}
				addListItem={addCheckListItem}
				arrListItem={arrCheckListItem}
				deleteListItem={deleteCheckListItem}
				styleCheckListItem='bg-greyBg'
				title={
					<View style={tw`border-b border-grey pt-4 pb-2 mb-5 flex-row items-center`}>
						<AvatarItem firstName='Kyryllo' lastName='Sotnykov' size='small' src='' id={3543} />
						<Text style={tw`ml-2`}>Kyryllo Sotnykov</Text>
					</View>
				}
			/>
		</View>
	);
};
