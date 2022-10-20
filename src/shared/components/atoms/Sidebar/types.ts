export interface AvatarProps {
	firstName: string;
	lastName: string;
	avatar: string;
	isPremium: boolean;
	onClick?: () => void | Promise<void>;
	onCloseSidebar: () => void | Promise<void>;
}

export type ItemIconType = 'planner' | 'network' | 'chat' | 'settings' | 'feedback' | 'backlog';

export interface ItemProps {
	title: string;
	icon: ItemIconType;
	notifications: {
		count: number;
	};
	isVisible: boolean;
	onPress: () => void | Promise<void>;
	onCloseSidebar: () => void | Promise<void>;
}
