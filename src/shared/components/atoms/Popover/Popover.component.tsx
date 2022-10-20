import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { AvatarItem } from '../Avatar/Avatar.component';
import { InviteCard } from '../InviteCard/InviteCard.component';
import { Popover } from 'native-base';

interface IProps {
	item: typeItemUser;
	userId: number;
}

interface typeItemUser {
	avatar: {
		url: string;
	};
	contacts: {
		emails: [{ value: string }];
		phones: [{ value: string }];
	};
	first_name: string;
	last_name: string;
	entity_type: string;
	id: number;
}

export const PopoverUser: React.FC<IProps> = ({ item }) => {
	return (
		<Popover
			placement='bottom left'
			trigger={triggerProps => {
				return (
					<TouchableOpacity {...triggerProps} colorScheme='danger'>
						<AvatarItem
							firstName={item.first_name}
							lastName={item.last_name}
							size='small'
							src={item.avatar?.url}
							id={item.id}
						/>
					</TouchableOpacity>
				);
			}}>
			<Popover.Content w='56'>
				<InviteCard
					firstName={item.first_name}
					lastName={item.last_name}
					phone={item.contacts.phones[0].value}
					email={item.contacts.emails[0].value}
					status={item.entity_type}
					src={item.avatar?.url}
					id={item.id}
					inviteButton={false}
				/>
			</Popover.Content>
		</Popover>
	);
};
