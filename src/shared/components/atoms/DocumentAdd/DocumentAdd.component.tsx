import * as React from 'react';

import { TouchableOpacity, View } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

import { tw } from '@lib/tailwind';

import { PlusWithoutBg } from '../../icons/PlusWithoutBg.icon';

interface IProps {
	multiple: boolean;
	onUpload: (assets: DocumentPickerResponse[]) => void | Promise<void>;
	isDisabled?: boolean;
}

export const DocumentAdd: React.FC<IProps> = ({ multiple, onUpload, isDisabled }) => {
	const uploadDocument = async () => {
		const res = await DocumentPicker.pick({
			allowMultiSelection: multiple,
			presentationStyle: 'fullScreen',
		});
		console.log(11111, res);
		onUpload(res);
	};

	return (
		<TouchableOpacity
			onPress={uploadDocument}
			disabled={isDisabled}
			style={tw`w-full flex items-center justify-center p-1.5 bg-green/20 rounded-full w-11 h-11`}
			activeOpacity={isDisabled ? 1 : 0.7}>
			<View style={tw`justify-center items-center rounded-full bg-greenInput w-8 h-8`}>
				<PlusWithoutBg />
			</View>
		</TouchableOpacity>
	);
};
