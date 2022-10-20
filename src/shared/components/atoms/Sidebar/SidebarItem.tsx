import * as React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { tw } from '@lib/tailwind';

import { BacklogMenuIcon } from '../../icons/BacklogMenu.icon';
import { ChatIcon } from '../../icons/Chat.icon';
import { NetworkIcon } from '../../icons/Network.icon';
import { SettingOutlinedIcon } from '../../icons/SettingOutlined.icon';

import { PlannerIcon } from './icons/Planner.icon';
import { ItemIconType, ItemProps } from './types';

const iconList: Record<ItemIconType, React.ReactElement> = {
	backlog: <BacklogMenuIcon />,
	chat: <ChatIcon />,
	feedback: <PlannerIcon />,
	network: <NetworkIcon />,
	planner: <PlannerIcon />,
	settings: <SettingOutlinedIcon />,
};

export const SidebarItem: React.FC<ItemProps> = ({ icon, title, notifications, onPress, onCloseSidebar }) => {
	const onPressItem = () => {
		onPress();
		onCloseSidebar();
	};
	return (
		<TouchableOpacity style={tw`flex items-center flex-row w-full`} onPress={onPressItem}>
			<View style={tw`w-8 items-center justify-center`}>
				<Text>{iconList[icon]} </Text>
			</View>
			<Text style={tw`ml-2 text-[13px] text-darkGrey font-bold`}>{title}</Text>
			{notifications.count ? (
				<View style={tw`ml-2 bg-red px-1.5 rounded-lg`}>
					<Text style={tw`text-xs text-white`}>{notifications.count}</Text>
				</View>
			) : null}
		</TouchableOpacity>
	);
};
