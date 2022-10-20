import * as React from 'react';
import { View, Text } from 'react-native';
import { tw } from '@lib/tailwind';
import { AvatarItem } from './Avatar.component';
import { ScrollView } from 'native-base';
import { getIcon } from './IconsSwitch.component';

interface IProps {
	users: typeOfUsersList[];
	maxItemView?: number;
	iconStatus: boolean;
	visibleStatus: boolean;
}

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

export const AvatarDropdown: React.FC<IProps> = ({ maxItemView = 3, users, iconStatus = false, visibleStatus }) => {
	return (
		<View style={tw`max-h-35 absolute z-100 top-[28px] -right-5 ${visibleStatus ? 'flex' : 'hidden'}`}>
			<ScrollView style={tw`bg-white max-w-[156px]  min-w-[156px] grow-0 rounded`}>
				{users?.map(
					(item, key: number) =>
						key >= maxItemView && (
							<View key={key} style={tw`flex flex-row mb-1 py-1 px-[12px]`}>
								<AvatarItem
									firstName={item.first_name}
									lastName={item.last_name}
									size='small'
									src={item?.avatar?.url || ''}
									id={item.id}
									isOwner={false}
								/>
								<View style={tw`ml-1`}>
									<View style={tw`flex flex-row items-center`}>
										<Text
											numberOfLines={1}
											ellipsizeMode='tail'
											style={tw`text-[11px] max-w-[80px]`}>
											{item.first_name} {item.last_name}
										</Text>
										{iconStatus && <View style={tw`ml-1`}>{getIcon(item.status)}</View>}
									</View>
									<Text style={tw`text-[11px] text-grey`}>{item.entity_type}</Text>
								</View>
							</View>
						),
				)}
			</ScrollView>
		</View>
	);
};
