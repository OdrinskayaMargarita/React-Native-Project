import * as React from 'react';
import { colors, tw } from '@lib/tailwind';
import { View, Text } from 'react-native';
import { CheckIcon } from '../../icons/Check.icon';
import { AttentionIcon } from '../../icons/Attention.icon';
import { InfoIcon } from '../../icons/Info.icon';
import { ClockArrowIcon } from '../../icons/ClockArrow.icon';
import { EngineIcon } from '../../icons/Engine.icon';

interface IProps {
	variant: TypeVariant;
	msg: string;
	key?: number;
	title?: string;
}
type TypeVariant = 'success' | 'error' | 'info' | 'update' | 'maintenance';

export const Notification: React.FC<IProps> = ({ variant, msg, key, title }) => {
	const getIcon = (variantStyle: TypeVariant) => {
		switch (variantStyle) {
			case 'success':
				return {
					bgColor: 'bg-greenInput/20',
					icon: <CheckIcon fillIcon={colors.greenInput} />,
				};
			case 'error':
				return {
					bgColor: 'bg-red/20',
					icon: <AttentionIcon fillIcon={colors.red} />,
				};
			case 'info':
				return {
					bgColor: 'bg-grey/20',
					icon: <InfoIcon fillIcon={colors.grey} />,
				};
			case 'update':
				return {
					bgColor: 'bg-blueStatus/20',
					icon: <ClockArrowIcon fillIcon={colors.blueStatus} />,
				};
			case 'maintenance':
				return {
					bgColor: 'bg-yellowStatus/20',
					icon: <EngineIcon fillIcon={colors.yellowStatus} />,
				};
			default:
				return {
					bgColor: 'bg-greenInput/20',
					icon: <CheckIcon />,
				};
		}
	};

	return (
		<Text style={tw`flex items-center  my-1 border border-lightGrey rounded-md`} key={key}>
			<View style={tw`h-10 w-10 justify-center items-center ${getIcon(variant).bgColor} rounded-l-md`}>
				{getIcon(variant).icon}
			</View>
			<View style={tw`bg-white w-9/12 flex items-start justify-start rounded-r-md px-2 `}>
				{title ? title?.length && <Text style={tw`mb-1 font-semibold`}>{title}</Text> : null}
				<Text>{msg}</Text>
			</View>
		</Text>
	);
};
