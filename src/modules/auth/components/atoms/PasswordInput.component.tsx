import * as React from 'react';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { TextInput, View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	onChange: () => void | Promise<void>;
	value: string;
}

export const LoginInputPassword: React.FC<IProps> = ({ onChange, value = '' }) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const { t } = useTranslation();

	return (
		<View style={tw`pb-2 border-b border-grey relative h-12`}>
			<View style={tw`absolute left-0 ${isFocus || value.length ? 'top-[-10px] z-2' : 'top-[12px] z-0'}`}>
				<Text style={tw`capitalize text-grey text-sm`}>{t('auth.login.form.password.label')}</Text>
			</View>
			<TextInput
				secureTextEntry={true}
				value={value}
				onChangeText={onChange}
				style={tw`text-sm text-black h-full`}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
			/>
		</View>
	);
};
