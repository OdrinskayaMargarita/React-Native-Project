import * as React from 'react';

import { View, Text } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { getColorBadge } from './ColorSwitch.component';
import { getIcon } from './IconsSwitch.component';
import { getTitle } from './TitleSwitch.component';

interface IProps {
	variant: variantType;
	size: 'large' | 'small';
	isShowBackground: boolean;
	isDisabled?: boolean;
	isIcon?: boolean;
	isBordered?: boolean;
	isSquare?: boolean;
	isEllipse?: boolean;
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

export const StatusBadge: React.FC<IProps> = ({
	variant = '',
	isShowBackground,
	size = 'small',
	isDisabled,
	isIcon = true,
	isBordered = false,
	isSquare = false,
	isEllipse = false,
}) => {
	return (
		<View
			style={tw`flex flex-row items-center justify-center border m-1 p-2 ${
				size === 'large'
					? 'pr-4'
					: size === 'small' && !isEllipse
					? 'pr-2 w-8 h-8'
					: size === 'small' && isEllipse
					? 'w-9 h-5'
					: 'pr-2 w-8 h-8'
			} ${
				isDisabled
					? 'bg-white'
					: isSquare
					? getColorBadge(variant).background
					: isShowBackground
					? getColorBadge(variant).backgroundOpacity
					: 'bg-white'
			} ${isSquare ? 'rounded-md' : 'rounded-full'} ${
				isDisabled && isBordered ? 'border-grey' : isBordered ? getColorBadge(variant).border : 'border-white'
			}`}>
			{isIcon ? (
				<View style={tw` ${size === 'large' ? 'mr-2' : 'm-0'} `}>
					{getIcon(variant, isDisabled ? colors.grey : isSquare ? colors.white : '')}
				</View>
			) : (
				<View
					style={tw`rounded-full mr-2 w-2 h-2 ${isDisabled ? 'bg-grey' : getColorBadge(variant).background}`}
				/>
			)}

			{size === 'large' && (
				<Text
					style={tw`${
						isDisabled
							? 'text-grey'
							: isBordered
							? getColorBadge(variant).textColor
							: !isShowBackground
							? 'text-black'
							: getColorBadge(variant).textColor
					} ${isBordered || isShowBackground ? 'uppercase' : 'normal-case'}`}>
					{getTitle(variant)}
				</Text>
			)}
		</View>
	);
};
