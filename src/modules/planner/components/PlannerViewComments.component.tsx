import * as React from 'react';

import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	title?: string;
}

export const PlannerViewComments: React.FC<IProps> = () => {
	return (
		<View style={tw`my-2`}>
			<Text>Backlog View Commnets</Text>
		</View>
	);
};
