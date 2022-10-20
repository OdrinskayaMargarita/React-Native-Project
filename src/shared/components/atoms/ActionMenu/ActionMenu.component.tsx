import * as React from 'react';

import { Popover } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { tw } from '@lib/tailwind';

import { MoreVertical } from '../../icons/MoreVertical.icon';
import { LinkPressable } from '../LinkPressable/LinkPressable.component';

interface IProps {
	menuList: IMenuList[];
	userId?: number;
}

interface IMenuList {
	label: string;
	onPress: () => void | Promise<void>;
	isDisabled: boolean;
}

export const BaseActionMenu: React.FC<IProps> = ({ menuList }) => {
	return (
		<Popover
			placement='bottom right'
			trigger={triggerProps => {
				return (
					<TouchableOpacity {...triggerProps}>
						<MoreVertical />
					</TouchableOpacity>
				);
			}}>
			<Popover.Content>
				<Popover.Body style={tw`bg-white`}>
					{menuList?.map((item, key: number) => (
						<LinkPressable
							isDisabled={item.isDisabled}
							onClosePopover={() => console.log('123')}
							handleNavigate={item.onPress}
							label={item.label}
							key={key}
						/>
					))}
				</Popover.Body>
			</Popover.Content>
		</Popover>
	);
};
