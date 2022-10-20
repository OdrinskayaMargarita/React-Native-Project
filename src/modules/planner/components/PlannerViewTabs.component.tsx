import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { PlannerViewNotes } from '../../backlog/components/atom/PlannerViewNotes.component';

import { PlannerViewActivity } from './PlannerViewActivity.component';
import { PlannerViewChecklist } from './PlannerViewChecklist.component';
import { PlannerViewComments } from './PlannerViewComments.component';
import { PlannerViewMain } from './PlannerViewMain.component';

const bottomTabLayouts = (type: string, colorText: string) => {
	switch (type) {
		case 'main':
			return <Text style={tw`w-[50px] text-sm text-center capitalize font-bold ${colorText}`}>{type}</Text>;
		case 'checklist':
			return <Text style={tw`w-[55px] text-sm text-center capitalize font-bold ${colorText}`}>{type}</Text>;
		case 'comments':
			return <Text style={tw`w-[58px] text-sm text-center capitalize font-bold ${colorText}`}>{type}</Text>;
		case 'notes':
			return <Text style={tw`w-[50px] text-sm text-center capitalize font-bold ${colorText}`}>{type}</Text>;
		case 'activity':
			return <Text style={tw`w-[50px] text-sm text-center capitalize font-bold ${colorText}`}>{type}</Text>;
		default:
			return <Text style={tw`w-[50px] text-sm text-center capitalize font-bold ${colorText}`}>{type}</Text>;
	}
};

const headerObjectWithTabBar = (type: string) => ({
	tabBarIcon: ({ focused }: any) => bottomTabLayouts(type, focused ? 'text-greenInput' : 'text-black'),
});

const Tab = createMaterialTopTabNavigator();

export const PlannerViewTabs = () => {
	return (
		<View style={tw`border-b border-grey h-full w-full`}>
			<Tab.Navigator
				initialRouteName='General'
				screenOptions={{
					tabBarIndicatorStyle: { backgroundColor: '#F9F9F9' },
					tabBarItemStyle: {
						alignItems: 'flex-start',
						borderWidth: 0,
						paddingBottom: 0,
						paddingLeft: 10,
						paddingRight: 0,
						paddingTop: 0,
						width: 70,
					},
					tabBarScrollEnabled: true,
					tabBarShowLabel: false,
					tabBarStyle: { backgroundColor: '#F9F9F9', borderWidth: 0 },
				}}>
				<Tab.Screen name='main' component={PlannerViewMain} options={() => headerObjectWithTabBar('main')} />
				<Tab.Screen
					name='Packages'
					component={PlannerViewChecklist}
					options={() => headerObjectWithTabBar('checklist')}
				/>
				<Tab.Screen
					name='Hubs'
					component={PlannerViewComments}
					options={() => headerObjectWithTabBar('comments')}
				/>
				<Tab.Screen
					name='Wallet'
					component={PlannerViewNotes}
					options={() => headerObjectWithTabBar('Notes')}
				/>
				<Tab.Screen
					name='Sync'
					component={PlannerViewActivity}
					options={() => headerObjectWithTabBar('activity')}
				/>
			</Tab.Navigator>
		</View>
	);
};
