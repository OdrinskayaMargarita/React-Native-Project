import * as React from 'react';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { TextInput, View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	onChange: () => void | Promise<void>;
	value: string;
}

export const LoginInput: React.FC<IProps> = ({ onChange, value = '' }) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const { t } = useTranslation();

	return (
		<View style={tw`border-b border-grey relative h-15`}>
			<View style={tw`absolute left-0 top-[-10px] z-2`}>
				<Text style={tw`capitalize text-grey text-sm`}>{t('auth.login.form.login.label')}</Text>
			</View>
			<TextInput
				value={value}
				onChangeText={onChange}
				style={tw`text-sm text-black h-full`}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
			/>
		</View>
	);
};
