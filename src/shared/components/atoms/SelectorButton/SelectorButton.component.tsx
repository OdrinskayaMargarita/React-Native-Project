import * as React from 'react';
import { useState } from 'react';

import { TouchableOpacity, View, Text } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { getTitle } from '../StatusBadge/TitleSwitch.component';

import { getColor } from './ColorSwitch.component';
import { getIcon } from './IconsSwitch.component';

interface IProps {
	variant: variantType;
	isDisabled?: boolean;
	onPress: () => void | Promise<void>;
}

type variantType =
	| 'todo'
	| 'inProgress'
	| 'done'
	| 'backlog'
	| 'late'
	| 'missed'
	| 'went'
	| 'going'
	| 'notGoing'
	| 'pending'
	| 'maybe'
	| 'paid'
	| 'noAnswer'
	| 'scheduled';

export const SelectorButton: React.FC<IProps> = ({ isDisabled = false, variant = '', onPress }) => {
	const [status, setStatus] = useState(false);

	const onClick = () => {
		setStatus(!status);
		onPress();
	};
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			disabled={isDisabled}
			style={tw`rounded-md px-2 py-2 flex flex-row items-center ${
				isDisabled ? 'bg-grey' : getColor(variant, status ? 'contained' : 'outlined').background
			} `}
			onPress={() => onClick()}>
			<View>
				{getIcon(
					variant,
					status || isDisabled
						? colors.white
						: getColor(variant, status ? 'contained' : 'outlined').colorIcon,
				)}
			</View>
			<Text style={tw` ml-1 ${status || isDisabled ? 'text-white' : 'text-black'}`}>{getTitle(variant)}</Text>
		</TouchableOpacity>
	);
};
