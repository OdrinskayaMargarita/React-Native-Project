import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { ArchiveIcon } from '../../../shared/components/icons/Archive.icon';
import { DotsSquareIcon } from '../../../shared/components/icons/DotsSquare.icon';
import { LogOutIcon } from '../../../shared/components/icons/LogOut.icon';
import { PackagesIcon } from '../../../shared/components/icons/Packages.icon';
import { SettingIcon } from '../../../shared/components/icons/Setting.icon';
import { StorageIcon } from '../../../shared/components/icons/Storage.icon';
import { WalletIcon } from '../../../shared/components/icons/Wallet.icon';

export const bottomTabLayouts = (type: string, color: string, colorBg: string) => {
	switch (type) {
		case 'general':
			return (
				<View>
					<View
						style={tw`mb-2 items-center justify-center w-[50px] h-[50px] rounded-md border border-lightGrey ${colorBg}`}>
						<SettingIcon fillIcon={color} />
					</View>
					<Text style={tw`w-[50px] text-[11px]  text-center capitalize`}>{type}</Text>
				</View>
			);
		case 'hubs':
			return (
				<View>
					<View
						style={tw`mb-2 items-center justify-center w-[50px] h-[50px] rounded-md border border-lightGrey ${colorBg}`}>
						<DotsSquareIcon fillIcon={color} />
					</View>
					<Text style={tw`w-[50px] text-[11px] text-center capitalize`}>{type}</Text>
				</View>
			);
		case 'packages':
			return (
				<View>
					<View
						style={tw`mb-2 items-center justify-center w-[50px] h-[50px] rounded-md border border-lightGrey ${colorBg}`}>
						<PackagesIcon fillIcon={color} />
					</View>
					<Text style={tw`w-[52px] text-[11px] text-center capitalize`}>{type}</Text>
				</View>
			);
		case 'wallet':
			return (
				<View>
					<View
						style={tw`mb-2 items-center justify-center w-[50px] h-[50px] rounded-md border border-lightGrey ${colorBg}`}>
						<WalletIcon fillIcon={color} />
					</View>
					<Text style={tw`w-[50px] text-[11px] text-center capitalize`}>{type}</Text>
				</View>
			);
		case 'storage':
			return (
				<View>
					<View
						style={tw`mb-2 items-center justify-center w-[50px] h-[50px] rounded-md border border-lightGrey bg-white`}>
						<StorageIcon fillIcon={colors.grey} />
					</View>
					<Text style={tw`w-[50px] text-[11px] text-grey text-center capitalize`}>{type}</Text>
				</View>
			);
		case 'archive':
			return (
				<View>
					<View
						style={tw`mb-2 items-center justify-center w-[50px] h-[50px] rounded-md border border-lightGrey ${colorBg}`}>
						<ArchiveIcon fillIcon={color} />
					</View>
					<Text style={tw`w-[50px] text-[11px] text-center capitalize`}>{type}</Text>
				</View>
			);
		case 'logOut':
			return (
				<View>
					<View
						style={tw`mb-2 items-center justify-center w-[50px] h-[50px] rounded-md border border-lightGrey ${colorBg}`}>
						<LogOutIcon fillIcon={color} />
					</View>
					<Text style={tw`w-[50px] text-[11px] text-center capitalize`}>{type}</Text>
				</View>
			);
		default:
			return <SettingIcon fillIcon={color} />;
	}
};

export const headerObjectWithTabBar = (type: string) => ({
	tabBarIcon: ({ focused }: any) =>
		bottomTabLayouts(type, focused ? colors.white : colors.greenInput, focused ? 'bg-greenInput' : 'bg-white'),
});

export const Tab = createMaterialTopTabNavigator();
