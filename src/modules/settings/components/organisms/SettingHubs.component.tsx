import * as React from 'react';
import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import { View } from 'react-native';
import { colors, tw } from 'src/lib/tailwind';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';
import { BurgerIcon } from 'src/shared/components/icons/Burger.icon';
import { CalendarLoadIcon } from 'src/shared/components/icons/CalendarLoad.icon';
import { CalendarStarIcon } from 'src/shared/components/icons/CalendarStar.icon';
import { GarageIcon } from 'src/shared/components/icons/Garage.icon';
import { RoadmapIcon } from 'src/shared/components/icons/Roadmap.icon';
import { StorageIcon } from 'src/shared/components/icons/Storage.icon';
import { WorkIcon } from 'src/shared/components/icons/Work.icon';

import { CheckIcon } from '../../../../shared/components/icons/Check.icon';
import { TemplateContainerScroll } from '../../../../shared/components/templates/Template.container-scroll';
import { ModalHubDeactivateComponent } from '../Modals/ModalHub/ModalDeactivateHub.component';
import { ModalHubBacklogComponent } from '../Modals/ModalHub/ModalHubBacklog.component';
import { ModalHubEventComponent } from '../Modals/ModalHub/ModalHubEvents.component';
import { ModalHubGarageComponent } from '../Modals/ModalHub/ModalHubGarage.component';
import { ModalHubRoadmapComponent } from '../Modals/ModalHub/ModalHubRoadmap.component';
import { SettingHubItemSmall } from '../SettingHubItemSmall.component';

interface IProps {
	setTitle: (title: string) => void | Promise<void>;
}

export const SettingHubs: React.FC<IProps> = ({ setTitle }) => {
	const [modalBacklogVisible, setModalBacklogVisible] = useState(false);
	const [modalBacklogDeactivateVisible, setModalBacklogDeactivateVisible] = useState(false);
	const [modalRoadmapVisible, setModalRoadmapVisible] = useState(false);
	const [modalEventsVisible, setModalEventsVisible] = useState(false);
	const [modalGarageVisible, setModalGarageVisible] = useState(false);

	useFocusEffect(
		useCallback(() => {
			setTitle('Hubs');
		}, [setTitle]),
	);

	return (
		<TemplateContainerScroll>
			<View style={tw`px-1 relative`}>
				<ModalHubBacklogComponent
					modalVisible={modalBacklogVisible}
					setModalVisible={setModalBacklogVisible}
					modalDeactivate={modalBacklogDeactivateVisible}
					setModalDeactivate={setModalBacklogDeactivateVisible}
				/>
				<ModalHubRoadmapComponent modalVisible={modalRoadmapVisible} setModalVisible={setModalRoadmapVisible} />
				<ModalHubEventComponent modalVisible={modalEventsVisible} setModalVisible={setModalEventsVisible} />
				<ModalHubGarageComponent modalVisible={modalGarageVisible} setModalVisible={setModalGarageVisible} />
				<ModalHubDeactivateComponent
					modalDeactivate={modalBacklogDeactivateVisible}
					setModalDeactivate={setModalBacklogDeactivateVisible}
				/>
				<SettingHubItemSmall
					title={'Backlog'}
					additionalText='FREE'
					isIconStart={true}
					iconStart={<BurgerIcon fillIcon={colors.greenInput} />}
					onPress={() => setModalBacklogVisible(!modalBacklogVisible)}
					titleButton={<DefaultButton title='Activate' style='w-25' />}
				/>
				<SettingHubItemSmall
					title={'Roadmap'}
					additionalText='5$'
					isIconStart={true}
					iconStart={<RoadmapIcon fillIcon={colors.greenInput} />}
					titleButton={<DefaultButton title='Activate' style='w-25' />}
					onPress={() => setModalRoadmapVisible(!modalRoadmapVisible)}
				/>
				<SettingHubItemSmall
					title={'Events'}
					additionalText='5$'
					isIconStart={true}
					iconStart={<CalendarStarIcon fillIcon={colors.greenInput} />}
					titleButton={
						<DefaultButton
							style='w-25'
							title='Activated'
							isDisabled={true}
							variant='outlined'
							isStartIcon={true}
							startIcon={<CheckIcon fillIcon={colors.grey} />}
						/>
					}
					onPress={() => setModalEventsVisible(!modalEventsVisible)}
				/>
				<SettingHubItemSmall
					title={'Garage'}
					additionalText='5$'
					isIconStart={true}
					iconStart={<GarageIcon fillIcon={colors.greenInput} />}
					titleButton={<DefaultButton style='w-25' title='Activate' />}
					onPress={() => setModalGarageVisible(!modalGarageVisible)}
				/>

				<SettingHubItemSmall
					title={'Storage'}
					additionalText='5$'
					styleAddAll='opacity-70'
					isIconStart={true}
					iconStart={<StorageIcon fillIcon={colors.greenInput} />}
					titleButton={<DefaultButton style='w-25' title='Activate' isDisabled={true} />}
					onPress={() => console.log('123')}
				/>

				<SettingHubItemSmall
					title={'Google Sync'}
					styleAddAll='opacity-70'
					additionalText='5$'
					isIconStart={true}
					iconStart={<CalendarLoadIcon fillIcon={colors.greenInput} />}
					titleButton={<DefaultButton style='w-25' title='Activate' isDisabled={true} />}
					onPress={() => console.log('123')}
				/>

				<SettingHubItemSmall
					title={'Work'}
					additionalText='5$'
					styleAddAll='opacity-70'
					isIconStart={true}
					iconStart={<WorkIcon fillIcon={colors.greenInput} />}
					titleButton={<DefaultButton style='w-25' title='Activate' isDisabled={true} />}
					onPress={() => console.log('123')}
				/>
			</View>
		</TemplateContainerScroll>
	);
};
