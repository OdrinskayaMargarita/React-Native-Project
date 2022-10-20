import * as React from 'react';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { Link } from 'src/shared/components/atoms/Link/Link.component';
import { TextItem } from 'src/shared/components/atoms/TextItem/TextItem.component';

import { tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { BaseActionMenu } from '../../../shared/components/atoms/ActionMenu/ActionMenu.component';
import { InputComponent } from '../../../shared/components/atoms/inputs/Input/Input.component';
import { TemplateContainer } from '../../../shared/components/templates/Template.container';
import { TemplateContainerKeyboard } from '../../../shared/components/templates/TemplateKeyboard.container';
import { SettingRoute } from '../enums/SettingRoute.enum';

interface IProps {
	modalVisible: boolean;
	onCloseModal: () => void | Promise<void>;
}

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const SettingWalletChange: React.FC<IProps> = () => {
	const navigation = useNavigation<navigationStack>();
	const [isEdit, setIsEdit] = useState(false);
	const [cardHolderName, setCardHolderName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [cardDate, setCardDate] = useState('');
	const [cardCVV, setCardCVV] = useState('');

	const onPressBack = () => {
		isEdit ? setIsEdit(false) : navigation.navigate(SettingRoute.Setting);
	};

	return (
		<SafeAreaView>
			<TemplateContainerKeyboard>
				<View>
					<View style={tw`w-full h-full bg-greyBg relative`}>
						{isEdit ? (
							<View style={tw`bg-red/20 p-2`}>
								<Text style={tw`text-red text-center text-xs`}>EDIT MODE</Text>
							</View>
						) : null}
						<View style={tw`py-2 flex-row items-center justify-between mb-4 bg-white shadow px-3`}>
							<View style={tw`flex-row items-center`}>
								<ButtonNavigation type='back' onPress={onPressBack} />
								<Text style={tw`ml-4 font-bold text-xl`}>Payment Options</Text>
							</View>
							{!isEdit ? (
								<BaseActionMenu
									menuList={[
										{
											isDisabled: false,
											label: 'Edit',
											onPress: () => setIsEdit(true),
										},
									]}
								/>
							) : null}
						</View>
						<TemplateContainer>
							<View style={tw`px-1 h-full`}>
								<View style={tw`mb-4  flex-row items-center justify-between `}>
									<Text style={tw`text-[13px] font-bold`}>Card Information</Text>
									<View style={tw`px-1 flex-1 relative`}>
										<Text numberOfLines={1} ellipsizeMode='clip' style={tw`text-grey text-xs`}>
											--------------------------------------------------------------------
										</Text>
									</View>
								</View>
								<View style={tw`bg-white rounded-[20px] shadow p-3 pt-[2px] mb-8`}>
									{isEdit ? (
										<InputComponent
											placeholder='CARDHOLDER NAME'
											labelValue='CARDHOLDER NAME'
											onChange={setCardHolderName}
											value={cardHolderName}
											isError={false}
											styleContainer='w-6/12 mb-0'
											bgColor='bg-white'
										/>
									) : (
										<TextItem
											typeInput='Сardholder name'
											valueInput='Alexandra Junior Ross'
											styleLabel='normal-case text-[#B5B5B5]'
											style='w-6/12'
										/>
									)}

									<View style={tw`flex flex-row items-center justify-between mt-4 mb-5`}>
										{isEdit ? (
											<InputComponent
												placeholder='CARD NUMBER'
												labelValue='CARD NUMBER'
												onChange={setCardNumber}
												value={cardNumber}
												isError={false}
												styleContainer='w-6/12 mb-0'
												bgColor='bg-white'
											/>
										) : (
											<TextItem
												typeInput='Card number'
												valueInput='**** **** **** 4242'
												style='w-6/12'
												styleLabel='normal-case text-[#B5B5B5]'
											/>
										)}
										{isEdit ? (
											<InputComponent
												placeholder='MM/YY'
												labelValue='MM/YY'
												onChange={setCardDate}
												value={cardDate}
												isError={false}
												styleContainer='w-[20%] mb-0'
												bgColor='bg-white'
											/>
										) : (
											<TextItem
												typeInput='MM/YY'
												valueInput='05/22'
												style='w-[20%]'
												styleLabel='normal-case text-[#B5B5B5]'
											/>
										)}
										{isEdit ? (
											<InputComponent
												placeholder='СVV'
												labelValue='CVV'
												onChange={setCardCVV}
												value={cardCVV}
												isError={false}
												styleContainer='w-[20%] mb-0'
												bgColor='bg-white'
											/>
										) : (
											<TextItem
												typeInput='CVC'
												valueInput='****'
												style='w-[20%]'
												styleLabel='normal-case text-[#B5B5B5]'
											/>
										)}
									</View>
									<View style={tw`flex flex-row items-center justify-between mb-5`}>
										<Image source={require('../images/cards123.jpg')} style={tw`w-[100%] h-4`} />
										{/*<Image source={require('../images/cards.png')} style={tw`w-[48%] h-5`} />*/}
										{/*<Image source={require('../images/secured.png')} style={tw`w-[50%] h-4`} />*/}
									</View>
									<View style={tw`flex items-end`}>
										<View style={tw`w-32`}>
											{isEdit ? (
												<DefaultButton
													title='Save'
													variant='outlined'
													size='md'
													onPress={() => setIsEdit(false)}
												/>
											) : null}
										</View>
									</View>
								</View>
								<View style={tw`flex flex-row items-center justify-between mb-4`}>
									<View style={tw`pb-2 pr-4 border-b border-grey`}>
										<Text style={tw`text-[13px]`}>Monthly charge - 5$/month</Text>
									</View>
									<View style={tw`pb-2 pr-4 border-b border-grey`}>
										<Text style={tw`text-[13px]`}>Next due date - July 14</Text>
									</View>
								</View>
								<View style={tw`flex flex-row items-center justify-start`}>
									<Text>I want to</Text>
									<Link isDisabled={false} label='Cancel subscription' style='text-red underline' />
								</View>
								{isEdit ? (
									<View style={tw`bg-greyBg pt-5 pb-3 absolute bottom-0 w-full border-t border-grey`}>
										<View style={tw`flex flex-row items-center justify-center`}>
											<View style={tw`mx-2 w-30`}>
												<DefaultButton title='Pay' variant='contained' size='md' />
											</View>
										</View>
									</View>
								) : null}
							</View>
						</TemplateContainer>
					</View>
				</View>
			</TemplateContainerKeyboard>
		</SafeAreaView>
	);
};
