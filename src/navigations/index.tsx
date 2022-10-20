import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthRoute } from '../modules/auth/enums/authRoute.enum';
import { LoginScreen } from '../modules/auth/screens/Login.screen';
import { BacklogRoute } from '../modules/backlog/enums/BacklogRoute.enum';
import { BacklogScreen } from '../modules/backlog/screens/Backlog.screen';
import { BacklogCreateScreen } from '../modules/backlog/screens/BacklogCreate.screen';
import { BacklogFilter } from '../modules/backlog/screens/BacklogFilter.screen';
import { BacklogItemView } from '../modules/backlog/screens/BacklogItemView.screen';
import { ChatRoute } from '../modules/chat/enums/ChatRoute.enum';
import { ChatItemPersonal } from '../modules/chat/screens/ChatItem.screen';
import { ChatItemReply } from '../modules/chat/screens/ChatItemReply.screen';
import { ChatMain } from '../modules/chat/screens/ChatMain.screen';
import { NetworkRoute } from '../modules/network/enums/networkRoute.enum';
import { NetworkScreen } from '../modules/network/screens/Network.screen';
import { NetworkCreateContactScreen } from '../modules/network/screens/NetworkCreactContact.screen';
import { NetworkFilter } from '../modules/network/screens/NetworkFilter.screen';
import { NetworkSharing } from '../modules/network/screens/NetworkSharing.screen';
import { NetworkShowContactScreen } from '../modules/network/screens/NetworkShowContact.screen';
import { NetworkShowContactDefaultScreen } from '../modules/network/screens/NetworkShowContactDefault.screen';
import { PlannerRoute } from '../modules/planner/enums/plannerRoute.enum';
import { PlannerItemView } from '../modules/planner/screens/PlannerItemView.screen';
import { PlannerListScreen } from '../modules/planner/screens/PlannerList.screen';
import { ProfileRoute } from '../modules/profile/enums/profileRoute.enum';
import { ProfileScreen } from '../modules/profile/screens/Profile.screen';
import { ProfileEditBodyArt } from '../modules/profile/screens/ProfileCreateBodyArt.screen';
import { ProfileEditAppearance } from '../modules/profile/screens/ProfileEditAppearance.screen';
import { ProfileEditContacts } from '../modules/profile/screens/ProfileEditContacts.screen';
import { ProfileEditGeneral } from '../modules/profile/screens/ProfileEditGeneral.screen';
import { SettingRoute } from '../modules/settings/enums/SettingRoute.enum';
import { SettingAllScreen } from '../modules/settings/screens/SettingAll.screen';
import { SettingGeneralEmailChange } from '../modules/settings/screens/SettingGeneralEmailChange.screen';
import { SettingGeneralPasswordChange } from '../modules/settings/screens/SettingGeneralPasswordChange.screen';
import { SettingWalletChange } from '../modules/settings/screens/SettingWalletChange.screen';
import { UiRoute } from '../modules/ui/enums/uiRoute.enum';
import { UIScreen } from '../modules/ui/screens/UI.screen';

import { RootStackParamList } from './rootStackParams.interface';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={AuthRoute.login} component={LoginScreen} options={{ gestureEnabled: false }} />
			<Stack.Screen name={UiRoute.ui} component={UIScreen} />

			<Stack.Screen name={SettingRoute.Setting} component={SettingAllScreen} />
			<Stack.Screen name={SettingRoute.SettingWalletChange} component={SettingWalletChange} />
			<Stack.Screen name={SettingRoute.SettingGeneralEmailChange} component={SettingGeneralEmailChange} />
			<Stack.Screen name={SettingRoute.SettingGeneralPasswordChange} component={SettingGeneralPasswordChange} />

			<Stack.Screen name={BacklogRoute.Backlog} component={BacklogScreen} />
			<Stack.Screen name={BacklogRoute.BacklogCreate} component={BacklogCreateScreen} />
			<Stack.Screen name={BacklogRoute.BacklogItemView} component={BacklogItemView} />
			<Stack.Screen name={BacklogRoute.BacklogFilter} component={BacklogFilter} />

			<Stack.Screen name={NetworkRoute.Network} component={NetworkScreen} />
			<Stack.Screen name={NetworkRoute.NetworkSharing} component={NetworkSharing} />
			<Stack.Screen name={NetworkRoute.NetworkFilter} component={NetworkFilter} />
			<Stack.Screen name={NetworkRoute.NetworkCreateContact} component={NetworkCreateContactScreen} />
			<Stack.Screen name={NetworkRoute.NetworkShowContact} component={NetworkShowContactScreen} />
			<Stack.Screen name={NetworkRoute.NetworkShowContactDefault} component={NetworkShowContactDefaultScreen} />

			<Stack.Screen name={ChatRoute.ChatMain} component={ChatMain} />
			<Stack.Screen name={ChatRoute.ChatItemPersonal} component={ChatItemPersonal} />
			<Stack.Screen name={ChatRoute.ChatItemReply} component={ChatItemReply} />

			<Stack.Screen name={ProfileRoute.Profile} component={ProfileScreen} />
			<Stack.Screen name={ProfileRoute.ProfileEditGeneral} component={ProfileEditGeneral} />
			<Stack.Screen name={ProfileRoute.ProfileEditAppearance} component={ProfileEditAppearance} />
			<Stack.Screen name={ProfileRoute.ProfileEditContacts} component={ProfileEditContacts} />
			<Stack.Screen name={ProfileRoute.ProfileEditBodyArt} component={ProfileEditBodyArt} />

			<Stack.Screen name={PlannerRoute.list} component={PlannerListScreen} options={{ title: 'Planner' }} />
			<Stack.Screen name={PlannerRoute.PlannerItem} component={PlannerItemView} options={{ title: 'Planner' }} />
		</Stack.Navigator>
	);
};

export default Navigator;
