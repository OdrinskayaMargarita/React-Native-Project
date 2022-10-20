import * as React from 'react';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { PlusButtonContained } from '../../../shared/components/atoms/buttons/PlusButton/PlusButtonContained.component';
import { MainHeader } from '../../../shared/components/atoms/Headers/MainHeader.component';
import { CalendarDottedIcon } from '../../../shared/components/icons/CalendarDotted.icon';
import { FilterIcon } from '../../../shared/components/icons/Filter.icon';
import { TemplateContainerScroll } from '../../../shared/components/templates/Template.container-scroll';
import { BacklogRoute } from '../../backlog/enums/BacklogRoute.enum';
import { PlannerDate } from '../components/PlannerDate.component';
import { PlannerItem } from '../components/PlannerItem.component';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const PlannerListScreen = () => {
	const navigation = useNavigation<navigationStack>();
	const [isTodayActive, setIsTodayActive] = useState<boolean>(false);

	return (
		<SafeAreaView>
			<View style={tw`h-full relative`}>
				<View style={tw`absolute bottom-0 left-0 w-full z-10 opacity-99`}>
					<Image source={require('../images/gradient.png')} style={tw`mr-1 w-full h-25`} />
				</View>
				<MainHeader title='Journal' />
				<View style={tw`px-4 pt-2`}>
					<View style={tw`flex-row items-center justify-between pt-3`}>
						<TouchableOpacity
							onPress={() => setIsTodayActive(!isTodayActive)}
							style={tw`py-3 px-4 rounded border mr-3 ${
								isTodayActive ? 'border-greenInput bg-greenInput' : 'border-grey bg-greyBg'
							}`}>
							<Text style={tw` text-[13px] ${isTodayActive ? 'text-white' : 'text-darkGrey'}`}>
								Today
							</Text>
						</TouchableOpacity>
						<Text style={tw`text-grey uppercase`}>Hello Marybeth</Text>
						<TouchableOpacity
							onPress={() => setIsTodayActive(!isTodayActive)}
							style={tw`p-3 px-4 rounded border border-greenInput ml-3`}>
							<CalendarDottedIcon />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => setIsTodayActive(!isTodayActive)} style={tw`p-3 pr-0`}>
							<FilterIcon />
						</TouchableOpacity>
					</View>
				</View>
				<TemplateContainerScroll>
					<View style={tw`pb-25`}>
						<PlannerDate countEvent={123} countTask={23} />
						<PlannerItem />
						<PlannerItem />
						<PlannerItem isBorderBottom={false} />
						<PlannerDate countTask={123} />
						<PlannerItem />
						<PlannerItem />
						<PlannerItem isBorderBottom={false} />
						<PlannerDate />
						<PlannerItem />
						<PlannerItem />
						<PlannerItem isBorderBottom={false} />
						<PlannerDate />
						<PlannerItem />
						<PlannerItem />
						<PlannerItem isBorderBottom={false} />
					</View>
				</TemplateContainerScroll>
				<PlusButtonContained
					style='absolute right-4 bottom-4 z-50'
					size='md'
					onPress={() => navigation.navigate(BacklogRoute.BacklogCreate)}
				/>
			</View>
		</SafeAreaView>
	);
};
