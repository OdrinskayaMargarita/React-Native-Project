import * as React from 'react';
import { useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { TemplateContainerScroll } from '../../../../shared/components/templates/Template.container-scroll';

interface IProps {
	setTitle: (title: string) => void | Promise<void>;
}

export const SignUp: React.FC<IProps> = ({ setTitle }) => {
	useFocusEffect(
		useCallback(() => {
			setTitle('Sign Up');
		}, [setTitle]),
	);

	return (
		<TemplateContainerScroll style='bg-white'>
			<View style={tw`px-1 mt-3`}>
				<Text>Sign Up</Text>
			</View>
		</TemplateContainerScroll>
	);
};
