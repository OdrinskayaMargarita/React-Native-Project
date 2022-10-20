import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { BacklogViewActivity } from './BacklogViewActivity.component';
import { BacklogViewChecklist } from './BacklogViewChecklist.component';
import { BacklogViewComments } from './BacklogViewComments.component';
import { BacklogViewMain } from './BacklogViewMain.component';
import { BacklogViewNotes } from './BacklogViewNotes.component';

const Tab = createMaterialTopTabNavigator();

export const BacklogViewTabs = () => {
	return (
		<View style={tw`border-b border-grey h-full w-full bg-white`}>
			<Tab.Navigator
				initialRouteName='General'
				screenOptions={{
					tabBarItemStyle: { padding: 0, width: 75 },
					tabBarLabelStyle: {
						color: colors.darkGrey,
						fontSize: 12,
						fontWeight: 'bold',
						textTransform: 'capitalize',
					},
					tabBarStyle: { backgroundColor: '#FFFFFF', width: '100%' },
				}}>
				<Tab.Screen
					name='Main'
					component={BacklogViewMain}
					// options={() => headerObjectWithTabBar('main')}
				/>
				<Tab.Screen
					name='Checklist'
					component={BacklogViewChecklist}
					// options={() => headerObjectWithTabBar('checklist')}
				/>
				<Tab.Screen
					name='Comments'
					component={BacklogViewComments}
					// options={() => headerObjectWithTabBar('comments')}
				/>
				<Tab.Screen
					name='Notes'
					component={BacklogViewNotes}
					// options={() => headerObjectWithTabBar('Notes')}
				/>
				<Tab.Screen
					name='Activity'
					component={BacklogViewActivity}
					// options={() => headerObjectWithTabBar('activity')}
				/>
			</Tab.Navigator>
		</View>
	);
};
