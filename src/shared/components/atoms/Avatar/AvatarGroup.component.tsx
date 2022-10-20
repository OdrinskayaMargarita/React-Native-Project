import * as React from 'react';
import { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { tw } from '@lib/tailwind';

import { AvatarItem } from './Avatar.component';
import { AvatarDropdown } from './AvatarDropdown.component';
import { getSize } from './AvatarGetStyle.component';

interface IProps {
	users: typeOfUsersList[];
	owner: typeOfUsersList;
	maxItemView?: number;
	isShowOwnerBlock?: boolean;
	isShowSlicedUsersBlock?: boolean;
	isContainOwnerInUsers?: boolean;
	isShowUserListPopover?: boolean;
	size?: typeSize;
	variant?: string;
}

type typeSize = 'small' | 'medium' | 'large' | 'extraLarge';

interface typeOfUsersList {
	avatar: {
		url: string;
	};
	first_name: string;
	last_name: string;
	id: number;
	entity_type: string;
	status: string;
}

export const AvatarGroup: React.FC<IProps> = ({
	users,
	owner,
	isShowOwnerBlock = true,
	isShowSlicedUsersBlock = true,
	isContainOwnerInUsers = false,
	isShowUserListPopover = true,
	maxItemView = 3,
	size = 'small',
	variant = 'circular',
}) => {
	const [visibleDropdown, setVisibleDropdown] = useState(false);

	return (
		<View style={tw`relative`}>
			<View style={tw`flex flex-row`}>
				{isShowOwnerBlock && (
					<View style={tw`mr-2`}>
						<AvatarItem
							firstName={owner.first_name}
							lastName={owner.last_name}
							size={size}
							src={owner?.avatar?.url}
							id={owner.id}
							isOwner={true}
						/>
					</View>
				)}
				{users.map(
					(item, key: number) =>
						key < maxItemView && (
							<View key={key} style={tw`-ml-[6px]`}>
								<AvatarItem
									firstName={item.first_name}
									lastName={item.last_name}
									size={size}
									src={item?.avatar?.url || ''}
									id={item.id}
									isOwner={false}
								/>
							</View>
						),
				)}
				{isShowSlicedUsersBlock && (
					<View
						style={tw`rounded-full border border-white -ml-[6px] bg-white border border-greenInput flex flex-row items-center justify-center text-black ${
							getSize(size).sizeBox
						} ${variant === 'rounded' ? 'rounded-md' : 'rounded-full'}`}>
						{isShowUserListPopover ? (
							<View style={tw`relative z-100`}>
								<TouchableOpacity onPress={() => setVisibleDropdown(!visibleDropdown)}>
									<Text style={tw`text-black text-[10px]`}>{`+${
										isContainOwnerInUsers
											? users.length - maxItemView + 1
											: users.length - maxItemView
									}`}</Text>
								</TouchableOpacity>
								<AvatarDropdown
									visibleStatus={visibleDropdown}
									users={users}
									maxItemView={maxItemView}
									iconStatus={true}
								/>
							</View>
						) : (
							<Text style={tw`text-black text-[10px]`}>{`+${
								isContainOwnerInUsers ? users.length - maxItemView + 1 : users.length - maxItemView
							}`}</Text>
						)}
					</View>
				)}
			</View>
		</View>
	);
};
