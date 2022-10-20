import * as React from 'react';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Popover } from 'native-base';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { LinkPressable } from '../../../shared/components/atoms/LinkPressable/LinkPressable.component';
import { CopySquareIcon } from '../../../shared/components/icons/CopySquare.icon';
import { MoreVertical } from '../../../shared/components/icons/MoreVertical.icon';
import { PersonIcon } from '../../../shared/components/icons/Person.icon';
import { PinContainedIcon } from '../../../shared/components/icons/PinContained.icon';
import { RemoveCircle } from '../../../shared/components/icons/RemoveCircle.icon';
import { NetworkRoute } from '../enums/networkRoute.enum';
import { getColor } from '../helpers/ContactGetIconOptions.component';

interface IProps {
	name: string;
	status: string;
	phone?: string;
	email?: string;
	adress?: string;
	type: 'connected' | 'pending' | 'sentRequest' | 'futureSentRequest' | 'contacts';
	contactStatus?: boolean;
	menuList: typeMenuList[];
}

interface typeMenuList {
	label: string;
	onPress: () => void | Promise<void>;
	isDisabled?: boolean;
}

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const ContactItem: React.FC<IProps> = ({
	name = '',
	status = '',
	email = '',
	phone = '',
	adress = '',
	type = 'connected',
	menuList,
	contactStatus = false,
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
	const navigation = useNavigation<navigationStack>();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const closePopover = () => setIsOpen(!isOpen);

	return (
		<View style={tw`my-2 w-full`}>
			<View style={tw`flex-row items-start w-full justify-between w-full bg-white rounded-md shadow py-3 px-4`}>
				<TouchableOpacity onPress={toggleDropdown} style={tw`w-70% flex-row items-start`}>
					<View style={tw`flex-row items-center w-10/12`}>
						<View style={tw`mr-4`}>
							{type !== 'contacts' ? (
								<Image source={require('../images/avatar.png')} style={tw`w-14 h-14 rounded-full`} />
							) : (
								<View style={tw`w-14 h-14 rounded-full border border-grey items-center justify-center`}>
									<View style={tw`rounded border border-grey w-6 h-6 items-center justify-center`}>
										<PersonIcon />
									</View>
								</View>
							)}
						</View>
						<View>
							<Text style={tw`font-bold text-sm capitalize`}>{name || 'Alex Romanov'}</Text>
							<Text style={tw`text-grey text-xs capitalize`}>{status || 'Friend'}</Text>
						</View>
					</View>
				</TouchableOpacity>

				<View style={tw`w-30% flex-row items-center justify-end h-full`}>
					{type === 'pending' ? (
						<TouchableOpacity style={tw`flex items-center justify-center mr-5`}>
							<View style={tw`w-8 h-8 rounded-full items-center justify-center bg-red`}>
								<View style={tw`${contactStatus ? 'opacity-70' : ''}`}>
									<RemoveCircle />
								</View>
							</View>
						</TouchableOpacity>
					) : null}
					<TouchableOpacity style={tw`flex items-center justify-center mr-3 ${contactStatus ? '-ml-8' : ''}`}>
						<View style={tw`w-8 h-8 rounded-full items-center justify-center ${getColor(type).bgButton}`}>
							<View
								style={tw`${
									type === 'sentRequest' ? '-mr-[3px] -mb-[3px]' : contactStatus ? 'opacity-70' : ''
								}`}>
								{getColor(type).iconButton}
							</View>
						</View>
						{type === 'contacts' && contactStatus ? (
							<Text
								style={tw`text-center text-[11px] bg-[#FAFAFA] rounded shadow py-1 px-3 text-darkGrey`}>
								Already invited
							</Text>
						) : type === 'contacts' ? (
							<Text style={tw`text-center`}>Invite</Text>
						) : null}
					</TouchableOpacity>

					<View style={tw`flex-row items-center`}>
						{menuList?.length ? (
							<Popover
								placement='bottom right'
								onClose={closePopover}
								isOpen={isOpen}
								trigger={triggerProps => {
									return (
										<TouchableOpacity {...triggerProps} onPress={() => setIsOpen(true)}>
											<MoreVertical width={18} height={18} />
										</TouchableOpacity>
									);
								}}>
								<Popover.Content>
									<Popover.Body style={tw`bg-white`}>
										{menuList?.map((item, key: number) => (
											<LinkPressable
												isDisabled={item.isDisabled}
												onClosePopover={closePopover}
												handleNavigate={item.onPress}
												label={item.label}
												key={key}
											/>
										))}
									</Popover.Body>
								</Popover.Content>
							</Popover>
						) : null}
					</View>
				</View>
			</View>

			<View style={tw` ${isDropdownOpen ? 'flex' : 'hidden opacity-0'} p-1 pt-4 w-full`}>
				<TouchableOpacity
					onPress={() => {
						status === 'contacts'
							? navigation.navigate(NetworkRoute.NetworkShowContact)
							: navigation.navigate(NetworkRoute.NetworkShowContactDefault);
					}}>
					{email.length ? (
						<View style={tw`w-full flex-row items-center justify-between p-2`}>
							<View style={tw`w-full border-b border-lightGrey`}>
								<Text style={tw`uppercase text-darkGrey text-[9px]`}>Email</Text>
								<View style={tw`w-full flex-row items-center justify-between`}>
									<Text style={tw`text-xs text-darkBlue`}>{email}</Text>
									<TouchableOpacity style={tw`p-1 items-center justify-center`}>
										<CopySquareIcon fillIcon={colors.greenInput} />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					) : null}
					{phone.length ? (
						<View style={tw`w-full flex-row items-center justify-between p-2`}>
							<View style={tw`w-full border-b border-lightGrey`}>
								<Text style={tw`uppercase text-darkGrey text-[9px]`}>Phone number</Text>
								<View style={tw`w-full flex-row items-center justify-between`}>
									<Text style={tw`text-xs text-darkBlue`}>{phone}</Text>
									<TouchableOpacity style={tw`p-1 items-center justify-center`}>
										<CopySquareIcon fillIcon={colors.greenInput} />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					) : null}
					{adress.length ? (
						<View style={tw`w-full flex-row items-center justify-between p-2`}>
							<View style={tw`w-full border-b border-lightGrey`}>
								<Text style={tw`uppercase text-darkGrey text-[9px]`}>Adress</Text>
								<View style={tw`w-full flex-row items-center justify-between`}>
									<Text
										style={tw`text-sm text-black w-70% leading-5`}
										numberOfLines={2}
										ellipsizeMode='tail'>
										{adress}
									</Text>
									<TouchableOpacity style={tw`p-1 items-center justify-center`}>
										<PinContainedIcon fillIcon={colors.greenInput} />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					) : null}
				</TouchableOpacity>
			</View>
		</View>
	);
};
