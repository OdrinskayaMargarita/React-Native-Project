import React from 'react';

import { ScrollView, View } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	children: React.ReactNode;
	style?: string;
}

export const TemplateContainerScroll: React.FC<IProps> = ({ children, style = '' }) => {
	return (
		<ScrollView style={tw`px-2 relative w-full ${style}`}>
			<View style={tw`pb-5`}>{children}</View>
		</ScrollView>
	);
};
