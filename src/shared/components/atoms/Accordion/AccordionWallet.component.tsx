import * as React from 'react';
import { useState } from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	isDisabledExpand?: boolean;
	children?: JSX.Element | JSX.Element[];
	isIconStart?: boolean;
	iconStart?: JSX.Element | JSX.Element[];
	invoiceId: string;
	dueDate: string;
	totalSum: string;
}

export const AccordionWallet: React.FC<IProps> = ({
	children,
	isDisabledExpand = false,
	isIconStart = false,
	iconStart,
	invoiceId = '',
	dueDate = '',
	totalSum = '',
}) => {
	const [dropdownStatus, setDropdownStatus] = useState(isDisabledExpand);

	const openDropdown = () => {
		setDropdownStatus(!dropdownStatus);
	};

	return (
		<View style={tw`my-2 w-full`}>
			<TouchableOpacity
				onPress={openDropdown}
				style={tw`bg-white p-4 flex flex-row items-center justify-between shadow`}>
				<View style={tw`flex flex-row items-center justify-between w-full`}>
					{isIconStart ? <View style={tw`w-1/12`}>{iconStart}</View> : null}
					<View style={tw`flex flex-row items-center justify-between w-11/12 pr-4`}>
						<View>
							<Text style={tw`uppercase text-darkGrey text-[10px] leading-5 mb-1 `}>Invoice id</Text>
							<Text style={tw`text-[13px] leading-4 `}>{invoiceId}</Text>
						</View>
						<View>
							<Text style={tw`uppercase text-darkGrey text-[10px] leading-5 mb-1 `}>Due-date</Text>
							<Text style={tw`text-[13px] leading-4 `}>{dueDate}</Text>
						</View>
						<View style={tw`w-12`}>
							<Text style={tw`uppercase text-darkGrey text-[10px] leading-5 mb-1 `}>Total</Text>
							<Text style={tw`text-[13px] leading-4 `}>{`${totalSum} $`}</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
			<View style={tw` ${dropdownStatus ? 'flex' : 'hidden opacity-0'} p-1 pt-4`}>{children}</View>
		</View>
	);
};
