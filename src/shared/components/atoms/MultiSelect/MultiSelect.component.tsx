import * as React from 'react';
import { useState } from 'react';

import { Popover } from 'native-base';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { CheckNoBorderedIcon } from '../../icons/CheckNoBordered.icon';
import { SelectArrowIcon } from '../../icons/SelectArrow.style';

export const MultiSelectComponent = () => {
	const [checked, onChange] = useState(false);

	const onCheckmarkPress = () => {
		onChange(!checked);
	};

	return (
		<View style={tw`flex-1`}>
			<Popover
				placement='bottom left'
				trigger={triggerProps => {
					return (
						<TouchableOpacity
							{...triggerProps}
							shadow={2}
							colorScheme='danger'
							style={tw`px-3 h-10 rounded-md border border-grey flex flex-row items-center justify-between`}>
							<Text style={tw`leading-9`}>Placeholder</Text>
							<SelectArrowIcon />
						</TouchableOpacity>
					);
				}}>
				<Popover.Content accessibilityLabel='Delete Customerd' w='56'>
					<Popover.Body>
						<View style={tw`rounded-md flex flex-row items-center justify-between p-2`}>
							<View style={tw`w-1/12 rounded-full `}>
								<Pressable
									style={tw`flex items-center justify-center rounded-full w-4 h-4 ${
										checked ? 'bg-greenInput' : 'bg-lightGrey'
									}`}
									onPress={onCheckmarkPress}>
									<CheckNoBorderedIcon fillIcon={colors.white} width={12} height={12} />
								</Pressable>
							</View>
							<Text style={tw`w-10/12`}>Item</Text>
						</View>
						<View style={tw`rounded-md flex flex-row items-center justify-between px-2`}>
							<View style={tw`w-1/12 rounded-full `}>
								<Pressable
									style={tw`flex items-center justify-center rounded-full w-4 h-4 ${
										checked ? 'bg-greenInput' : 'bg-lightGrey'
									}`}
									onPress={onCheckmarkPress}>
									<CheckNoBorderedIcon fillIcon={colors.white} width={12} height={12} />
								</Pressable>
							</View>
							<Text style={tw`w-10/12`}>Item</Text>
						</View>
					</Popover.Body>
				</Popover.Content>
			</Popover>
		</View>
	);
};
