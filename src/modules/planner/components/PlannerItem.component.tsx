import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { PlannerRoute } from 'src/modules/planner/enums/plannerRoute.enum';
import { RootStackParamList } from 'src/navigations/rootStackParams.interface';

import { tw } from '@lib/tailwind';

import { StatusBadge } from '../../../shared/components/atoms/StatusBadge/StatusBadge.component';
import { CheckListSmallIcon } from '../../../shared/components/icons/CheckListSmall.icon';
import { FlagIcon } from '../../../shared/components/icons/Flag.icon';

type navigationStack = NativeStackNavigationProp<RootStackParamList, PlannerRoute.list>;

interface IProps {
	isBorderBottom?: boolean;
}
export const PlannerItem: React.FC<IProps> = ({ isBorderBottom = true }) => {
	const navigation = useNavigation<navigationStack>();

	return (
		<TouchableOpacity
			style={tw`py-3 pl-2 ${isBorderBottom ? 'border-b border-lightGrey' : ''} flex-row items-center bg-greyBg`}
			onPress={() => navigation.navigate(PlannerRoute.PlannerItem)}>
			<View style={tw`flex-row`}>
				<View style={tw`pr-2`}>
					<Text style={tw`text-sm mb-1`}>10:30 AM</Text>
					<Text style={tw`text-sm text-grey`}>10:30 PM</Text>
				</View>
				<View>
					<Text style={tw`text-[6px] text-grey`}>|</Text>
					<Text style={tw`text-[6px] text-grey`}>|</Text>
					<Text style={tw`text-[6px] text-grey`}>|</Text>
					<Text style={tw`text-[6px] text-grey`}>|</Text>
					<Text style={tw`text-[6px] text-grey`}>|</Text>
				</View>
			</View>
			<View style={tw`pl-2 w-82%`}>
				<View style={tw`flex-row items-center justify-between`}>
					<View style={tw`flex-row items-center`}>
						<CheckListSmallIcon />
						<Text style={tw`font-medium text-[15px] ml-[6px] mr-1`}>Some title</Text>
						<FlagIcon />
					</View>
					<Text style={tw`uppercase text-red text-[10px]`}>Due 10:30AM</Text>
				</View>
				<View style={tw`flex-row items-center justify-between`}>
					<Text style={tw`text-sm text-grey`}>Nibh sed malesuada males ut...</Text>
					<StatusBadge
						variant='went'
						size='small'
						isShowBackground={true}
						isDisabled={false}
						isEllipse={true}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
};
