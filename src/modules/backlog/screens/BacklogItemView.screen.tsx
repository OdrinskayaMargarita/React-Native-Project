import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, SafeAreaView, View } from 'react-native';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';

import { tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { BacklogViewTabs } from '../components/atom/BacklogViewTabs.component';
import { BacklogRoute } from '../enums/BacklogRoute.enum';

interface IProps {
	isVisible: boolean;
	closeModal: () => void | Promise<void>;
	title?: string;
}

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const BacklogItemView: React.FC<IProps> = () => {
	const navigation = useNavigation<navigationStack>();

	return (
		<SafeAreaView style={tw`w-full h-full bg-white`}>
			<View style={tw`bg-greyBg py-2 px-3 bg-white`}>
				<View style={tw`flex-row items-center justify-start mb-8`}>
					<ButtonNavigation type={'back'} onPress={() => navigation.navigate(BacklogRoute.Backlog)} />
					<Text style={tw`ml-4 text-xl font-bold`}>Task view mobile</Text>
				</View>
				<BacklogViewTabs />
			</View>
			<View style={tw`flex flex-row items-center justify-center bg-white pt-5 pb-3 border-t border-grey w-full`}>
				<View style={tw`mx-2 w-40`}>
					<DefaultButton
						title='Delete task'
						variant='outlined'
						size='md'
						color='secondary'
						onPress={() => navigation.navigate(BacklogRoute.Backlog)}
					/>
				</View>
				<View style={tw`mx-2 w-40`}>
					<DefaultButton title='Archive' variant='contained' size='md' />
				</View>
			</View>
		</SafeAreaView>
	);
};
