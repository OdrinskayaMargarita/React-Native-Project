import * as React from 'react';
import { useEffect, useState } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, Text, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../actions/common.actions';
import { getProfileSettings } from '../../../actions/setting.actions';
import { MainHeader } from '../../../shared/components/atoms/Headers/MainHeader.component';
import { useAppDispatch } from '../../../store/configureStore';
import { SettingGeneral } from '../components/organisms/SettingGeneral.component';
import { SettingHubs } from '../components/organisms/SettingHubs.component';
import { SettingLogOut } from '../components/organisms/SettingLogOut.component';
import { SettingWallet } from '../components/organisms/SettingWallet.component';
import { headerObjectWithTabBar } from '../components/SettingTopTabs.component';

function HomeScreen() {
	return (
		<View
			style={{
				alignItems: 'center',
				backgroundColor: 'red',
				flex: 1,
				height: 100,
				justifyContent: 'center',
			}}>
			<Text>Home!</Text>
		</View>
	);
}

const Tab = createMaterialTopTabNavigator();

export const SettingAllScreen = () => {
	const [title, setTitle] = useState<string>('');
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			dispatchWithLoader(async () => {
				await dispatch(getProfileSettings());
			}),
		);
	}, [dispatch]);

	return (
		<SafeAreaView>
			<View style={tw`w-full h-full bg-greyBg relative`}>
				<MainHeader title={title} />
				<Tab.Navigator
					initialRouteName='General'
					screenOptions={{
						tabBarIndicatorStyle: { backgroundColor: '#F9F9F9' },
						tabBarItemStyle: {
							alignItems: 'flex-start',
							justifyContent: 'flex-start',
							paddingBottom: 50,
							paddingLeft: 10,
							paddingRight: 0,
							paddingTop: 10,
							width: 70,
						},
						tabBarScrollEnabled: true,
						tabBarShowLabel: false,
						tabBarStyle: {
							backgroundColor: '#F9F9F9',
							borderBottomColor: 'transparent',
							borderBottomWidth: 0,
							borderWidth: 0,
							elevation: 0,
							shadowColor: 'transparent',
						},
					}}>
					<Tab.Screen
						name='General'
						component={() => SettingGeneral({ setTitle })}
						options={() => headerObjectWithTabBar('general')}
					/>
					<Tab.Screen
						name='Packages'
						component={HomeScreen}
						options={() => headerObjectWithTabBar('packages')}
					/>
					<Tab.Screen
						name='Hubs'
						component={() => SettingHubs({ setTitle })}
						options={() => headerObjectWithTabBar('hubs')}
					/>
					<Tab.Screen
						name='Wallet'
						component={() => SettingWallet({ setTitle })}
						options={() => headerObjectWithTabBar('wallet')}
					/>
					<Tab.Screen
						name='Storage'
						component={HomeScreen}
						options={() => headerObjectWithTabBar('storage')}
					/>
					<Tab.Screen
						name='Archive'
						component={HomeScreen}
						options={() => headerObjectWithTabBar('archive')}
					/>
					<Tab.Screen
						name='Log out'
						component={() => SettingLogOut({ setTitle })}
						options={() => headerObjectWithTabBar('logOut')}
					/>
				</Tab.Navigator>
			</View>
		</SafeAreaView>
	);
};
