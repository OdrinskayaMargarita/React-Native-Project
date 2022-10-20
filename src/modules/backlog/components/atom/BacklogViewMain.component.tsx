import * as React from 'react';
import { useState } from 'react';

import { View, Text } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { Image as CropImage } from 'react-native-image-crop-picker';

import { tw } from '@lib/tailwind';

import { AccordionItem } from '../../../../shared/components/atoms/Accordion/Accordion.component';
import { AvatarItem } from '../../../../shared/components/atoms/Avatar/Avatar.component';
import { DocumentRow } from '../../../../shared/components/atoms/DocumentRow/DocumentRow.component';
import { MediaRow } from '../../../../shared/components/atoms/MediaRow/MediaRow.component';
import { DocumentModal } from '../../../../shared/components/atoms/Modals/DocumentModal';
import { MediaModal } from '../../../../shared/components/atoms/Modals/MediaModal';
import { SelectorButton } from '../../../../shared/components/atoms/SelectorButton/SelectorButton.component';
import { TextItem } from '../../../../shared/components/atoms/TextItem/TextItem.component';
import { CheckIcon } from '../../../../shared/components/icons/Check.icon';
import { TemplateContainerScroll } from '../../../../shared/components/templates/Template.container-scroll';

interface IProps {
	title?: string;
}

export const BacklogViewMain: React.FC<IProps> = () => {
	const [mediaAssets, setMediaAssets] = useState<CropImage[]>([]);
	const [activeMedia, setActiveMedia] = useState<CropImage | null>(null);
	const [documentAssets, setDocumentAssets] = useState<DocumentPickerResponse[]>([]);
	const [activeDocument, setActiveDocument] = useState<DocumentPickerResponse | null>(null);

	return (
		<View style={tw`h-full`}>
			<TemplateContainerScroll style='px-0'>
				<View style={tw`flex-row justify-between`}>
					<SelectorButton variant={'backlog'} onPress={() => console.log('123')} />
					<SelectorButton variant={'todo'} onPress={() => console.log('123')} />
					<SelectorButton variant={'inProgress'} onPress={() => console.log('123')} />
					<SelectorButton variant={'done'} onPress={() => console.log('123')} />
				</View>

				<View style={tw`pb-2 mt-7 `}>
					<Text style={tw`font-bold`}>Period</Text>
					<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey`}>
						-----------------------------------------------------------------
					</Text>
				</View>
				<TextItem valueInput='09/05/2022' typeInput='Due-date' />
				<TextItem valueInput='HH:MM' typeInput='Due-time' />
				<AccordionItem
					title='Description'
					isBorderDotted={true}
					styleTitle='capitalize'
					styleBg='w-full bg-greyBg'
					isShadow={false}>
					<Text>
						Lectus quis consequat, odio ante id. Aliquam at dictumst velit pulvinar tincidunt lorem morbi eu
						consectetur. At varius nunc condimentum feugiat urna arcu convallis egestas. Nulla varius sed
						natoque dis mi eget arcu est. Iaculis nec lorem tellus amet in volutpat in.
					</Text>
				</AccordionItem>
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
				<DocumentModal
					isVisible={!!activeDocument}
					document={{
						createdAt: Date.now(),
						name: activeDocument?.name ?? '',
						path: activeDocument?.uri ?? '',
					}}
					onOverlayTap={() => {
						setActiveDocument(null);
					}}
					closeModal={() => {
						setActiveDocument(null);
					}}
				/>
				<AccordionItem
					title='Gallery'
					additionalText={`${mediaAssets.length} pictures`}
					styleAdditionalText='text-grey'
					isBorderDotted={true}
					styleBg='w-full bg-greyBg'
					styleTitle='normal-case'
					isShadow={false}>
					<MediaRow
						title={'Please add some photos to your gallery'}
						onUpload={assets => {
							setMediaAssets([...mediaAssets, ...assets]);
						}}
						assets={mediaAssets}
						onItemClick={setActiveMedia}
					/>
				</AccordionItem>
				<AccordionItem
					title='Documents'
					additionalText={`${documentAssets.length} documents`}
					styleAdditionalText='text-grey'
					styleBg='w-full bg-greyBg'
					styleTitle='normal-case'
					isBorderDotted={true}
					isShadow={false}>
					<DocumentRow
						title={'Please add some files to your documents'}
						onUpload={documents => {
							setDocumentAssets([...documentAssets, ...documents]);
						}}
						documents={documentAssets}
						onItemClick={setActiveDocument}
					/>
				</AccordionItem>

				<AccordionItem
					title='Assigness'
					isBorderDotted={true}
					styleTitle='capitalize'
					styleBg='w-full bg-greyBg'
					isShadow={false}>
					<View style={tw`pb-2 border-b border-grey`}>
						<View style={tw`flex-row items-center justify-between py-2 border-b border-grey`}>
							<View style={tw`flex-row items-center w-40% `}>
								<AvatarItem
									firstName='anna'
									lastName='Petrov'
									size='small'
									isOwner={true}
									isOnline={true}
									src=''
									id={213}
								/>
								<View style={tw`ml-2`}>
									<Text style={tw`text-xs mb-1`}>Anna Petrova</Text>
									<Text style={tw`text-xs text-grey`}>Owner</Text>
								</View>
							</View>
							<View style={tw`w-50% relative flex-row items-center justify-start`}>
								<CheckIcon />
								<Text style={tw`ml-2 text-sm`}>Can edit</Text>
							</View>
						</View>
						<View style={tw`flex-row items-center justify-between py-2 `}>
							<View style={tw`flex-row items-center w-40% `}>
								<AvatarItem
									firstName='anna'
									lastName='Petrov'
									size='small'
									isOwner={false}
									isOnline={true}
									src=''
									id={213}
								/>
								<View style={tw`ml-2`}>
									<Text style={tw`text-xs mb-1`}>Anna Petrova</Text>
									<Text style={tw`text-xs text-grey`}>Friend</Text>
								</View>
							</View>
							{/*<View style={tw`w-20% relative flex-row items-center`}>*/}
							{/*	<CheckListSmallIcon fillIcon={colors.yellowStatus} />*/}
							{/*	<Text style={tw`ml-1`}>Backlog</Text>*/}
							{/*</View>*/}
							<View style={tw`w-50% relative flex-row items-center justify-start`}>
								<CheckIcon />
								<Text style={tw`ml-2 text-sm`}>Can edit</Text>
							</View>
							{/*<View style={tw`w-11`}>*/}
							{/*	<ButtonBinSquare onPress={() => console.log('123')} variant='noBordered' />*/}
							{/*</View>*/}
						</View>
					</View>
				</AccordionItem>
			</TemplateContainerScroll>
		</View>
	);
};
