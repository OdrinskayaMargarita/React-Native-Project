import React, { useState } from 'react';

// @ts-ignore
import { Picker } from 'emoji-mart-native';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import ImagePicker, { Image as CropImage } from 'react-native-image-crop-picker';

import { colors, tw } from '@lib/tailwind';

import { MediaModal } from '../../../shared/components/atoms/Modals/MediaModal';
import { CloseIcon } from '../../../shared/components/icons/Close.icon';
import { PaperClipIcon } from '../../../shared/components/icons/Paperclip.icon';
import { SendIcon } from '../../../shared/components/icons/Send.icon';
import { SmileIcon } from '../../../shared/components/icons/Smile.icon';

interface IProps {
	isEditMessage?: boolean;
	setIsEditMessage: () => void | Promise<void>;
	multiple?: boolean;
}

export const ChatInput: React.FC<IProps> = ({ isEditMessage, setIsEditMessage, multiple }) => {
	const [valueInput, setValueInput] = useState<string>('');
	const [mediaAssets, setMediaAssets] = useState<CropImage[]>([]);
	const [activeMedia, setActiveMedia] = useState<CropImage | null>(null);

	const onUpload = (assets: any) => {
		setMediaAssets([...mediaAssets, ...assets]);
	};

	const openMediaLibrary = async () => {
		const res = await ImagePicker.openPicker({
			cropping: true,
			mediaType: 'photo',
			multiple,
		});
		await onUpload([res]);
	};

	return (
		<View style={tw`bg-white pt-3 pb-6 w-full px-3 absolute bottom-0 border-t border-lightGrey`}>
			{isEditMessage ? (
				<View style={tw`w-full flex-row items-stretch pb-3`}>
					<View style={tw`pr-2 border-r border-grey`}>
						<TouchableOpacity
							style={tw`w-4 h-4 bg-lightGrey rounded-full items-center justify-center`}
							onPress={setIsEditMessage}>
							<CloseIcon fillIcon={colors.black} width={12} height={12} />
						</TouchableOpacity>
					</View>
					<View style={tw`pl-2 relative w-90%`}>
						<Text style={tw`text-grey font-bold text-[11px]`}>Edit Message</Text>
						<Text style={tw`text-darkGrey text-[11px]`} numberOfLines={1} ellipsizeMode='tail'>
							Morbi lorem enim tortor mauris ut a sed quis aliquam. Ac elit gravida luctus proin arcu, a.
							Mauris, lectus ultricies suspendisse dapibus id purus. Et leo tortor lorem
						</Text>
					</View>
				</View>
			) : null}

			<View style={tw`w-full flex-row items-center justify-between pb-[6px]`}>
				<TextInput style={tw`w-67% text-black`} value={valueInput} onChangeText={setValueInput} />
				<View style={tw`flex-row items-center`}>
					<TouchableOpacity
						style={tw`w-9 h-9 mr-1 rounded items-center justify-center`}
						onPress={openMediaLibrary}>
						<PaperClipIcon />
					</TouchableOpacity>
					<TouchableOpacity style={tw`w-9 h-9 mr-1 rounded items-center justify-center`}>
						<SmileIcon />
					</TouchableOpacity>
					<TouchableOpacity style={tw`w-9 h-9 mr-1 rounded bg-greenInput items-center justify-center`}>
						<SendIcon />
					</TouchableOpacity>
				</View>
			</View>

			{mediaAssets.length ? (
				<View style={tw`w-full shrink p-2 pb-0`}>
					<View style={tw`flex flex-row flex-wrap`}>
						{mediaAssets.map((asset, index) => (
							<TouchableOpacity
								onPress={() => {
									setActiveMedia?.(asset);
								}}
								key={`${asset.filename}::${index}`}
								style={tw`px-1`}>
								<Text style={tw`underline mb-2 text-greenInput`}>{asset.mime}</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>
			) : null}

			<MediaModal
				isVisible={!!activeMedia}
				media={{
					createdAt: Date.now(),
					name: activeMedia?.filename ?? '',
					path: activeMedia?.sourceURL ?? '',
				}}
				onOverlayTap={() => {
					setActiveMedia(null);
				}}
				closeModal={() => {
					setActiveMedia(null);
				}}
			/>
			{/*<Popover*/}
			{/*	placement='bottom right'*/}
			{/*	trigger={triggerProps => {*/}
			{/*		return (*/}
			{/*			<TouchableOpacity {...triggerProps}>*/}
			{/*				<MoreVertical />*/}
			{/*			</TouchableOpacity>*/}
			{/*		);*/}
			{/*	}}>*/}
			{/*	<Popover.Content>*/}
			{/*		<Popover.Body style={tw`bg-white`}>*/}
			{/*			<Picker style={{ bottom: 20, position: 'absolute', right: 20 }} />*/}
			{/*		</Popover.Body>*/}
			{/*	</Popover.Content>*/}
			{/*</Popover>*/}
			{/*<EmojiButton onButtonPress={showPickerTrigger} />*/}

			{/*<Picker style={{ bottom: 20, position: 'absolute', right: 20 }} />*/}
		</View>
	);
};
