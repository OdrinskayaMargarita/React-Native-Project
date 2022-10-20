import * as React from 'react';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, SafeAreaView } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { Image as CropImage } from 'react-native-image-crop-picker';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';

import { colors, tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { AccordionItem } from '../../../shared/components/atoms/Accordion/Accordion.component';
import { DocumentRow } from '../../../shared/components/atoms/DocumentRow/DocumentRow.component';
import { MediaRow } from '../../../shared/components/atoms/MediaRow/MediaRow.component';
import { DocumentModal } from '../../../shared/components/atoms/Modals/DocumentModal';
import { MediaModal } from '../../../shared/components/atoms/Modals/MediaModal';
import { TextItem } from '../../../shared/components/atoms/TextItem/TextItem.component';
import { CalendarIcon } from '../../../shared/components/icons/Calendar.icon';
import { TemplateContainerScroll } from '../../../shared/components/templates/Template.container-scroll';
import { NetworkRoute } from '../enums/networkRoute.enum';

interface IProps {
	isVisible: boolean;
}
type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const NetworkShowContactScreen: React.FC<IProps> = () => {
	const navigation = useNavigation<navigationStack>();

	const [mediaAssets, setMediaAssets] = useState<CropImage[]>([]);
	const [activeMedia, setActiveMedia] = useState<CropImage | null>(null);
	const [documentAssets, setDocumentAssets] = useState<DocumentPickerResponse[]>([]);
	const [activeDocument, setActiveDocument] = useState<DocumentPickerResponse | null>(null);

	return (
		<SafeAreaView style={tw`w-full h-full bg-greyBg`}>
			<TemplateContainerScroll>
				<View style={tw`w-full bg-greyBg flex-row items-center justify-start mb-5`}>
					<ButtonNavigation type={'back'} onPress={() => navigation.navigate(NetworkRoute.Network)} />
					<Text style={tw`ml-4 text-xl font-bold`}>John Snow</Text>
				</View>

				<View style={tw`pb-10`}>
					<View style={tw`flex-row items-end justify-between mb-2`}>
						<View style={tw`w-48%`}>
							<TextItem valueInput='Companye name' typeInput='Company' />
						</View>
						<View style={tw`w-48%`}>
							<TextItem
								valueInput='25/08/1998'
								typeInput='Birthday'
								iconStart={<CalendarIcon fillIcon={colors.greenInput} />}
							/>
						</View>
					</View>
					<View style={tw`flex-row items-end justify-between mb-2`}>
						<View style={tw`w-48%`}>
							<TextItem valueInput='Male' typeInput='Gender' />
						</View>
						<View style={tw`w-48%`}>
							<TextItem valueInput='209-769-6632' typeInput='Phone (home)' />
						</View>
					</View>
					<View style={tw`flex-row items-end justify-between  mb-2`}>
						<View style={tw`w-48%`}>
							<TextItem valueInput='Roos@com' typeInput='Email(Work)' />
						</View>
						<View style={tw`w-48%`}>
							<TextItem valueInput='25/08/1998' typeInput='URL(home page)' />
						</View>
					</View>
					<View style={tw`flex-row items-end justify-between  mb-2`}>
						<View style={tw`w-48%`}>
							<TextItem valueInput='Ross Jr' typeInput='Social media(Facebook)' />
						</View>
						<View style={tw`w-48%`}>
							<TextItem valueInput='Roos' typeInput='Nickname' />
						</View>
					</View>
					<View style={tw`flex-row items-end justify-between  mb-2`}>
						<TextItem valueInput='Chicago 12/2' typeInput='Location(school)' />
					</View>
					<View>
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
							// styleAdditionalContainer='w-[77%]'
							styleBg='bg-greyBg w-full'
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
							// styleAdditionalContainer='w-[80%]'
							styleBg='bg-greyBg w-full'
							styleTitle='normal-case'
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
					</View>
				</View>
			</TemplateContainerScroll>

			<View style={tw`flex flex-row items-center justify-center bg-greyBg py-5 border-t border-grey`}>
				<View style={tw`mx-2 w-30`}>
					<DefaultButton title='Invite' variant='contained' size='md' />
				</View>
			</View>
		</SafeAreaView>
	);
};
