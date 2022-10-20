import React from 'react';

import { View } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	children: React.ReactNode;
	style?: string;
}

export const TemplateContainer: React.FC<IProps> = ({ children, style = '' }) => {
	return <View style={tw`px-2 pb-5 relative w-full h-full bg-greyBg ${style}`}>{children}</View>;
};
