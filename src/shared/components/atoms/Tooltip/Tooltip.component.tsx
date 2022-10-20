import * as React from 'react';

import { Popover } from 'native-base';
import { Text, TouchableOpacity } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
	children: JSX.Element | JSX.Element[];
	color?: ITypeColor;
	title: string | any;
	isArrow?: boolean;
	placement?: ITypePlacement;
}

type ITypeColor = 'light' | 'right';
type ITypePlacement =
	| 'top left'
	| 'top'
	| 'top right'
	| 'right top'
	| 'right'
	| 'right bottom'
	| 'bottom left'
	| 'bottom'
	| 'bottom right'
	| 'left top'
	| 'left'
	| 'left bottom'
	| 'auto';

export const TooltipItem: React.FC<IProps> = ({ children, title, color = 'light', placement = 'bottom left' }) => {
	return (
		<Popover
			placement={placement === 'auto' ? undefined : placement}
			trigger={triggerProps => {
				return (
					<Text>
						<TouchableOpacity {...triggerProps} colorScheme='danger'>
							{children}
						</TouchableOpacity>
					</Text>
				);
			}}>
			<Popover.Content style={tw`p-2 ${color === 'light' ? 'bg-white' : 'bg-darkGrey'}`}>
				<Text style={tw` ${color === 'light' ? 'text-black' : 'text-white'}`}>{title}</Text>
			</Popover.Content>
		</Popover>
	);
};
