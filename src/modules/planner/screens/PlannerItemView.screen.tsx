import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, SafeAreaView, View } from 'react-native';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';

import { tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { PlannerViewTabs } from '../components/PlannerViewTabs.component';
import { PlannerRoute } from '../enums/plannerRoute.enum';

interface IProps {
	isVisible: boolean;
	closeModal: () => void | Promise<void>;
	title?: string;
}

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const PlannerItemView: React.FC<IProps> = () => {
	const navigation = useNavigation<navigationStack>();

	return (
		<SafeAreaView style={tw`w-full h-full bg-greyBg`}>
			<View style={tw`bg-greyBg py-5 px-3`}>
				<View style={tw`flex-row items-center justify-start mb-8`}>
					<ButtonNavigation type={'back'} onPress={() => navigation.navigate(PlannerRoute.list)} />
					<Text style={tw`ml-4 text-xl font-bold`}>Task view mobile</Text>
				</View>
				<PlannerViewTabs />
			</View>
			<View style={tw`flex flex-row items-center justify-center bg-greyBg pt-5 pb-3 border-t border-grey w-full`}>
				<View style={tw`mx-2 w-40`}>
					<DefaultButton
						title='Delete task'
						variant='outlined'
						size='md'
						color='secondary'
						onPress={() => navigation.navigate(PlannerRoute.list)}
					/>
				</View>
				<View style={tw`mx-2 w-40`}>
					<DefaultButton title='Archive' variant='contained' size='md' />
				</View>
			</View>
		</SafeAreaView>
	);
};
