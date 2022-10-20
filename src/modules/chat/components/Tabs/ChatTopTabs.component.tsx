import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

import { tw } from '@lib/tailwind';

export const bottomTabLayouts = (type: string, color: string) => {
	switch (type) {
		case 'personal':
			return (
				<View style={tw`border-r border-grey w-50 flex-row items-center pl-5`}>
					<Text style={tw`text-sm text-center capitalize font-bold ${color}`}>Personal Chat</Text>
					<View style={tw`w-4 h-4 bg-red rounded-full ml-2 items-center justify-center`}>
						<Text style={tw`text-white text-[9px]`}>56</Text>
					</View>
				</View>
			);
		case 'group':
			return (
				<View style={tw`w-45  flex-row items-center pl-5`}>
					<Text style={tw`text-sm text-center capitalize font-bold ${color}`}>Group Chat</Text>
					<View style={tw`w-4 h-4 bg-red rounded-full ml-2 items-center justify-center`}>
						<Text style={tw`text-white text-[9px]`}>56</Text>
					</View>
				</View>
			);
		default:
			return (
				<View style={tw`w-45`}>
					<Text style={tw`text-sm text-center capitalize font-bold ${color}`}>Group Chat</Text>
				</View>
			);
	}
};

export const headerObjectWithTabBar = (type: string) => ({
	tabBarIcon: ({ focused }: any) => bottomTabLayouts(type, focused ? 'text-greenInput' : 'text-black'),
});

export const Tab = createMaterialTopTabNavigator();
