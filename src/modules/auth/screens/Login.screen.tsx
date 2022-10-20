import * as React from 'react';
import { useEffect, useState } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text } from 'native-base';
import { Image, View } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../actions/common.actions';
import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { setToken } from '../../../reducers/auth.slice';
import { secureStorage } from '../../../services/secure-storage';
import { TemplateContainer } from '../../../shared/components/templates/Template.container';
import { TemplateContainerKeyboard } from '../../../shared/components/templates/TemplateKeyboard.container';
import { useAppDispatch } from '../../../store/configureStore';
import { PlannerRoute } from '../../planner/enums/plannerRoute.enum';
import { headerObjectWithTabBar } from '../components/Tabs/LoginTopTabs.component';
import { SignIn } from '../components/Tabs/SignIn.conponent';
import { SignUp } from '../components/Tabs/SignUp.component';

const Tab = createMaterialTopTabNavigator();
type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const LoginScreen = () => {
	const [title, setTitle] = useState<string>('Welcome');
	const navigation = useNavigation<navigationStack>();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			dispatchWithLoader(async () => {
				const tokenUser = await secureStorage.getUserToken();

				if (tokenUser?.length) {
					dispatch(setToken(tokenUser));
					return navigation.replace(PlannerRoute.list);
				}
			}),
		);
	}, [dispatch, navigation]);

	return (
		<TemplateContainerKeyboard>
			<View style={tw`w-full flex pt-10`}>
				<View style={tw`w-full flex items-center`}>
					<View style={tw`mb-4`}>
						<Image source={require('../images/logoLogin.png')} style={tw`h-[55px] w-[52px]`} />
					</View>
					<Text style={tw`font-medium text-[25px] leading-8 mb-5`}>{title}</Text>
					<View style={tw`w-full h-full`}>
						<TemplateContainer>
							<View style={tw`bg-white shadow rounded-md h-50% px-[10px]`}>
								<Tab.Navigator
									initialRouteName='SignIn'
									screenOptions={{
										tabBarIndicatorStyle: {
											backgroundColor: colors.greenInput,
											height: 1,
											marginBottom: -1,
										},
										tabBarItemStyle: {
											padding: 0,
											paddingBottom: 12,
										},
										tabBarShowLabel: false,
										tabBarStyle: {
											backgroundColor: '#FFFFFF',
											borderBottomWidth: 1,
											borderColor: colors.greyBg,
											padding: 0,
											shadowColor: colors.white,
										},
									}}>
									<Tab.Screen
										name='Sign In'
										component={() => SignIn({ setTitle })}
										options={() => headerObjectWithTabBar('signIn')}
									/>
									<Tab.Screen
										name='Sign Up'
										component={() => SignUp({ setTitle })}
										options={() => headerObjectWithTabBar('signUp')}
									/>
								</Tab.Navigator>
							</View>
						</TemplateContainer>
					</View>
				</View>
			</View>
		</TemplateContainerKeyboard>
	);
};
