import * as React from 'react';

import { View } from 'react-native';

import { tw } from '../../../../lib/tailwind';
import { SearchInput } from '../../../../shared/components/atoms/inputs/SearchInput/SearchInput.component';
import { TemplateContainerScroll } from '../../../../shared/components/templates/Template.container-scroll';
import { ChatIListItem } from '../ChatIListItem.component';

export const PersonalChats = () => {
	return (
		<TemplateContainerScroll>
			<SearchInput labelValue='Search  by name' placeholder='Search  by name' />
			<View style={tw`px-1 mt-3`}>
				<ChatIListItem title='Kyryllo Sotnykov' members={23} imageSource='' isOnline={true} />
			</View>
		</TemplateContainerScroll>
	);
};
