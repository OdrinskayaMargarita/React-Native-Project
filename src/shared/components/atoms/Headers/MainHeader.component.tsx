import * as React from 'react';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';

import { tw } from '@lib/tailwind';

import { BacklogRoute } from '../../../../modules/backlog/enums/BacklogRoute.enum';
import { ChatRoute } from '../../../../modules/chat/enums/ChatRoute.enum';
import { NetworkRoute } from '../../../../modules/network/enums/networkRoute.enum';
import { PlannerRoute } from '../../../../modules/planner/enums/plannerRoute.enum';
import { RootStackParamList } from '../../../../navigations/rootStackParams.interface';
import { BurgerIcon } from '../../icons/Burger.icon';
import { MenuIcon } from '../../icons/Menu.icon';
import { Sidebar } from '../Sidebar/Sidebar';
import { SidebarNotes } from '../SidebarNotes/SidebarNotes';

interface IProps {
	title: string;
}
type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const MainHeader: React.FC<IProps> = ({ title }) => {
	const [isVisibleSidebar, setIsVisibleSidebar] = useState<boolean>(false);
	const [isVisibleSidebarNotes, setIsVisibleSidebarNotes] = useState<boolean>(false);
	const navigation = useNavigation<navigationStack>();

	return (
		<View style={tw`bg-greyBg`}>
			<View style={tw`top-0 left-0 px-4 pt-4 pb-2`}>
				<View style={tw`border-b border-[#F2EDED] flex-row justify-between items-center w-full pb-4`}>
					<TouchableOpacity
						onPress={() => {
							setIsVisibleSidebar(true);
						}}>
						<BurgerIcon />
					</TouchableOpacity>
					<View style={tw`flex flex-row`}>
						<Text style={tw`flex text-base text-black uppercase px-2`}>{title}</Text>
					</View>
					<TouchableOpacity
						onPress={() => {
							setIsVisibleSidebarNotes(true);
						}}>
						<MenuIcon />
					</TouchableOpacity>
				</View>
			</View>

			<Sidebar
				isVisible={isVisibleSidebar}
				avatar={{
					avatar: '',
					firstName: 'Kyrylo',
					isPremium: false,
					lastName: 'Sotnykov',
					onCloseSidebar: () => setIsVisibleSidebar(false),
				}}
				items={[
					{
						icon: 'planner',
						isVisible: true,
						notifications: { count: 0 },
						onCloseSidebar: () => setIsVisibleSidebar(false),
						onPress: () => navigation.navigate(PlannerRoute.list),
						title: 'Planner',
					},
					{
						icon: 'backlog',
						isVisible: true,
						notifications: { count: 0 },
						onCloseSidebar: () => setIsVisibleSidebar(false),
						onPress: () => navigation.navigate(BacklogRoute.Backlog),
						title: 'Backlog',
					},
					{
						icon: 'network',
						isVisible: true,
						notifications: { count: 0 },
						onCloseSidebar: () => setIsVisibleSidebar(false),
						onPress: () => navigation.navigate(NetworkRoute.Network),
						title: 'Network',
					},
					{
						icon: 'chat',
						isVisible: true,
						notifications: { count: 10 },
						onCloseSidebar: () => setIsVisibleSidebar(false),
						onPress: () => navigation.navigate(ChatRoute.ChatMain),
						title: 'Chat',
					},
				]}
				close={() => {
					setIsVisibleSidebar(false);
				}}
				onOverlayTap={() => {
					setIsVisibleSidebar(false);
				}}
			/>
			<SidebarNotes
				isVisible={isVisibleSidebarNotes}
				close={() => {
					setIsVisibleSidebarNotes(false);
				}}
				onOverlayTap={() => {
					setIsVisibleSidebarNotes(false);
				}}
			/>
		</View>
	);
};
