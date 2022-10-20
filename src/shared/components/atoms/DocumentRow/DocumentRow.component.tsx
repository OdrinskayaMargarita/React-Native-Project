import * as React from 'react';

import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';

import { tw } from '@lib/tailwind';

import { DocumentAdd } from '../DocumentAdd/DocumentAdd.component';

interface IProps {
	title: string;
	multiple?: boolean;
	maxCount?: number;
	documents: DocumentPickerResponse[];
	onUpload: (assets: DocumentPickerResponse[]) => void | Promise<void>;
	onItemClick?: (item: DocumentPickerResponse) => void | Promise<void>;
}

export const DocumentRow: React.FC<IProps> = ({
	title,
	documents,
	multiple = false,
	onUpload,
	onItemClick,
	maxCount = 25,
}) => {
	return (
		<View style={tw`flex flex-row flex-nowrap items-center w-full`}>
			<View
				style={tw`w-[50px] h-[86px] flex items-center justify-center ${
					maxCount && documents.length <= maxCount ? 'opacity-100' : 'opacity-50'
				}`}>
				<DocumentAdd multiple={multiple} onUpload={onUpload} isDisabled={documents.length > maxCount} />
			</View>

			<View style={tw`w-full shrink p-2 border-grey`}>
				{documents.length ? (
					<ScrollView alwaysBounceVertical={false} style={tw`flex flex-row w-full`}>
						<View style={tw`flex flex-row`}>
							{documents.map((document, index) => (
								<View style={tw`px-1.5`} key={index}>
									<TouchableOpacity
										onPress={() => onItemClick?.(document)}
										key={index}
										// key={`${document.name}::${index}`}
										style={tw`w-[50px]`}>
										<Image
											source={{ uri: document?.uri }}
											style={tw`w-[50px] h-[50px] rounded-md`}
										/>
										<Text ellipsizeMode='tail' numberOfLines={1} style={tw`mt-1 text-[13px]`}>
											{document.name}
										</Text>
									</TouchableOpacity>
								</View>
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
