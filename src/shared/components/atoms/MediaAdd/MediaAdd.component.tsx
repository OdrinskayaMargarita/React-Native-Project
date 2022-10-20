import * as React from 'react';

import { TouchableOpacity, View } from 'react-native';
import ImagePicker, { Image } from 'react-native-image-crop-picker';

import { tw } from '@lib/tailwind';

import { PlusWithoutBg } from '../../icons/PlusWithoutBg.icon';

interface IProps {
	multiple: boolean;
	onUpload: (assets: Image[]) => void | Promise<void>;
}

export const MediaAdd: React.FC<IProps> = ({ multiple, onUpload }) => {
	const openMediaLibrary = async () => {
		const res = await ImagePicker.openPicker({
			cropping: true,
			mediaType: 'photo',
			multiple,
		});
		await onUpload([res]);
	};

	return (
		<TouchableOpacity
			onPress={openMediaLibrary}
			style={tw`w-full flex items-center justify-center p-1.5 bg-green/20 rounded-full w-11 h-11`}>
			<View style={tw`justify-center items-center rounded-full bg-greenInput w-8 h-8`}>
				<PlusWithoutBg />
			</View>
		</TouchableOpacity>
	);
};
