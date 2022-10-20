import * as React from 'react';
import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { FormControl } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import {
	View,
	Modal,
	SafeAreaView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Platform,
	Text,
	Keyboard,
} from 'react-native';
import * as Yup from 'yup';

import { tw } from '@lib/tailwind';

import { dispatchWithLoader } from '../../../../actions/common.actions';
import { postCheckPassword } from '../../../../actions/setting.actions';
import { DefaultButton } from '../../../../shared/components/atoms/buttons/Button/Button.component';
import { InputPassword } from '../../../../shared/components/atoms/inputs/Input/InputPassword.component';
import { TemplateContainerKeyboard } from '../../../../shared/components/templates/TemplateKeyboard.container';
import { useAppDispatch } from '../../../../store/configureStore';

import { ModalTwoFactor } from './ModalTwoFactor.component';

interface IProps {
	isVisible: boolean;
	onOverlayTap?: () => void | Promise<void>;
	close: () => void | Promise<void>;
}

export const ModalTwoFactorPassword: React.FC<IProps> = ({ isVisible, onOverlayTap, close }) => {
	const dispatch = useAppDispatch();
	const [dataPass, setDataPass] = useState('');
	const [isVisModalType, setIsVisModalType] = useState(false);

	const validationSchema = Yup.object().shape({
		password: Yup.string(),
	});

	const { control, handleSubmit } = useForm({
		defaultValues: {
			password: '',
		},
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data: { password: string }) => {
		setDataPass(data.password);
		Keyboard.dismiss();
		dispatch(
			dispatchWithLoader(async () => {
				const resPass = await dispatch(postCheckPassword({ data: data })).unwrap();
				if (!resPass.success) throw resPass.statusText;

				close();
				setIsVisModalType(true);
			}),
		);
	};

	return (
		<SafeAreaView>
			<ModalTwoFactor isVisible={isVisModalType} close={() => setIsVisModalType(false)} pass={dataPass} />
			<TemplateContainerKeyboard>
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
													Whenever you sign in to the hubmee from a new device or browser,
													you’ll need to enter both your password and a security code sent to
													your email or phone number.
												</Text>
												<FormControl style={tw``}>
													<Controller
														control={control}
														name='password'
														rules={{
															required: true,
														}}
														render={({ field: { onChange, value } }) => (
															<InputPassword
																onChange={onChange}
																value={value}
																labelValue='password'
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
			</TemplateContainerKeyboard>
		</SafeAreaView>
	);
};
