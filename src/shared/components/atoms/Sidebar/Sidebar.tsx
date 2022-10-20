import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Modal, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Platform } from 'react-native';

import { tw } from '@lib/tailwind';

import { SettingRoute } from '../../../../modules/settings/enums/SettingRoute.enum';
import { RootStackParamList } from '../../../../navigations/rootStackParams.interface';
import { DefaultButton } from '../buttons/Button/Button.component';
import { ButtonNavigation } from '../buttons/ButtonNavigation/ButtonNavigation.component';

import { SidebarItem } from './SidebarItem';
import { AvatarProps, ItemProps } from './types';
import { UsersInfo } from './UsersInfo';

interface IProps {
	isVisible: boolean;
	items: ItemProps[];
	avatar: AvatarProps;
	onOverlayTap?: () => void | Promise<void>;
	close: () => void | Promise<void>;
}
type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const Sidebar: React.FC<IProps> = ({ isVisible, items, avatar, onOverlayTap, close }) => {
	const navigation = useNavigation<navigationStack>();
	const systemItems: ItemProps[] = [
		{
			icon: 'settings',
			isVisible: true,
			notifications: { count: 0 },
			onCloseSidebar: close,
			onPress: () => navigation.navigate(SettingRoute.Setting),
			title: 'Settings',
		},
		{
			icon: 'feedback',
			isVisible: true,
			notifications: { count: 0 },
			onCloseSidebar: close,
			onPress: () => navigation.navigate(SettingRoute.Setting),
			title: 'Feedback',
		},
	];

	return (
		<SafeAreaView>
			<Modal animationType='fade' transparent={true} visible={isVisible}>
				<View style={tw`${Platform.OS === 'ios' ? 'pt-10' : 'pt-0'}`}>
					<TouchableOpacity
						activeOpacity={1}
						onPressOut={onOverlayTap}
						style={tw`flex h-full justify-center items-start relative`}>
						<View style={tw`w-full h-full bg-black absolute opacity-40`} />
						<View style={tw`absolute right-5 top-5`}>
							<ButtonNavigation type={'close'} onPress={close} />
						</View>
						<TouchableWithoutFeedback>
							<View style={tw`flex w-[200px] h-full bg-white items-center`}>
								<View style={tw`w-full pt-2.5 px-3`}>
									<View style={tw`w-full border-b border-lightGrey pb-2.5`}>
										<UsersInfo {...avatar} onCloseSidebar={close} />
									</View>
								</View>

								<View style={tw`w-full flex-1 py-2.5 px-3`}>
									{items.map((item, index) =>
										item.isVisible ? (
											<View
												style={tw`w-full p-2.5 ${index ? 'mt-3' : ''}`}
												key={`${item.icon}:${index}`}>
												<SidebarItem {...item} onCloseSidebar={close} />
											</View>
										) : null,
									)}
									<View style={tw`mt-6 items-center flex-row justify-center`}>
										<DefaultButton title='Add hubs' size='md' variant='outlined' />
									</View>
								</View>
								<View style={tw`w-full pb-2.5 px-3`}>
									<View style={tw`w-full border-t border-lightGrey pt-2.5`}>
										{systemItems.map((item, index) =>
											item.isVisible ? (
												<View
													style={tw`w-full p-2.5 ${index ? 'mt-3' : ''}`}
													key={`${item.icon}:${index}`}>
													<SidebarItem {...item} />
												</View>
											) : null,
										)}
									</View>
								</View>
							</View>
						</TouchableWithoutFeedback>
					</TouchableOpacity>
				</View>
			</Modal>
		</SafeAreaView>
	);
};
