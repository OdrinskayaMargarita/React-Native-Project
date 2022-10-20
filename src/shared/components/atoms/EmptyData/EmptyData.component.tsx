import * as React from 'react';

import { View, Text, Image } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	title: string;
	imgSrc?: string;
	description?: string;
}

export const EmptyData: React.FC<IProps> = ({ title = '', imgSrc = '', description = '' }) => {
	return (
		<View style={tw`p-3 h-full bg-greyBg items-center`}>
			<Text style={tw`text-center text-[35px] font-bold mb-10`}>{title}</Text>
			<Image source={require('src/modules/backlog/components/images/noFilter.png')} style={tw`w-10/12 h-50`} />
			{/*<Image source={{ uri: imgSrc }} style={tw`w-10/12 h-50`} />*/}
			{/*<Image source={require(imgSrc)} style={tw`w-10/12 h-50`} />*/}
			<Text style={tw`text-center text-sm pt-10`}>{description}</Text>
		</View>
	);
};
