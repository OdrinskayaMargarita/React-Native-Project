import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { ModalHub } from './ModalHub.component';
import { tw } from 'src/lib/tailwind';

interface IProps {
	modalVisible: boolean;
	setModalVisible: any;
}

export const ModalHubEventComponent: React.FC<IProps> = ({ modalVisible, setModalVisible }) => {
	return (
		<ModalHub modalVisible={modalVisible} onCloseModal={setModalVisible} title='Events'>
			<View style={tw`px-[10px] pb-10 relative w-full`}>
				<Text style={tw`text-sm`}>
					We want to make your life easier and eliminate the stress of organizing your meetings. We have
					thought of any possible obstacles and difficulties associated with event planning and came out with
					viable solutions to each and every one of them. Now you can easily organize invitations to online
					and offline events, check the statuses and answers of guests, chat and share memories in the
					comments! A convenient filter and calendar system will help you not to miss the most important
					events. Enjoy new features to the fullest!
				</Text>
				<Image source={require('../../../images/backlog-1.png')} style={tw`w-full h-80`} />
				<Text style={tw`text-sm font-bold`}>Creating events:</Text>
				<Text style={tw`text-sm`}>
					The process of creating an event is thought through to the smallest detail. All you need to do is
					come up with a name and description for the event, choose your role in it, indicate the type (online
					or offline), attach any files, choose the date & time of the event, and, of course, add
					participants!
				</Text>
				<Image source={require('../../../images/backlog-2.png')} style={tw`w-full h-50`} />
				<Text style={tw`text-sm font-bold`}>Online/Offline events managing:</Text>
				<Text style={tw`text-sm`}>
					Depending on the type of the event, you can either add a link to an online meeting or mark a
					physical address on the map for an offline meeting. This will greatly simplify the invitation
					process as guests will have all the necessary information at their fingertips.
				</Text>
				<Image source={require('../../../images/backlog-3.png')} style={tw`w-full h-40`} />
				<Text style={tw`text-sm font-bold`}>Additional features and statuses:</Text>
				<Text style={tw`text-sm`}>
					Do you know what would be the perfect finishing touch to this meeting creation system? Additional
					features!
				</Text>
				<Image source={require('../../../images/backlog-4.png')} style={tw`w-full h-40`} />
				<Text style={tw`text-sm font-bold`}>Filters and sorting:</Text>
				<Text style={tw`text-sm`}>
					Keeping track of all your events will become even easier with filters! Similarly to the RoadMap, you
					can sort your meetings to view specific ones. You can also choose how to view the tabs: in Grid view
					or List view.
				</Text>
				<Image source={require('../../../images/backlog-5.png')} style={tw`w-full h-50`} />
				<Text style={tw`text-sm font-bold`}>Why should you try the Events?</Text>
				<Text style={tw`text-sm mb-5`}>
					We’re sure that this Event system will change your approach to meeting planning. Everything you need
					for detailed scheduling is conveniently located under a single tab, and managing meetings is
					incredibly easy and effortless! Try it now and trust us, you will be pleasantly surprised!
				</Text>
				<Text style={tw`text-sm font-bold`}>User Choice:</Text>
				<Text style={tw`text-sm`}>
					Other hubmee users purchase Events together with the Roadmap — the perfect combination!
				</Text>
			</View>
			<View />
		</ModalHub>
	);
};
