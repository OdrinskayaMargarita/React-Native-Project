import * as React from 'react';

import RadioButtonRN from 'radio-buttons-react-native';

import { colors, tw } from '@lib/tailwind';

interface IProps {
	listRadio: IListRadio[];
}

interface IListRadio {
	label: string;
	value: string;
	isDisabled?: boolean;
}

export const RadioButton: React.FC<IProps> = ({ listRadio }) => {
	return (
		<RadioButtonRN
			box={true}
			boxStyle={tw`w-19 p-0 border-0 bg-greyBg`}
			data={listRadio}
			selectedBtn={e => console.log(e)}
			style={tw`flex-row items-center justify-start`}
			textStyle={tw`text-[13px] ml-1`}
			circleSize={10}
			activeColor={colors.greenInput}
		/>
	);
};
