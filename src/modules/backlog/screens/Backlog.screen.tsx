import * as React from 'react';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { PlusButtonContained } from 'src/shared/components/atoms/buttons/PlusButton/PlusButtonContained.component';
import { MainHeader } from 'src/shared/components/atoms/Headers/MainHeader.component';
import { SearchInput } from 'src/shared/components/atoms/inputs/SearchInput/SearchInput.component';
import { AttentionIcon } from 'src/shared/components/icons/Attention.icon';

import { colors, tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { AllBacklogTab } from '../components/organisms/AllBacklogTab.component';
import { BacklogRoute } from '../enums/BacklogRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const BacklogScreen = () => {
	const navigation = useNavigation<navigationStack>();
	const [hasStatusLate, setHasStatusLate] = useState<boolean>(false);

	return (
		<SafeAreaView>
			<View style={tw`w-full h-full bg-greyBg relative`}>
				<MainHeader title='Backlog' />
				<View style={tw`px-3 mb-0 flex-row items-center justify-between pt-5`}>
					<TouchableOpacity
						style={tw`items-center justify-center w-11 h-11 border border-[#F2EDED] rounded ${
							hasStatusLate ? 'bg-green' : 'bg-greyBg'
						}`}
						onPress={() => setHasStatusLate(!hasStatusLate)}>
						<AttentionIcon fillIcon={hasStatusLate ? colors.white : colors.red} />
					</TouchableOpacity>
					<View style={tw`w-10/12 relative mb-1 flex-row items-center`}>
						<SearchInput
							isFilterEnd={true}
							labelValue='Search by text...'
							styleBg='h-11 normal-case'
							openFilter={() => navigation.navigate(BacklogRoute.BacklogFilter)}
							styleUppercase={false}
						/>
					</View>
				</View>

				<AllBacklogTab onPress={() => console.log('123')} />
				<PlusButtonContained
					style='absolute right-4 bottom-4 z-50'
					size='md'
					onPress={() => navigation.navigate(BacklogRoute.BacklogCreate)}
				/>
			</View>
		</SafeAreaView>
	);
};
