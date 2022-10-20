import * as React from 'react';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CheckIcon, Select } from 'native-base';
import { ScrollView, View, Text, SafeAreaView, Image } from 'react-native';
import { AccordionItem } from 'src/shared/components/atoms/Accordion/Accordion.component';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonBinSquare } from 'src/shared/components/atoms/buttons/ButtonBinSquare/ButtonBinSquare.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { TextItem } from 'src/shared/components/atoms/TextItem/TextItem.component';
import { CalendarIcon } from 'src/shared/components/icons/Calendar.icon';

import { colors, tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { NetworkRoute } from '../enums/networkRoute.enum';

interface IProps {
	isVisible: boolean;
}
type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const NetworkShowContactDefaultScreen: React.FC<IProps> = () => {
	const [role, setRole] = useState<string>('');
	const navigation = useNavigation<navigationStack>();

	return (
		<SafeAreaView style={tw`w-full h-full bg-greyBg`}>
			<ScrollView style={tw`w-full h-full p-3`}>
				<View style={tw`w-full bg-greyBg flex-row items-center justify-start mb-5`}>
					<ButtonNavigation type={'back'} onPress={() => navigation.navigate(NetworkRoute.Network)} />
					<Text style={tw`ml-4 text-xl font-bold`}>Connected</Text>
				</View>

				<View style={tw`pb-10`}>
					<View>
						<View style={tw`w-full relative`}>
							<Image source={require('../images/bg.jpg')} style={tw`mr-1 h-35 w-full`} />
							<Image
								source={require('../images/avatar.png')}
								style={tw`absolute left-4 top-5 w-25 h-25 rounded-full`}
							/>
						</View>
					</View>

					<AccordionItem
						title='General information'
						subTitle='Full name, Gender, Relationship, Documents'
						isDisabledExpand={true}
						styleBg='min-h-15 pl-5'>
						<View style={tw`px-2`}>
							<TextItem valueInput='Petrov Ivan' typeInput='Full name' />
							<TextItem valueInput='Male' typeInput='Gender' />
							<TextItem
								valueInput='25.08.1867'
								typeInput='Birhday'
								iconStart={<CalendarIcon fillIcon={colors.greenInput} />}
							/>
							<TextItem valueInput='-' typeInput='relationship' />
							<Select
								selectedValue={role}
								minWidth='200'
								placeholder='Role'
								mt={1}
								mb={1}
								onValueChange={itemValue => setRole(itemValue)}
								_selectedItem={{
									bg: 'teal.600',
									endIcon: <CheckIcon size='5' />,
								}}>
								<Select.Item label='Parent' value='parent' />
								<Select.Item label='Friend' value='friend' />
								<Select.Item label='Wife' value='wide' />
								<Select.Item label='Husband' value='husband' />
							</Select>
						</View>
					</AccordionItem>

					<AccordionItem
						isDisabledExpand={true}
						styleBg='min-h-15 pl-5'
						title='Contacts'
						subTitle='Home and current adress, Phone, Email'>
						<View style={tw`px-2`}>
							<TextItem valueInput='kyryllo@example.com' typeInput='Email' />
							<TextItem valueInput='+380380380380' typeInput='Phone number' />
							<TextItem valueInput='Some adress example' typeInput='Home adress' />
						</View>
					</AccordionItem>

					<AccordionItem
						isDisabledExpand={true}
						styleBg='min-h-15 pl-5'
						title='Appearance'
						subTitle='Home and current adress, Phone, Email'>
						<View style={tw`px-2`}>
							<View style={tw`pb-1 border-b border-grey mb-2`}>
								<Text style={tw`text-sm font-bold`}>Body Parameters</Text>
							</View>
							<View style={tw`flex-row items-center justify-between`}>
								<View style={tw`w-45%`}>
									<TextItem valueInput='Slim' typeInput='Body type' />
								</View>
								<View style={tw`w-45%`}>
									<TextItem valueInput='-' typeInput='Weight (LB)' />
								</View>
							</View>

							<View style={tw`flex-row items-center justify-between`}>
								<View style={tw`w-45%`}>
									<TextItem valueInput='-' typeInput='Height (FT)' />
								</View>
								<View style={tw`w-45%`}>
									<TextItem valueInput='-' typeInput='Height (In)' />
								</View>
							</View>

							<View style={tw`flex-row items-center justify-between`}>
								<View style={tw`w-45%`}>
									<TextItem valueInput='-' typeInput='Waist (IN)' />
								</View>
								<View style={tw`w-45%`}>
									<TextItem valueInput='-' typeInput='Hips (In)' />
								</View>
							</View>

							<View style={tw`flex-row items-center justify-between`}>
								<View style={tw`w-45%`}>
									<TextItem valueInput='-' typeInput='Bust (cup size)' />
								</View>
								<View style={tw`w-45%`}>
									<TextItem valueInput='-' typeInput='Bust (in)' />
								</View>
							</View>

							<View style={tw`flex-row items-center justify-between`}>
								<View style={tw`w-45%`}>
									<TextItem valueInput='-' typeInput='Shoe size' />
								</View>
							</View>

							<View style={tw`pb-1 border-b border-grey my-2`}>
								<Text style={tw`text-sm font-bold`}>Hair</Text>
							</View>
							<View style={tw`flex-row items-center justify-between`}>
								<View style={tw`w-45%`}>
									<TextItem valueInput='Straight' typeInput='type' />
								</View>
								<View style={tw`w-45%`}>
									<TextItem valueInput='Long' typeInput='Length' />
								</View>
							</View>
							<View style={tw`flex-row items-center justify-between`}>
								<View style={tw`w-45%`}>
									<TextItem valueInput='Brown' typeInput='Color' />
								</View>
							</View>

							<View style={tw`pb-1 border-b border-grey my-2`}>
								<Text style={tw`text-sm font-bold`}>Eyes</Text>
							</View>
							<View style={tw`flex-row items-center justify-between`}>
								<View style={tw`w-45%`}>
									<TextItem valueInput='Blue' typeInput='color' />
								</View>
								<View style={tw`w-45%`}>
									<TextItem valueInput='-' typeInput='Eyewear' />
								</View>
							</View>
						</View>
					</AccordionItem>
				</View>
			</ScrollView>

			<View style={tw`flex flex-row items-center justify-center bg-greyBg py-5 border-t border-grey`}>
				<ButtonBinSquare onPress={() => console.log('123')} variant='outlined' style='mx-2' />
				<View style={tw`mx-2 w-30`}>
					<DefaultButton
						title='Cancel'
						variant='outlined'
						size='md'
						onPress={() => navigation.navigate(NetworkRoute.Network)}
					/>
				</View>
				<View style={tw`mx-2 w-30`}>
					<DefaultButton title='Save' variant='contained' size='md' />
				</View>
			</View>
		</SafeAreaView>
	);
};
