import { StyleSheet } from 'react-native';

interface ButtonProps {
	isFocus: boolean;
}

export const SelectButtonStyle = ({ isFocus }: ButtonProps) =>
	StyleSheet.create({
		arrowIcon: {
			// backgroundColor: '#C5C5C5',
			transform: isFocus ? [{ rotate: '180deg' }] : [{ rotate: '360deg' }],
		},
	});
