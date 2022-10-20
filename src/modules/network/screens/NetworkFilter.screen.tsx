import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';
import { ConnectedIcon } from 'src/shared/components/icons/Connected.icon';
import { PeopleIcon } from 'src/shared/components/icons/People.icon';

import { colors, tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { Select } from '../../../shared/components/atoms/inputs/SelectInput/Select.component';
import { NetworkRoute } from '../enums/networkRoute.enum';

interface IProps {
	isVisible: boolean;
	closeModal: any;
	openFilter: any;
}

const selectData = [
	{
		iconItem: <PeopleIcon fillIcon={colors.greenInput} width={18} height={18} />,
		label: 'My network',
		value: 'allNetwork',
	},
	{
		iconItem: <ConnectedIcon fillIcon={colors.greenInput} width={16} height={16} />,
		label: 'Connected',
		value: 'connected',
	},
	{
		iconItem: <ConnectedIcon fillIcon={colors.purple} width={16} height={16} />,
		label: 'Pending requests',
		value: 'pendingRequests',
	},
	{
		iconItem: <ConnectedIcon fillIcon={colors.blue} width={16} height={16} />,
		label: 'Sent requests',
		value: 'sentRequests',
	},
	{
		iconItem: <ConnectedIcon fillIcon={colors.yellow} width={16} height={16} />,
		label: 'Future Send',
		value: 'futureSend',
	},
];

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const NetworkFilter: React.FC<IProps> = () => {
	const navigation = useNavigation<navigationStack>();

	return (
		<SafeAreaView style={tw`w-full h-full bg-greyBg`}>
			<ScrollView style={tw`w-full h-full p-3`}>
				<View style={tw`w-full bg-greyBg flex-row items-center justify-start mb-5`}>
					<ButtonNavigation type={'back'} onPress={() => navigation.navigate(NetworkRoute.Network)} />
					<Text style={tw`ml-4 text-xl font-bold`}>Filter</Text>
				</View>
				<View>
					<Select data={selectData} label='Connections' />
				</View>
			</ScrollView>

			<View style={tw`flex flex-row items-center justify-center bg-greyBg py-5 border-t border-grey`}>
				<View style={tw`mx-2 w-30`}>
					<DefaultButton
						title='Reset'
						variant='outlined'
						size='md'
						onPress={() => navigation.navigate(NetworkRoute.Network)}
					/>
				</View>
				<View style={tw`mx-2 w-30`}>
					<DefaultButton title='Save' variant='contained' size='md' />
				</View>
			</View>
		</SafeAreaView>
	);
};
