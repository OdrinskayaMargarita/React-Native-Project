import * as React from 'react';

import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Image as CropImage } from 'react-native-image-crop-picker';

import { tw } from '@lib/tailwind';

import { MediaAdd } from '../MediaAdd/MediaAdd.component';

interface IProps {
	title: string;
	multiple?: boolean;
	assets: CropImage[];
	onUpload: (assets: CropImage[]) => void | Promise<void>;
	onItemClick?: (item: CropImage) => void | Promise<void>;
}

export const MediaRow: React.FC<IProps> = ({ title, assets, multiple = false, onUpload, onItemClick }) => {
	return (
		<View style={tw`flex flex-row flex-nowrap items-center w-full`}>
			<View style={tw`items-center justify-center`}>
				<MediaAdd multiple={multiple} onUpload={onUpload} />
			</View>
			<View style={tw`w-full p-2 `}>
				{assets.length ? (
					<ScrollView alwaysBounceVertical={false} style={tw`flex-row w-full`}>
						<View style={tw`flex flex-row`}>
							{assets.map((asset, index) => (
								<TouchableOpacity
									onPress={() => {
										onItemClick?.(asset);
									}}
									key={`${asset.filename}::${index}`}
									style={tw`w-[50px] mx-1.5`}>
									<Image
										style={tw`w-[50px] h-[50px] rounded-md`}
										resizeMode={'cover'}
										source={{ uri: asset.path }}
									/>
									{/*<Text*/}
									{/*	ellipsizeMode='tail'*/}
									{/*	numberOfLines={1}*/}
									{/*	style={tw`mt-1 text-[13px] text-black`}>*/}
									{/*	{asset.filename}*/}
									{/*</Text>*/}
								</TouchableOpacity>
							))}
						</View>
					</ScrollView>
				) : (
					<Text style={tw`text-grey`}>{title}</Text>
				)}
			</View>
		</View>
	);
};
