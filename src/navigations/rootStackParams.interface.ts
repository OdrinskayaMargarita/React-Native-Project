import { AuthRoute } from '@/modules/auth/enums/authRoute.enum';
import { BacklogRoute } from '@/modules/backlog/enums/BacklogRoute.enum';
import { ChatRoute } from '@/modules/chat/enums/ChatRoute.enum';
import { NetworkRoute } from '@/modules/network/enums/networkRoute.enum';
import { PlannerRoute } from '@/modules/planner/enums/plannerRoute.enum';
import { ProfileRoute } from '@/modules/profile/enums/profileRoute.enum';
import { SettingRoute } from '@/modules/settings/enums/SettingRoute.enum';
import { UiRoute } from '@/modules/ui/enums/uiRoute.enum';

export type RootStackParamList = {
	[AuthRoute.login]: undefined;
	[UiRoute.ui]: undefined;

	[SettingRoute.Setting]: undefined;
	[SettingRoute.SettingWalletChange]: undefined;
	[SettingRoute.SettingGeneralEmailChange]: undefined;
	[SettingRoute.SettingGeneralPasswordChange]: undefined;

	[BacklogRoute.Backlog]: undefined;
	[BacklogRoute.BacklogCreate]: undefined;
	[BacklogRoute.BacklogItemView]: undefined;
	[BacklogRoute.BacklogFilter]: undefined;

	[NetworkRoute.Network]: undefined;
	[NetworkRoute.NetworkSharing]: undefined;
	[NetworkRoute.NetworkFilter]: undefined;
	[NetworkRoute.NetworkCreateContact]: undefined;
	[NetworkRoute.NetworkShowContact]: undefined;
	[NetworkRoute.NetworkShowContactDefault]: undefined;

	[ChatRoute.ChatMain]: undefined;
	[ChatRoute.ChatItemPersonal]: undefined;
	[ChatRoute.ChatItemReply]: undefined;

	[ProfileRoute.Profile]: undefined;
	[ProfileRoute.ProfileEditGeneral]: undefined;
	[ProfileRoute.ProfileEditAppearance]: undefined;
	[ProfileRoute.ProfileEditContacts]: undefined;
	[ProfileRoute.ProfileEditBodyArt]: undefined;

	[PlannerRoute.list]: undefined;
	[PlannerRoute.PlannerItem]: undefined;
};
