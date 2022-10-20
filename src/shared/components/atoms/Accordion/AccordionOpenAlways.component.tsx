import * as React from 'react';
import { useState } from 'react';

import { Popover } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { InfoIcon } from '../../icons/Info.icon';
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
	isInfoIcon?: boolean;
}

interface typeMenuList {
	label: string;
	onPress: () => void | Promise<void>;
	isDisabled: boolean;
}

export const AccordionOpenItem: React.FC<IProps> = ({
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
	isBorderDotted = false,
	titleButton,
	isInfoIcon,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const closePopover = () => {
		setIsOpen(false);
	};

	return (
		<View style={tw`my-2 w-full`}>
			<View>
				<View
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
								<View style={tw`flex-row items-center justify-start`}>
									<Text style={tw`uppercase font-semibold text-sm bg-white h-full ${styleTitle}`}>
										{title}
									</Text>
									{isInfoIcon ? (
										<TouchableOpacity style={tw`ml-1`}>
											<InfoIcon fillIcon={colors.grey} />
										</TouchableOpacity>
									) : null}
								</View>
								{additionalText?.length ? (
									<Text style={tw`${styleAdditionalText} mt-1`}>{additionalText}</Text>
								) : null}
								{titleButton ? <View>{titleButton}</View> : null}
							</View>
							{subTitle.length ? <Text>{subTitle}</Text> : null}
						</View>
					</View>
					<View>
						{menuList?.length ? (
							<Popover
								placement='bottom right'
								trigger={triggerProps => {
									return (
										<TouchableOpacity {...triggerProps} onPress={() => setIsOpen(true)}>
											<MoreVertical />
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
				</View>
				{isBorderDotted ? (
					<View style={tw`px-1 relative -mt-2`}>
						<Text ellipsizeMode='clip' numberOfLines={1} style={tw`text-grey text-xs`}>
							--------------------------------------------------------------------
							--------------------------------------------------------------------
						</Text>
					</View>
				) : null}
			</View>
			<View style={tw`p-1 pt-4`}>{children}</View>
		</View>
	);
};
