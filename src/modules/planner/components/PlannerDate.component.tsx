import * as React from 'react';

import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	countTask?: number;
	countEvent?: number;
}

export const PlannerDate: React.FC<IProps> = ({ countTask, countEvent }) => {
	return (
		<View style={tw`py-2 flex-row items-center justify-between mb-2`}>
			<Text style={tw`text-[13px] text-darkGrey uppercase font-medium`}>Wednesday, Jan 19 </Text>
			<View style={tw`px-1 flex-1 relative`}>
				<Text numberOfLines={1} ellipsizeMode='clip' style={tw`text-grey text-xs`}>
					--------------------------------------------------------------------
				</Text>
			</View>
			<View style={tw`flex-row items-center`}>
				{countTask ? (
					<View style={tw`rounded-full border border-purple px-2 py-1`}>
						<Text style={tw`text-purple text-[10px] uppercase`}>{countTask} tasks</Text>
					</View>
				) : null}
				{countEvent ? (
					<View style={tw`flex-row items-center`}>
						<Text style={tw`text-darkGrey mx-1 uppercase text-xs`}>And</Text>
						<View style={tw`rounded-full border border-redLight px-2 py-1`}>
							<Text style={tw`text-redLight text-[10px] uppercase`}>{countTask} events</Text>
						</View>
					</View>
				) : null}
			</View>
		</View>
	);
};
