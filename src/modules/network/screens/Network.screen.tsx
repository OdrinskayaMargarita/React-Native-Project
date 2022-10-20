import * as React from 'react';
import { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { PlusButtonContained } from 'src/shared/components/atoms/buttons/PlusButton/PlusButtonContained.component';
import { MainHeader } from 'src/shared/components/atoms/Headers/MainHeader.component';
import { SearchInput } from 'src/shared/components/atoms/inputs/SearchInput/SearchInput.component';
import { PersonIcon } from 'src/shared/components/icons/Person.icon';

import { colors, tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../actions/common.actions';
import {
	getConnectionsAll,
	getConnectionsContacts,
	getConnectionsFriends,
	getConnectionsFutureOutgoing,
	getConnectionsFutureRequests,
	getConnectionsIncoming,
	getConnectionsIncomingCanceled,
	getConnectionsIncomingNotCanceled,
	getConnectionsOutgoing,
} from '../../../actions/network.actions';
import { RootStackParamList } from '../../../navigations/rootStackParams.interface';
import { ConnectedIcon } from '../../../shared/components/icons/Connected.icon';
import { TemplateContainerScroll } from '../../../shared/components/templates/Template.container-scroll';
import { TemplateContainerKeyboard } from '../../../shared/components/templates/TemplateKeyboard.container';
import { useAppDispatch, useAppSelector } from '../../../store/configureStore';
import { ContactItem } from '../components/ContactItem.component';
import { NetworkRoute } from '../enums/networkRoute.enum';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

export const NetworkScreen = () => {
	const dispatch = useAppDispatch();
	const { connectionsAll } = useAppSelector(state => state.network);
	const { connectionsFriends } = useAppSelector(state => state.network);

	useEffect(() => {
		dispatch(
			dispatchWithLoader(async () => {
				await dispatch(getConnectionsAll()).unwrap();
				await dispatch(getConnectionsFriends()).unwrap();
				await dispatch(getConnectionsContacts()).unwrap();
				await dispatch(getConnectionsFutureOutgoing()).unwrap();
				await dispatch(getConnectionsOutgoing()).unwrap();
				await dispatch(getConnectionsIncoming()).unwrap();
				await dispatch(getConnectionsIncomingNotCanceled()).unwrap();
				await dispatch(getConnectionsIncomingCanceled()).unwrap();
				await dispatch(getConnectionsFutureRequests()).unwrap();
			}),
		);
	}, [dispatch]);

	const navigation = useNavigation<navigationStack>();
	const menuList = [
		{ isDisabled: false, label: 'Edit', onPress: () => console.log('123') },
		{ isDisabled: false, label: 'Remove', onPress: () => console.log('123') },
		{ isDisabled: false, label: 'Delete', onPress: () => console.log('123') },
	];

	return (
		<SafeAreaView>
			<TemplateContainerKeyboard>
				<View style={tw`w-full h-full bg-greyBg relative`}>
					<MainHeader title='Connections' />
					<View style={tw`px-3 mb-4 pt-4 flex-row items-center justify-between`}>
						<View style={tw`w-10/12 relative mb-1 flex-row items-center`}>
							<SearchInput
								isFilterEnd={true}
								labelValue='Search'
								styleBg='h-11'
								openFilter={() => navigation.navigate(NetworkRoute.NetworkFilter)}
							/>
						</View>
						<TouchableOpacity
							style={tw`items-center justify-center w-11 h-11 border border-lightGrey rounded-md`}>
							<View style={tw`rounded border border-darkGrey items-center justify-center w-7 h-7`}>
								<PersonIcon fillIcon={colors.darkGrey} />
							</View>
						</TouchableOpacity>
					</View>

					<TemplateContainerScroll>
						<View style={tw`pb-17 px-1`}>
							<View style={tw`flex-row items-center mb-3 overflow-hidden`}>
								<ConnectedIcon fillIcon={colors.greenInput} />
								<Text style={tw`font-bold ml-1 mr-2 text-sm`}>Connected</Text>
								<Text style={tw`text-xs`} ellipsizeMode='clip' numberOfLines={1}>
									-------------------------------------------------------------------------------------------------------------------
								</Text>
							</View>
							<ContactItem
								name='petor komarov'
								status='friend'
								phone='+343434343434'
								email='example@gmail.com'
								adress='1198 Pinnickinick Street Seattle, WA 98119 1198 Pinnickinick Street Seattle, WA 98119 1198 Pinnickinick Street Seattle, WA 981191198 Pinnickinick Street Seattle, WA 98119'
								menuList={menuList}
								type='connected'
							/>
							<View style={tw`flex-row items-center pt-5 mb-3 overflow-hidden`}>
								<ConnectedIcon fillIcon={colors.purple} />
								<Text style={tw`font-bold ml-1 mr-2  text-sm`}>Pending requests</Text>
								<Text style={tw`text-xs`} ellipsizeMode='clip' numberOfLines={1}>
									-------------------------------------------------------------------------------------------------------------------
								</Text>
							</View>
							<ContactItem
								name='petor komarov'
								status='friend'
								phone='+343434343434'
								email='example@gmail.com'
								adress='Big city life'
								menuList={menuList}
								type='pending'
							/>
							<View style={tw`flex-row items-center pt-5 mb-3 overflow-hidden`}>
								<ConnectedIcon fillIcon={colors.blueStatus} />
								<Text style={tw`font-bold ml-1 mr-2 text-sm`}>Sent requests</Text>
								<Text style={tw`text-xs`} ellipsizeMode='clip' numberOfLines={1}>
									-------------------------------------------------------------------------------------------------------------------
								</Text>
							</View>
							<ContactItem
								name='petor komarov'
								status='friend'
								phone='+343434343434'
								email='example@gmail.com'
								adress='Big city life'
								menuList={menuList}
								type='sentRequest'
							/>
							<View style={tw`flex-row items-center pt-5 mb-3 overflow-hidden`}>
								<ConnectedIcon fillIcon={colors.yellowStatus} />
								<Text style={tw`font-bold ml-1 mr-2 text-sm`}>Future sent requests</Text>
								<Text style={tw`text-xs`} ellipsizeMode='clip' numberOfLines={1}>
									-------------------------------------------------------------------------------------------------------------------
								</Text>
							</View>
							<ContactItem
								name='petor komarov'
								status='friend'
								phone='+343434343434'
								email='example@gmail.com'
								adress='Big city life'
								menuList={menuList}
								type='futureSentRequest'
							/>

							<View style={tw`flex-row items-center pt-5 mb-3 overflow-hidden`}>
								<Text style={tw`font-bold ml-1 mr-2 text-sm`}>Contacts</Text>
								<Text style={tw`text-xs`} ellipsizeMode='clip' numberOfLines={1}>
									-------------------------------------------------------------------------------------------------------------------
								</Text>
							</View>
							<ContactItem
								name='petor komarov'
								status='contacts'
								phone='+343434343434'
								email='example@gmail.com'
								adress='Big city life'
								menuList={menuList}
								type='contacts'
							/>
							<ContactItem
								name='petor komarov'
								status='contacts'
								phone='+343434343434'
								email='example@gmail.com'
								adress='Big city life'
								menuList={menuList}
								contactStatus={true}
								type='contacts'
							/>
						</View>
					</TemplateContainerScroll>
					<PlusButtonContained
						size='md'
						onPress={() => navigation.navigate(NetworkRoute.NetworkCreateContact)}
						style='absolute bottom-2 right-3'
					/>
				</View>
			</TemplateContainerKeyboard>
		</SafeAreaView>
	);
};
