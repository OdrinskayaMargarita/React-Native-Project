import * as React from 'react';

import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { AccordionItem } from '../../../shared/components/atoms/Accordion/Accordion.component';
import { CheckboxInput } from '../../../shared/components/atoms/inputs/CheckboxInput/CheckboxInput.component';
import { SelectorButton } from '../../../shared/components/atoms/SelectorButton/SelectorButton.component';
import { TextItem } from '../../../shared/components/atoms/TextItem/TextItem.component';

interface IProps {
	title?: string;
}

export const PlannerViewMain: React.FC<IProps> = () => {
	return (
		<View style={tw`my-2 h-full`}>
			<View style={tw`flex-row justify-between`}>
				<SelectorButton variant={'backlog'} onPress={() => console.log('123')} />
				<SelectorButton variant={'todo'} onPress={() => console.log('123')} />
				<SelectorButton variant={'inProgress'} onPress={() => console.log('123')} />
				<SelectorButton variant={'done'} onPress={() => console.log('123')} />
			</View>

			<AccordionItem
				title='Period'
				styleBg='bg-greyBg'
				isShadow={false}
				styleTitle='capitalize'
				isBorderDotted={true}
				isOpenAlways={true}
				isDisabledExpand={true}>
				<View style={tw`items-start`}>
					<CheckboxInput isDisabled={true} label='All day' />
					<TextItem valueInput='09/05/20' typeInput='Due-date' style='w-full' />
					<TextItem valueInput='HH:MM' typeInput='Due-time' style='w-full' />
				</View>
			</AccordionItem>

			<AccordionItem
				title='Description'
				styleBg='bg-greyBg'
				isShadow={false}
				styleTitle='capitalize'
				isOpenAlways={true}
				isDisabledExpand={true}
				isBorderDotted={true}>
				<View>
					<Text style={tw`text-sm`}>
						Lectus quis consequat, odio ante id. Aliquam at dictumst velit pulvinar tincidunt lorem morbi eu
						consectetur. At varius nunc condimentum feugiat urna arcu convallis egestas. Nulla varius sed
						natoque dis mi eget arcu est. Iaculis nec lorem tellus amet in volutpat in.
					</Text>
				</View>
			</AccordionItem>
		</View>
	);
};
