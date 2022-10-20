import * as React from 'react';
import {
	View,
	TouchableOpacity,
	Modal,
	Image,
	TouchableWithoutFeedback,
	Dimensions,
	Text,
	SafeAreaView,
} from 'react-native';
import moment from 'moment';
import { tw } from '@lib/tailwind';
import { DefaultButton } from '../buttons/Button/Button.component';
import { ButtonNavigation } from '../buttons/ButtonNavigation/ButtonNavigation.component';

interface IProps {
	isVisible: boolean;
	media: {
		path: string;
		name: string;
		createdAt: number;
	};
	onOverlayTap?: () => void | Promise<void>;
	closeModal: () => void | Promise<void>;
	deleteItem?: () => void | Promise<void>;
	downloadItem?: () => void | Promise<void>;
}

const imageSize = Dimensions.get('window').width - 40;

export const MediaModal: React.FC<IProps> = ({
	isVisible,
	media,
	onOverlayTap,
	closeModal,
	deleteItem,
	downloadItem,
}) => {
	return (
		<Modal animationType='fade' transparent={true} visible={isVisible}>
			<SafeAreaView>
				<TouchableOpacity
					activeOpacity={1}
					onPressOut={onOverlayTap}
					style={tw`flex h-full justify-center items-center relative`}>
					<View style={tw`w-full h-full bg-black absolute opacity-80`} />
					<View style={tw`absolute right-5 top-5`}>
						<ButtonNavigation type={'close'} onPress={closeModal} />
					</View>
					<TouchableWithoutFeedback>
						<View style={tw`flex w-[${imageSize}px] bg-white items-center rounded-lg overflow-hidden`}>
							<View style={tw`w-[${imageSize}px] p-4 h-[${imageSize}px]`}>
								<Image style={tw`w-full h-full`} source={{ uri: media.path }} />
							</View>
							<View style={tw`w-full flex items-center mb-4`}>
								<Text style={tw`font-bold text-base`}>{media.name}</Text>
								<Text style={tw`text-xs text-grey`}>
									Date create: {moment(media.createdAt).format('YYYY-MM-DD, HH:mm:ss')}
								</Text>
							</View>
							<View style={tw`w-full flex flex-row items-center justify-around`}>
								<DefaultButton variant={'text'} title={'Delete'} onPress={deleteItem} />
								<DefaultButton variant={'text'} title={'Download'} onPress={downloadItem} />
							</View>
						</View>
					</TouchableWithoutFeedback>
				</TouchableOpacity>
			</SafeAreaView>
		</Modal>
	);
};
