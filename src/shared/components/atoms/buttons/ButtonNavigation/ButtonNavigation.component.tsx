import * as React from 'react';

import { TouchableOpacity } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { ArrowLeftNavigationIcon } from '../../../icons/ArrowLeftNavigation.icon';
import { ArrowRightNavigationIcon } from '../../../icons/ArrowRightNavigation.icon';
import { CloseIcon } from '../../../icons/Close.icon';

interface IProps {
	type: typeButton;
	isDisabled?: boolean;
	onPress: () => void | Promise<void>;
}
type typeButton = 'back' | 'next' | 'close';

const getIcon = (icon: typeButton) => {
	switch (icon) {
		case 'back':
			return <ArrowLeftNavigationIcon />;
		case 'next':
			return <ArrowRightNavigationIcon />;
		case 'close':
			return <CloseIcon width={20} height={20} fillIcon={colors.black} />;
	}
};

export const ButtonNavigation: React.FC<IProps> = ({ isDisabled = false, onPress, type = 'next' }) => {
	return (
		<TouchableOpacity
			disabled={isDisabled}
			style={tw`rounded-full flex items-center justify-center bg-lightGrey w-10 h-10`}
			onPress={onPress}>
			{getIcon(type)}
		</TouchableOpacity>
	);
};
