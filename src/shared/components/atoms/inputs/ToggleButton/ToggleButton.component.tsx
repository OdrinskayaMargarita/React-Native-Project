import React, { useState } from 'react';

import { View, Switch, Text } from 'react-native';

import { colors, tw } from '@lib/tailwind';

interface IProps {
	firstValue?: string;
	secondValue?: string;
}

export const ToggleButton: React.FC<IProps> = ({ firstValue = '', secondValue = '' }) => {
	const [isEnabled, setIsEnabled] = useState<boolean>(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);

	return (
		<View style={tw`flex flex-row items-center`}>
			{firstValue.length ? <Text>{firstValue}</Text> : null}
			<Switch
				trackColor={{ false: '#767577', true: colors.greenInput }}
				thumbColor={colors.white}
				ios_backgroundColor='#3e3e3e'
				onValueChange={toggleSwitch}
				value={isEnabled}
				style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.7 }] }}
			/>
			{isEnabled ? <Text>On</Text> : <Text>Off</Text>}
		</View>
	);
};
