import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { BottomButtons } from '../../../shared/components/atoms/BottomButtons/BottomButtons.component';
import { DefaultButton } from '../../../shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from '../../../shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { Select } from '../../../shared/components/atoms/inputs/SelectInput/Select.component';
import { BinIcon } from '../../../shared/components/icons/Bin.icon';
import { TemplateContainer } from '../../../shared/components/templates/Template.container';
import { BacklogRoute } from '../enums/BacklogRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const BacklogFilter = () => {
	const navigation = useNavigation<navigationStack>();

	const selectData = [
		{
			label: 'All',
			value: 'All',
		},
		{
			label: 'Petr',
			value: 'Petr',
		},
		{
			label: 'Ihor',
			value: 'Ihor',
		},
		{
			label: 'Ivan',
			value: 'Ivan',
		},
	];

	return (
		<SafeAreaView>
			<TemplateContainer>
				<View style={tw`flex flex-row items-center mb-4 pt-3`}>
					<ButtonNavigation type='back' onPress={() => navigation.navigate(BacklogRoute.Backlog)} />
					<Text style={tw`ml-4 font-bold text-xl`}>Filters</Text>
				</View>
				<View style={tw`my-1`}>
					<Select label={'BY PERSON'} data={selectData} />
				</View>
				<View style={tw`my-1`}>
					<Select label={'by task'} data={selectData} />
				</View>
				<View style={tw`my-1`}>
					<Select label={'Priority'} data={selectData} />
				</View>
			</TemplateContainer>
			<BottomButtons
				leftButton={
					<DefaultButton
						title='Reset'
						variant='outlined'
						startIcon={<BinIcon fillIcon={colors.greenInput} />}
						isStartIcon={true}
						size='md'
						onPress={() => navigation.navigate(BacklogRoute.Backlog)}
					/>
				}
				rightButton={<DefaultButton title='Save' variant='contained' size='md' />}
			/>
		</SafeAreaView>
	);
};
