import * as React from 'react';
import { useCallback, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormControl } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Linking, TextInput, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Switch } from 'react-native-switch';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { InputAuthSocial } from 'src/shared/components/atoms/inputs/InputAuthSocial/InputAuthSocial.component';
import { Link } from 'src/shared/components/atoms/Link/Link.component';
import { WarningIcon } from 'src/shared/components/icons/Warning.icon';
import * as Yup from 'yup';

import { colors, tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../../actions/common.actions';
import {
	getProfileSettings,
	postMailCode,
	postVerificationMailResend,
	putSettingsMailSubscription,
} from '../../../../actions/setting.actions';
import { useSwitch } from '../../../../hooks/useSwitch.hook';
import { RootStackParamList } from '../../../../navigations/rootStackParams.interface';
import { AccordionOpenItem } from '../../../../shared/components/atoms/Accordion/AccordionOpenAlways.component';
import { CopySquareIcon } from '../../../../shared/components/icons/CopySquare.icon';
import { TemplateContainerScroll } from '../../../../shared/components/templates/Template.container-scroll';
import { TemplateContainerKeyboard } from '../../../../shared/components/templates/TemplateKeyboard.container';
import { useAppDispatch, useAppSelector } from '../../../../store/configureStore';
import { SettingRoute } from '../../enums/SettingRoute.enum';
import { ModalTwoFactorDeactivate } from '../Modals/ModalTwoFactorDeactivate.component';
import { ModalTwoFactorPassword } from '../Modals/ModalTwoFactorPassword.component';

type navigationStack = NativeStackNavigationProp<RootStackParamList>;

interface IProps {
	setTitle: (title: string) => void | Promise<void>;
}

export const SettingGeneral: React.FC<IProps> = ({ setTitle }) => {
	const navigation = useNavigation<navigationStack>();
	const dispatch = useAppDispatch();
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [isVisibleModalTwoFactorPassword, setIsVisibleModalTwoFactorPassword] = useState(false);
	const [isVisibleModalTwoFactorDeactivate, setIsVisibleModalTwoFactorDeactivate] = useState(false);
	const [deviceToken, setDeviceToken] = useState('');
	const { userSettingGeneral } = useAppSelector(state => state.settings);
	const { is_active_subscription } = userSettingGeneral;

	useFocusEffect(
		useCallback(() => {
			setTitle('General');
			DeviceInfo.getUniqueId().then(uniqueId => setDeviceToken(uniqueId));
			dispatch(
				dispatchWithLoader(async () => {
					await dispatch(getProfileSettings());
				}),
			);
		}, [setTitle, dispatch]),
	);

	const [isActiveMailSubscription, setIsActiveMailSubscription] = useSwitch({
		onChange: async (val: boolean) => {
			await dispatch(
				dispatchWithLoader(async () => {
					const res = await dispatch(putSettingsMailSubscription({ is_active_subscription: val })).unwrap();
					if (!res.success) return;
					await dispatch(getProfileSettings());
				}),
			);
		},
		value: is_active_subscription,
	});

	const handleResendVerificationMail = async () => {
		await dispatch(
			dispatchWithLoader(async () => {
				await dispatch(postVerificationMailResend({ login: userSettingGeneral.email }));
			}),
		);
	};

	const handleTwoFactor = () => {
		setIsVisibleModalTwoFactorPassword(true);
	};

	const validationSchema = Yup.object().shape({
		token: Yup.string(),
	});

	const { control, handleSubmit, getValues } = useForm({
		defaultValues: {
			token: '',
		},
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const valPhone = getValues().token;

	const onSubmit = async (data: any) => {
		const login = userSettingGeneral.email;
		await dispatch(
			dispatchWithLoader(async () => {
				const res = await dispatch(
					postMailCode({ device_token: deviceToken, login, token: data.token }),
				).unwrap();
				if (!res.success) throw res.statusText;
				handleSubmit(onSubmit);
			}),
		);
	};

	return (
		<SafeAreaView>
			<TemplateContainerScroll>
				<TemplateContainerKeyboard>
					<View>
						<ModalTwoFactorPassword
							isVisible={isVisibleModalTwoFactorPassword}
							close={() => setIsVisibleModalTwoFactorPassword(false)}
						/>
						<ModalTwoFactorDeactivate
							isVisible={isVisibleModalTwoFactorDeactivate}
							close={() => setIsVisibleModalTwoFactorDeactivate(false)}
						/>
						<View style={tw`pb-10 px-1`}>
							<AccordionOpenItem
								key='generalInfo'
								title={'General information'}
								isDisabledExpand={true}
								styleTitle='pl-2'
								styleBg='min-h-15'
								menuList={[
									{
										isDisabled: false,
										label: 'Edit',
										onPress: () => navigation.navigate(SettingRoute.SettingGeneralEmailChange),
									},
									{
										isDisabled: false,
										label: 'Change password',
										onPress: () => navigation.navigate(SettingRoute.SettingGeneralPasswordChange),
									},
								]}>
								<View>
									<View style={tw`my-2`}>
										<Text style={tw`text-[10px] uppercase text-darkGrey`}>email</Text>
										<View
											style={tw`flex-row items-center justify-between w-full border-b border-[#F2EDED]`}>
											<TouchableOpacity
												style={tw`flex flex-row items-center py-1 `}
												onPress={() => Linking.openURL(`mailto:${'kyrylo@gmail.com'}`)}>
												<Text style={tw`text-[#6E82AB]`}>
													{userSettingGeneral?.email || '-'}
												</Text>
											</TouchableOpacity>
											{userSettingGeneral?.email ? (
												<TouchableOpacity>
													<CopySquareIcon fillIcon={colors.greenInput} />
												</TouchableOpacity>
											) : null}
										</View>
									</View>
									{userSettingGeneral?.unverified_login?.email ? (
										<View style={tw`my-2`}>
											<Text style={tw`text-[10px] uppercase text-darkGrey`}>
												unverified email
											</Text>
											<View
												style={tw`flex-row items-center justify-between w-full border-b border-[#F2EDED]`}>
												<TouchableOpacity
													style={tw`flex flex-row items-center py-1 `}
													onPress={() => Linking.openURL(`mailto:${'kyrylo@gmail.com'}`)}>
													<Text style={tw`text-[#6E82AB]`}>
														{userSettingGeneral?.unverified_login.email || '-'}
													</Text>
												</TouchableOpacity>
												{userSettingGeneral?.unverified_login.email ? (
													<TouchableOpacity>
														<CopySquareIcon fillIcon={colors.greenInput} />
													</TouchableOpacity>
												) : null}
											</View>
										</View>
									) : null}
									{userSettingGeneral?.unverified_login?.phone ? (
										<View style={tw`my-2`}>
											<Text style={tw`text-[10px] uppercase text-darkGrey`}>
												unverified phone
											</Text>
											<View
												style={tw`flex-row items-center justify-between w-full border-b border-[#F2EDED]`}>
												<TouchableOpacity
													style={tw`flex flex-row items-center py-1 `}
													onPress={() => Linking.openURL(`mailto:${'kyrylo@gmail.com'}`)}>
													<Text style={tw`text-[#6E82AB]`}>
														{userSettingGeneral?.unverified_login.phone || '-'}
													</Text>
												</TouchableOpacity>
												{userSettingGeneral?.unverified_login.phone ? (
													<TouchableOpacity>
														<CopySquareIcon fillIcon={colors.greenInput} />
													</TouchableOpacity>
												) : null}
											</View>
										</View>
									) : null}

									{!userSettingGeneral?.unverified_login?.phone ? (
										<View style={tw`my-2 `}>
											<Text style={tw`text-[10px] uppercase text-darkGrey`}>Phone</Text>
											<View
												style={tw`flex-row items-center justify-between w-full border-b border-[#F2EDED]`}>
												<TouchableOpacity
													style={tw`flex flex-row items-center py-1`}
													onPress={() => Linking.openURL(`tel:${209 - 769 - 6632}`)}>
													<Image source={require('../../images/flag.png')} style={tw`mr-1`} />
													<Text style={tw`text-[#6E82AB]`}>
														{userSettingGeneral?.phone || '-'}
													</Text>
												</TouchableOpacity>
												{userSettingGeneral?.phone ? (
													<TouchableOpacity>
														<CopySquareIcon fillIcon={colors.greenInput} />
													</TouchableOpacity>
												) : null}
											</View>
										</View>
									) : null}
									<InputAuthSocial
										isDisabled={false}
										typeIcon={'google'}
										value={userSettingGeneral?.social?.google ? 'Google' : 'Sign in with Google'}
										func={() => console.log('add apple')}
										status={userSettingGeneral?.social?.google}
									/>
									<InputAuthSocial
										isDisabled={true}
										// value={
										// 	userSettingGeneral?.social?.facebook ? 'Facebook' : 'Sign in with Facebook'
										// }
										value={'Sign in with Facebook'}
										func={() => console.log('add apple')}
										typeIcon={'facebook'}
										status={false}
										// status={userSettingGeneral?.social.facebook}
									/>
									<InputAuthSocial
										isDisabled={false}
										value={userSettingGeneral?.social?.apple ? 'Apple' : 'Sign in with Apple'}
										func={() => console.log('add apple')}
										typeIcon={'apple'}
										status={userSettingGeneral?.social?.apple}
									/>
								</View>
							</AccordionOpenItem>
							{userSettingGeneral?.unverified_login?.phone ? (
								<AccordionOpenItem
									key='unverfiedPhone'
									title={'Unverified phone number'}
									isDisabledExpand={true}
									styleBg='min-h-15'
									styleTitle='pl-2'>
									<View
										style={tw`rounded border border-grey p-[10px] border-dashed justify-center items-center`}>
										<Text style={tw`mb-4 text-sm text-center`}>
											<View
												style={{
													paddingRight: 5,
													transform:
														Platform.OS === 'ios'
															? [{ translateY: -2 }]
															: [{ translateY: 0 }],
												}}>
												<WarningIcon />
											</View>
											Please, type in verification code sent {'\n'} to 'phone number'
										</Text>
										<View style={tw`relative pt-1 mb-4 w-full`}>
											<View
												style={tw`absolute px-1 bg-greyBg z-2 left-[10px] ${
													isFocus || !!valPhone.length ? 'top-[-2px] z-2' : 'top-[17px] z-0'
												}`}>
												<Text
													style={tw`bg-greyBg  uppercase leading-3 ${
														isFocus
															? 'text-greenInput text-[10px]'
															: valPhone.length
															? 'text-[10px] text-grey'
															: 'text-grey text-sm'
													}`}>
													Verification code*
												</Text>
											</View>
											<View style={tw`flex-row items-end justify-between`}>
												<View
													style={tw`border rounded-md flex flex-row justify-between h-11 w-7/12  ${
														isFocus ? 'border-greenInput' : 'border-grey'
													}`}>
													<FormControl style={tw``}>
														<Controller
															control={control}
															name='token'
															rules={{
																required: true,
															}}
															render={({ field: { onChange, value } }) => (
																<TextInput
																	value={value}
																	onChangeText={onChange}
																	placeholderTextColor={colors.grey}
																	onFocus={() => setIsFocus(true)}
																	onBlur={() => setIsFocus(false)}
																	style={tw`text-sm h-11 text-black rounded-md px-3 w-full ${
																		Platform.OS === 'ios' ? '-mt-1' : ''
																	}`}
																	keyboardType='numeric'
																/>
															)}
														/>
													</FormControl>
												</View>
												<DefaultButton
													title='Confirm'
													size='md'
													onPress={handleSubmit(onSubmit)}
												/>
											</View>
										</View>
										<View style={tw`flex items-center justify-center`}>
											<DefaultButton
												title={'Resend verification code'}
												variant={'outlined'}
												size='md'
												onPress={handleResendVerificationMail}
											/>
										</View>
									</View>
								</AccordionOpenItem>
							) : null}
							{userSettingGeneral?.unverified_login?.email ? (
								<AccordionOpenItem
									key='unverfiedEmail'
									title={'Unverified email'}
									isDisabledExpand={true}
									styleBg='min-h-15'
									styleTitle='pl-2'
									isOpenAlways={true}>
									<View
										style={tw`rounded border border-grey p-[10px] border-dashed justify-center items-center`}>
										<Text style={tw`mb-4 text-center text-sm`}>
											<View
												style={{
													paddingLeft: 10,
													paddingRight: 5,
													transform:
														Platform.OS === 'ios'
															? [{ translateY: -2 }]
															: [{ translateY: 0 }],
												}}>
												<WarningIcon />
											</View>
											Please check your email and follow the {'\n'} instructions to verify your
											mail.
											{'\n'} If you did not receive an email or it is {'\n'} expired, you can
											resend one.
										</Text>
										<View style={tw`flex items-center justify-center`}>
											<DefaultButton
												title={'Resend verification email'}
												variant={'outlined'}
												size='md'
												onPress={handleResendVerificationMail}
											/>
										</View>
									</View>
								</AccordionOpenItem>
							) : null}
							<AccordionOpenItem
								key='twoFactor'
								title={'Two-factor authentication'}
								isInfoIcon={true}
								isDisabledExpand={true}
								styleBg='min-h-15'
								styleTitle='pl-2'>
								<View
									style={tw`rounded border border-grey p-[10px] border-dashed justify-center items-center`}>
									<View style={tw`items-center justify-center flex flex-row mb-4`}>
										<Text style={tw`ml-2 text-sm text-center`}>
											We’ll ask for a verification code via your email or phone number if we
											notice a login from an unrecognized device or browser.
										</Text>
									</View>
									<View style={tw`flex items-center justify-center`}>
										<DefaultButton
											title={'Turn on'}
											variant={'outlined'}
											size='md'
											onPress={handleTwoFactor}
										/>
									</View>
								</View>
							</AccordionOpenItem>
							<AccordionOpenItem
								key='notifications'
								title={'Notifications'}
								isDisabledExpand={true}
								styleBg='min-h-15'
								styleTitle='pl-2'>
								<View
									style={tw`flex-row justify-between items-center border-b border-lightGrey pb-2 px-2`}>
									<Text>Emails newsletter</Text>
									<View style={tw`flex-row items-center`}>
										<Switch
											value={isActiveMailSubscription}
											onValueChange={setIsActiveMailSubscription}
											disabled={false}
											circleSize={14}
											barHeight={20}
											circleBorderWidth={0}
											backgroundActive={colors.greenInput}
											backgroundInactive={colors.grey}
											circleActiveColor={'#FFF'}
											circleInActiveColor={'#FFF'}
											renderActiveText={false}
											renderInActiveText={false}
											switchLeftPx={2}
											switchRightPx={2}
											switchWidthMultiplier={2.9}
											switchBorderRadius={10}
										/>
										<View style={tw`ml-2 w-5`}>
											{isActiveMailSubscription ? (
												<Text style={tw`text-[13px]`}>On</Text>
											) : (
												<Text style={tw`text-[13px]`}>Off</Text>
											)}
										</View>
									</View>
								</View>
							</AccordionOpenItem>
							<AccordionOpenItem
								key='securityWipe'
								isDisabledExpand={true}
								styleBg='min-h-15'
								styleTitle='pl-2'
								title={'Security wipe data'}>
								<View
									style={tw`rounded border border-grey p-[10px] border-dashed justify-center items-center p-2`}>
									<Text style={tw`text-center`}>
										If you wish to no longer be a part of hubmee, you can
									</Text>
									<Link
										isDisabled={false}
										label={'Remove data and Deactivate Account'}
										style={'text-red underline'}
										onPress={() => setIsVisibleModalTwoFactorDeactivate(true)}
									/>
								</View>
							</AccordionOpenItem>
						</View>
					</View>
				</TemplateContainerKeyboard>
			</TemplateContainerScroll>
		</SafeAreaView>
	);
};
