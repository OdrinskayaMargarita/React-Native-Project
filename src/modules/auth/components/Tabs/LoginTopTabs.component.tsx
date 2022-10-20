import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

import { tw } from '@lib/tailwind';

export const bottomTabLayouts = (type: string, color: string) => {
	switch (type) {
		case 'signIn':
			return (
				<View style={tw`items-center justify-center h-10 w-20 -ml-7`}>
					<Text style={tw`text-sm capitalize font-bold ${color}`}>Sign In</Text>
				</View>
			);
		case 'signUp':
			return (
				<View style={tw`items-center justify-center h-10 w-20 -ml-7`}>
					<Text style={tw`text-sm capitalize font-bold ${color}`}>Sign Up</Text>
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
