import * as React from 'react';
import { useCallback, useState } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import moment from 'moment/moment';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { AccordionWallet } from 'src/shared/components/atoms/Accordion/AccordionWallet.component';
import { TextItem } from 'src/shared/components/atoms/TextItem/TextItem.component';
import { CalendarIcon } from 'src/shared/components/icons/Calendar.icon';
import { CheckIcon } from 'src/shared/components/icons/Check.icon';

import { colors, tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../../navigations/rootStackParams.interface';
import { AccordionOpenItem } from '../../../../shared/components/atoms/Accordion/AccordionOpenAlways.component';
import { DefaultButton } from '../../../../shared/components/atoms/buttons/Button/Button.component';
import { CustomRadioButton } from '../../../../shared/components/atoms/inputs/RadioButton/RadioComponent';
import { SearchInput } from '../../../../shared/components/atoms/inputs/SearchInput/SearchInput.component';
import { AlarmIcon } from '../../../../shared/components/icons/Alarm.icon';
import { CloseIcon } from '../../../../shared/components/icons/Close.icon';
import { InfoIcon } from '../../../../shared/components/icons/Info.icon';
import { TemplateContainerScroll } from '../../../../shared/components/templates/Template.container-scroll';
import { SettingRoute } from '../../enums/SettingRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

interface IProps {
	setTitle: (title: string) => void | Promise<void>;
}

export const SettingWallet: React.FC<IProps> = ({ setTitle }) => {
	const navigation = useNavigation<navigationStack>();
	const [date, setDate] = useState<Date>(new Date());
	const [openDate, setOpenDate] = useState(false);
	const [isClearDate, setIsClearDate] = useState(true);

	const clearDate = () => {
		setIsClearDate(true);
	};

	useFocusEffect(
		useCallback(() => {
			setTitle('Wallet');
		}, [setTitle]),
	);

	const arrayIncludesPaymants = [
		{ includes: 'garage', price: '2' },
		{ includes: 'education', price: '21' },
		{ includes: 'Property', price: '12' },
		{ includes: 'Health ', price: '9' },
		{ includes: 'Pets ', price: '20' },
	];

	const val = [
		{
			key: 'All',
			title: 'All',
		},
		{
			key: 'Paid',
			title: 'Paid',
		},
		{
			key: 'Declined',
			title: 'Declined',
		},
	];

	return (
		<TemplateContainerScroll>
			<View style={tw`px-1`}>
				<AccordionOpenItem
					isInfoIcon={true}
					title={'Card Info'}
					styleTitle='pl-3 font-bold'
					isOpenAlways={true}
					isDisabledExpand={true}
					styleBg='min-h-15 rounded-none'
					menuList={[
						{
							isDisabled: false,
							label: 'View',
							onPress: () => navigation.navigate(SettingRoute.SettingWalletChange),
						},
					]}>
					<View style={tw`bg-white rounded-[20px] shadow p-[10px] pt-[2px]`}>
						<TextItem
							typeInput='Сardholder name'
							valueInput='Alexandra Junior Ross'
							styleLabel='normal-case text-[#B5B5B5]'
						/>
						<View style={tw`flex flex-row items-center justify-between mt-4 mb-5`}>
							<TextItem
								typeInput='Card number'
								valueInput='**** **** **** 4242'
								style='w-5/12'
								styleLabel='normal-case text-[#B5B5B5]'
							/>
							<TextItem
								typeInput='MM/YY'
								valueInput='05/22'
								style='w-3/12'
								styleLabel='normal-case text-[#B5B5B5]'
							/>
							<TextItem
								typeInput='CVC'
								valueInput='****'
								style='w-2/12'
								styleLabel='normal-case text-[#B5B5B5]'
							/>
						</View>
						<View style={tw`flex flex-row items-center justify-between`}>
							<Image source={require('../../images/cards123.jpg')} style={tw`w-[100%] h-4`} />
						</View>
					</View>
				</AccordionOpenItem>

				<View style={tw`mt-8 pb-10`}>
					<TouchableOpacity
						activeOpacity={1}
						style={tw`bg-white shadow py-2 px-3 h-15 pl-4 justify-start flex-row items-center`}>
						<Text style={tw`font-bold text-md uppercase`}>Billing History</Text>
						<TouchableOpacity style={tw`ml-1`}>
							<InfoIcon fillIcon={colors.grey} />
						</TouchableOpacity>
					</TouchableOpacity>
					<DatePicker
						modal
						mode='date'
						open={openDate}
						date={date as Date}
						onConfirm={d => {
							setOpenDate(false);
							setIsClearDate(false);
							setDate(d);
						}}
						onCancel={() => {
							setOpenDate(false);
							setIsClearDate(true);
						}}
					/>
					<View style={tw`py-2 flex-row items-center justify-between mb-4`}>
						<View
							style={tw`w-[38%] rounded border border-grey mt-5 flex-row items-center justify-between pr-2`}>
							<TouchableOpacity
								style={tw`relative flex-row items-center py-2.5 px-2`}
								activeOpacity={1}
								onPress={() => setOpenDate(true)}>
								<Text
									style={tw`absolute left-3 -top-[6px] bg-greyBg px-1 text-grey uppercase text-[10px]`}>
									By date
								</Text>
								<CalendarIcon fillIcon={colors.greenInput} />
								<Text style={tw`ml-1 ${isClearDate ? 'text-greyBg' : 'text-black'}`}>
									{moment(date).format('L')}
								</Text>
							</TouchableOpacity>
							{!isClearDate ? (
								<TouchableOpacity onPress={clearDate}>
									<CloseIcon />
								</TouchableOpacity>
							) : null}
						</View>
						<View style={tw`w-58% -mb-5`}>
							<View>
								<CustomRadioButton listRadio={val} activeKey='all' />
							</View>
						</View>
					</View>
					<View style={tw`mb-5`}>
						<SearchInput labelValue='Search' />
					</View>
					<AccordionWallet
						invoiceId='000001'
						dueDate='06/14/22'
						totalSum='5'
						iconStart={<CheckIcon />}
						isIconStart={true}>
						<View style={tw`p-4`}>
							<View style={tw`flex flex-row items-center justify-between mb-1`}>
								<Text style={tw`text-darkGrey text-[13px]`}>Includes</Text>
								<Text style={tw`text-darkGrey text-[13px] w-15 bg-red`}>Unit price</Text>
							</View>
							{arrayIncludesPaymants.map((item, key) => (
								<View style={tw`relative`} key={key}>
									<View style={tw`flex flex-row items-center justify-between py-2`}>
										<Text style={tw`text-black text-[13px] capitalize leading-5`}>
											{item.includes}
										</Text>
										<Text style={tw`text-black text-[13px] capitalize leading-5 w-15`}>
											{item.price} $
										</Text>
									</View>
									<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs -mt-2`}>
										----------------------------------------------------------------------------------------------------------------------------------------
									</Text>
								</View>
							))}
						</View>
					</AccordionWallet>
					<AccordionWallet
						invoiceId='000001'
						dueDate='06/14/22'
						totalSum='5'
						iconStart={<CheckIcon />}
						isIconStart={true}>
						<View style={tw`p-4`}>
							<View style={tw`flex flex-row items-center justify-between mb-1`}>
								<Text style={tw`text-darkGrey text-[13px]`}>Includes</Text>
								<Text style={tw`text-darkGrey text-[13px] w-15`}>Unit price</Text>
							</View>
							{arrayIncludesPaymants.map((item, key) => (
								<View style={tw`relative`} key={key}>
									<View style={tw`flex flex-row items-center justify-between py-2`}>
										<Text style={tw`text-black text-[13px] capitalize leading-5`}>
											{item.includes}
										</Text>
										<Text style={tw`text-black text-[13px] capitalize leading-5 w-15`}>
											{item.price} $
										</Text>
									</View>
									<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs -mt-2`}>
										----------------------------------------------------------------------------------------------------------------------------------------
									</Text>
								</View>
							))}
						</View>
					</AccordionWallet>
					<AccordionWallet
						invoiceId='000001'
						dueDate='06/14/22'
						totalSum='5'
						iconStart={<CheckIcon />}
						isIconStart={true}>
						<View style={tw`p-4`}>
							<View style={tw`flex flex-row items-center justify-between mb-1`}>
								<Text style={tw`text-darkGrey text-[13px]`}>Includes</Text>
								<Text style={tw`text-darkGrey text-[13px] w-15`}>Unit price</Text>
							</View>
							{arrayIncludesPaymants.map((item, key) => (
								<View style={tw`relative`} key={key}>
									<View style={tw`flex flex-row items-center justify-between py-2`}>
										<Text style={tw`text-black text-[13px] capitalize leading-5`}>
											{item.includes}
										</Text>
										<Text style={tw`text-black text-[13px] capitalize leading-5 w-15`}>
											{item.price} $
										</Text>
									</View>
									<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs -mt-2`}>
										----------------------------------------------------------------------------------------------------------------------------------------
									</Text>
								</View>
							))}
						</View>
					</AccordionWallet>
					<AccordionWallet
						invoiceId='000001'
						dueDate='06/14/22'
						totalSum='5'
						iconStart={<AlarmIcon />}
						isIconStart={true}
						isDisabledExpand={true}>
						<View style={tw`p-4`}>
							<View style={tw`flex flex-row items-center justify-between mb-1`}>
								<Text style={tw`text-darkGrey text-[13px]`}>Includes</Text>
								<Text style={tw`text-darkGrey text-[13px] w-15`}>Unit price</Text>
							</View>
							{arrayIncludesPaymants.map((item, key) => (
								<View style={tw`relative`} key={key}>
									<View style={tw`flex flex-row items-center justify-between py-2`}>
										<Text style={tw`text-black text-[13px] capitalize leading-5`}>
											{item.includes}
										</Text>
										<Text style={tw`text-black text-[13px] capitalize leading-5 w-15`}>
											{item.price} $
										</Text>
									</View>
									<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs -mt-2`}>
										----------------------------------------------------------------------------------------------------------------------------------------
									</Text>
								</View>
							))}
							<View style={tw`flex-row justify-end py-5 -mr-2`}>
								<DefaultButton title='Pay now' color='secondary' variant='outlined' />
							</View>
						</View>
					</AccordionWallet>
				</View>
			</View>
		</TemplateContainerScroll>
	);
};
