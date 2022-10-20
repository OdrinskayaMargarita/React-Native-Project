import * as React from 'react';

import { View, Text, Image } from 'react-native';

import { tw } from '@lib/tailwind';

import { CrownIcon } from '../../icons/Crown.icon';

import { getSize } from './AvatarGetStyle.component';

interface IProps {
	firstName: string;
	lastName: string;
	isOnline?: boolean;
	isOwner?: boolean;
	size: typeSize;
	variant?: 'circular' | 'rounded';
	src: string;
	id: number;
	isCrownBig?: boolean;
}

type typeSize = 'small' | 'medium' | 'large' | 'extraLarge' | 'ml';

export const AvatarItem: React.FC<IProps> = ({
	size = 'small',
	src,
	firstName,
	lastName,
	variant = 'circular',
	isOnline,
	isOwner,
	isCrownBig,
}) => {
	const getFirstLetter = (str: string) => str?.charAt(0) ?? '';

	return (
		<View
			style={tw`relative border border-white flex flex-row items-center justify-center ${
				getSize(size).sizeBox
			} bg-greenInput ${variant === 'rounded' ? 'rounded-md' : 'rounded-full'}`}>
			{isOwner && (
				<View
					style={tw`absolute flex flex-row items-center justify-center ${getSize(size).positionOwner} ${
						isCrownBig
							? 'w-5 h-5 -top-1 -right-1'
							: size === 'small' || size === 'medium'
							? 'w-2 h-2'
							: 'w-3 h-3'
					}  bg-white rounded-full`}>
					<CrownIcon width={isCrownBig ? 12 : 6} height={isCrownBig ? 12 : 6} />
				</View>
			)}
			{src && src.length ? (
				<Image style={tw`h-full w-full rounded-full`} source={{ uri: src }} />
			) : (
				<Text style={tw`uppercase flex flex-row text-white ${getSize(size).textParam}`}>
					<Text>{getFirstLetter(firstName)}</Text>
					{size !== 'small' ? <Text>{getFirstLetter(lastName)}</Text> : null}
				</Text>
			)}
			{isOnline && (
				<View
					style={tw`absolute ${size === 'small' || size === 'medium' ? 'w-2 h-2' : 'w-3 h-3'} ${
						getSize(size).positionOnline
					} bg-greenInput rounded-full border border-white`}
				/>
			)}
		</View>
	);
};
