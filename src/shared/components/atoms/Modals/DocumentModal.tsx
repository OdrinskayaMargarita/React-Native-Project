import * as React from 'react';

import moment from 'moment';
import { View, Text, Modal, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

import { tw } from '@lib/tailwind';

import { DefaultButton } from '../buttons/Button/Button.component';
import { ButtonNavigation } from '../buttons/ButtonNavigation/ButtonNavigation.component';

interface IProps {
	isVisible: boolean;
	document: {
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

export const DocumentModal: React.FC<IProps> = ({
	isVisible,
	document,
	downloadItem,
	deleteItem,
	onOverlayTap,
	closeModal,
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
							<View style={tw`w-[${imageSize}px] p-4`}>
								<Pdf
									source={{ uri: document.path }}
									// source={{
									//   uri: 'http://www.africau.edu/images/default/sample.pdf',
									// }}
									onLoadComplete={numberOfPages => {
										console.log(`Number of pages: ${numberOfPages}`);
									}}
									onPageChanged={page => {
										console.log(`Current page: ${page}`);
									}}
									onError={error => {
										console.log(error);
									}}
									onPressLink={uri => {
										console.log(`Link pressed: ${uri}`);
									}}
									style={tw`w-full min-h-[400px]`}
								/>
							</View>
							<View style={tw`w-full flex items-center mb-4`}>
								<Text style={tw`font-bold text-base`}>{document.name}</Text>
								<Text style={tw`text-xs text-grey`}>
									Date create: {moment(document.createdAt).format('YYYY-MM-DD, HH:mm:ss')}
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
