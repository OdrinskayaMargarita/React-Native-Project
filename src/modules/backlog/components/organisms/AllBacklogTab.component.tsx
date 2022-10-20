import * as React from 'react';

import { View } from 'react-native';

import { tw } from '@lib/tailwind';

import { TemplateContainerScroll } from '../../../../shared/components/templates/Template.container-scroll';
import { BacklogCard } from '../atom/BacklogCard.component';

interface IProps {
	title?: string;
	onPress: any;
}

export const AllBacklogTab: React.FC<IProps> = () => {
	return (
		<TemplateContainerScroll>
			<View style={tw`px-1`}>
				<BacklogCard />
				<BacklogCard />
				<BacklogCard />
				<BacklogCard />
				<BacklogCard />
			</View>
		</TemplateContainerScroll>
	);
};
