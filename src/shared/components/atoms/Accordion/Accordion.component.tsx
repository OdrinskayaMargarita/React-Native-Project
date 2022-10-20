import * as React from 'react';
import { useState } from 'react';

import { Popover } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { MoreVertical } from '../../icons/MoreVertical.icon';
import { SelectArrowIcon } from '../../icons/SelectArrow.style';
import { LinkPressable } from '../LinkPressable/LinkPressable.component';

interface IProps {
	title: string;
	subTitle?: string;
	isDisabledExpand?: boolean;
	menuList?: typeMenuList[];
	children?: JSX.Element | JSX.Element[];
	arrowStart?: boolean;
	arrowEnd?: boolean;
	isIconStart?: boolean;
	iconStart?: JSX.Element | JSX.Element[];
	styleTitle?: string;
	additionalText?: string;
	styleAdditionalText?: string;
	styleAdditionalContainer?: string;
	styleBg?: string;
	isShadow?: boolean;
	isBorderDotted?: boolean;
	isOpenAlways?: boolean;
	titleButton?: JSX.Element | JSX.Element[];
}

interface typeMenuList {
	label: string;
	onPress: () => void | Promise<void>;
	isDisabled: boolean;
}

export const AccordionItem: React.FC<IProps> = ({
	title,
	subTitle = '',
	children,
	isDisabledExpand = false,
	arrowStart = true,
	arrowEnd = false,
	isIconStart = false,
	iconStart,
	menuList,
	styleTitle = '',
	additionalText = '',
	styleAdditionalText = '',
	styleAdditionalContainer = '',
	styleBg = '',
	isShadow = true,
	isOpenAlways = false,
	isBorderDotted = false,
	titleButton,
}) => {
	const [dropdownStatus, setDropdownStatus] = useState(isDisabledExpand);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openDropdown = () => {
		isOpenAlways ? setDropdownStatus(true) : setDropdownStatus(!dropdownStatus);
	};

	const closePopover = () => setIsOpen(!isOpen);

	return (
		<View style={tw`my-2 w-full`}>
			<View>
				<TouchableOpacity
					onPress={openDropdown}
					style={tw`bg-white p-3 pl-1 flex flex-row items-center justify-between rounded ${
						isShadow ? 'shadow' : isBorderDotted ? '' : 'border-b border-grey'
					} ${styleBg}`}>
					<View style={tw`flex-row items-center justify-between w-11/12`}>
						{!isDisabledExpand && arrowStart ? (
							<View>
								<SelectArrowIcon width={32} height={24} />
							</View>
						) : null}
						{isIconStart ? <View style={tw`mr-[10px]`}>{iconStart}</View> : null}
						<View style={tw`justify-start items-start w-full `}>
							<View style={tw`w-full flex-row items-center justify-between ${styleAdditionalContainer}`}>
								<Text style={tw`uppercase font-semibold text-sm bg-white h-full ${styleTitle}`}>
									{title}
								</Text>
								{additionalText?.length ? (
									<Text style={tw`${styleAdditionalText} mt-1`}>{additionalText}</Text>
								) : null}
								{titleButton ? <View>{titleButton}</View> : null}
							</View>
							{subTitle.length && !dropdownStatus ? <Text>{subTitle}</Text> : null}
						</View>
					</View>
					<View>
						{menuList?.length ? (
							<Popover
								placement='bottom right'
								trigger={triggerProps => {
									return (
										<TouchableOpacity
											{...triggerProps}
											onPress={() => setIsOpen(true)}
											style={tw`p-1 -mr-1`}>
											<MoreVertical fillIcon={colors.grey} width={18} height={18} />
										</TouchableOpacity>
									);
								}}
								isOpen={isOpen}
								onClose={closePopover}>
								<Popover.Content>
									<Popover.Body style={tw`bg-white`}>
										{menuList?.map((item, key: number) => (
											<LinkPressable
												isDisabled={item.isDisabled}
												onClosePopover={closePopover}
												handleNavigate={item.onPress}
												label={item.label}
												key={key}
											/>
										))}
									</Popover.Body>
								</Popover.Content>
							</Popover>
						) : null}
						{arrowEnd && (
							<View style={tw`mr-2 w-3`}>
								<SelectArrowIcon width={32} height={24} />
							</View>
						)}
					</View>
				</TouchableOpacity>
				{isBorderDotted ? (
					<View style={tw`px-1 relative -mt-2`}>
						<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs`}>
							----------------------------------------------------------------------------------------------------------------------------------------
						</Text>
					</View>
				) : null}
			</View>
			<View style={tw` ${dropdownStatus ? 'flex' : 'hidden opacity-0'} p-1 pt-4`}>{children}</View>
		</View>
	);
};
