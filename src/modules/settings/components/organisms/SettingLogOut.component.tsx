import * as React from 'react';
import { useCallback } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, SafeAreaView } from 'react-native';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';

import { getLogOut } from '../../../../actions/auth.actions';
import { tw } from '../../../../lib/tailwind';
import { RootStackParamList } from '../../../../navigations/rootStackParams.interface';
import { removeToken } from '../../../../reducers/auth.slice';
import { TemplateContainer } from '../../../../shared/components/templates/Template.container';
import { useAppDispatch } from '../../../../store/configureStore';
import { AuthRoute } from '../../../auth/enums/authRoute.enum';

interface IProps {
	setTitle: (title: string) => void | Promise<void>;
	userSetting?: any;
}
type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const SettingLogOut: React.FC<IProps> = ({ setTitle }) => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<navigationStack>();

	useFocusEffect(
		useCallback(() => {
			setTitle('Log Out');
		}, [setTitle]),
	);

	const logout = () => {
		dispatch(getLogOut());
		dispatch(removeToken());
		navigation.push(AuthRoute.login);
	};

	return (
		<SafeAreaView>
			<TemplateContainer>
				<View style={tw`h-full relative p-2`}>
					<View style={tw`bg-white rounded-md shadow absolute top-25% w-100% left-2 p-3`}>
						<Text style={tw`text-xl font-bold mb-2`}>Confirm</Text>
						<Text style={tw`text-sm mb-5`}>Are you sure you want to log out?</Text>
						<View style={tw`flex-row items-center justify-center`}>
							<DefaultButton title='Log Out' variant='contained' size='md' onPress={logout} />
						</View>
					</View>
				</View>
			</TemplateContainer>
		</SafeAreaView>
	);
};
