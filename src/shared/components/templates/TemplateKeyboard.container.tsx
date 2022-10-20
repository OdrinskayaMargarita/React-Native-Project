import React from 'react';

import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

interface IProps {
	children: React.ReactNode;
}

export const TemplateContainerKeyboard: React.FC<IProps> = ({ children }) => {
	return (
		<KeyboardAvoidingView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};
