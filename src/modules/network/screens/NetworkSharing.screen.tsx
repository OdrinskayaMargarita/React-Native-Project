import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, SafeAreaView } from 'react-native';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { ButtonNavigation } from 'src/shared/components/atoms/buttons/ButtonNavigation/ButtonNavigation.component';

import { tw } from '@lib/tailwind';

import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { Select } from '../../../shared/components/atoms/inputs/SelectInput/Select.component';
import { GroupAddIcon } from '../../../shared/components/icons/GroupAdd.icon';
import { TemplateContainerScroll } from '../../../shared/components/templates/Template.container-scroll';
import { NetworkRoute } from '../enums/networkRoute.enum';

interface IProps {
	isVisible: boolean;
	closeModal: any;
	openFilter: any;
}

const selectData = [
	{
		label: 'My network',
		value: 'allNetwork',
	},
	{
		label: 'Connected',
		value: 'connected',
	},
	{
		label: 'Pending requests',
		value: 'pendingRequests',
	},
	{
		label: 'Sent requests',
		value: 'sentRequests',
	},
	{
		label: 'Future Send',
		value: 'futureSend',
	},
];

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const NetworkSharing: React.FC<IProps> = () => {
	const navigation = useNavigation<navigationStack>();

	return (
		<SafeAreaView style={tw`w-full h-full bg-greyBg`}>
			<TemplateContainerScroll>
				<View style={tw`w-full bg-greyBg flex-row items-center justify-start mb-5`}>
					<ButtonNavigation type={'back'} onPress={() => navigation.navigate(NetworkRoute.Network)} />
					<Text style={tw`ml-4 text-xl font-bold`}>Sharing</Text>
				</View>
				<View>
					<Select iconStart={<GroupAddIcon />} data={selectData} label='Select Member to share with' />
				</View>
			</TemplateContainerScroll>

			<View style={tw`flex flex-row items-center justify-center bg-greyBg py-5 border-t border-grey`}>
				<View style={tw`mx-2 w-30`}>
					<DefaultButton
						title='Cancel'
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
