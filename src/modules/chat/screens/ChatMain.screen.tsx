import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { MainHeader } from '../../../shared/components/atoms/Headers/MainHeader.component';
import { headerObjectWithTabBar } from '../components/Tabs/ChatTopTabs.component';
import { GroupChats } from '../components/Tabs/GroupChats.component';
import { PersonalChats } from '../components/Tabs/PersonalChats.component';

const Tab = createMaterialTopTabNavigator();

export const ChatMain = () => {
	return (
		<SafeAreaView>
			<View style={tw`w-full h-full bg-greyBg relative`}>
				<MainHeader title='Сhat' />
				<Tab.Navigator
					initialRouteName='General'
					screenOptions={{
						tabBarIndicatorStyle: { backgroundColor: '#F9F9F9' },
						tabBarItemStyle: {
							alignItems: 'flex-start',
							borderWidth: 0,
							paddingLeft: 5,
							paddingRight: 0,
						},
						tabBarShowLabel: false,
						tabBarStyle: { backgroundColor: '#F9F9F9', borderWidth: 0 },
					}}>
					<Tab.Screen
						name='Personal'
						component={PersonalChats}
						options={() => headerObjectWithTabBar('personal')}
					/>
					<Tab.Screen name='Log out' component={GroupChats} options={() => headerObjectWithTabBar('group')} />
				</Tab.Navigator>
			</View>
		</SafeAreaView>
	);
};
