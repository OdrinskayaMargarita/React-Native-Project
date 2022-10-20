import * as React from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { FormControl } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { View, Modal, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Platform, Text } from 'react-native';
import * as Yup from 'yup';

import { tw } from '@lib/tailwind';

import { DefaultButton } from '../../../shared/components/atoms/buttons/Button/Button.component';
import { InputComponent } from '../../../shared/components/atoms/inputs/Input/Input.component';
import { TemplateContainerKeyboard } from '../../../shared/components/templates/TemplateKeyboard.container';
import { useAppSelector } from '../../../store/configureStore';

interface IProps {
	isVisible: boolean;
	onOverlayTap?: () => void | Promise<void>;
	close: () => void | Promise<void>;
	onSubmit: () => void | Promise<void> | any;
}

export const ModalLoginEmail: React.FC<IProps> = ({ isVisible, onOverlayTap, close, onSubmit }) => {
	const { userSettingGeneral } = useAppSelector(state => state.settings);

	const validationSchema = Yup.object().shape({
		token: Yup.string(),
	});

	const { control, handleSubmit } = useForm({
		defaultValues: {
			token: '',
		},
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	return (
		<SafeAreaView>
			<Modal animationType='fade' transparent={true} visible={isVisible}>
				<TemplateContainerKeyboard>
					<View style={tw`${Platform.OS === 'ios' ? 'pt-10' : 'pt-0'}`}>
						<TouchableOpacity
							activeOpacity={1}
							onPressOut={onOverlayTap}
							style={tw`flex h-full justify-center items-start relative`}>
							<View style={tw`w-full h-full bg-black absolute opacity-40`} />
							<TouchableWithoutFeedback>
								<View style={tw`items-center justify-center h-full w-full`}>
									<View
										style={tw`flex w-95% bg-white items-center justify-center rounded-md p-4 pb-5`}>
										<View style={tw`mb-11`}>
											<Text style={tw`font-bold text-xl mb-4`}>
												Enable two-factor authentication
											</Text>
											<Text style={tw`text-[13px] mb-4 leading-4`}>
												We send a security code to
												<Text style={tw`font-bold`}> {userSettingGeneral.email}</Text> Please,
												enter it below to verify your email
											</Text>
											<FormControl style={tw``}>
												<Controller
													control={control}
													name='token'
													rules={{
														required: true,
													}}
													render={({ field: { onChange, value } }) => (
														<InputComponent
															onChange={onChange}
															value={value}
															labelValue='security Code'
															bgColor='bg-white'
														/>
													)}
												/>
											</FormControl>
										</View>
										<View style={tw`flex-row items-center justify-center w-full`}>
											<View style={tw`w-38% mr-5`}>
												<DefaultButton
													title='Cancel'
													size='md'
													variant='outlined'
													onPress={close}
												/>
											</View>
											<View style={tw`w-38%`}>
												<DefaultButton
													title='Confirm'
													size='md'
													variant='contained'
													onPress={handleSubmit(onSubmit)}
												/>
											</View>
										</View>
									</View>
								</View>
							</TouchableWithoutFeedback>
						</TouchableOpacity>
					</View>
				</TemplateContainerKeyboard>
			</Modal>
		</SafeAreaView>
	);
};
