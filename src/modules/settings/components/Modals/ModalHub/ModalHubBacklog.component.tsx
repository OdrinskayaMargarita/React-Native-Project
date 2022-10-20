import * as React from 'react';

import { View, Text, Image } from 'react-native';
import { tw } from 'src/lib/tailwind';

import { ModalHub } from './ModalHub.component';

interface IProps {
	modalVisible: boolean;
	setModalVisible: any;
	modalDeactivate: boolean;
	setModalDeactivate: (e: boolean) => void;
}

export const ModalHubBacklogComponent: React.FC<IProps> = ({
	modalVisible,
	setModalVisible,
	setModalDeactivate,
	modalDeactivate,
}) => {
	const press = () => {
		setModalDeactivate(true);
		// setModalVisible(false);
		console.log(modalDeactivate, 'press');
	};
	return (
		<ModalHub
			modalVisible={modalVisible}
			onCloseModal={setModalVisible}
			title='Backlog'
			titleButton='Deactivate'
			colorButton='secondary'
			variantButton='outlined'
			onPressButton={press}>
			<View style={tw`px-5 pb-30 relative w-full`}>
				<Text style={tw`text-sm`}>
					No more rush! This is a special tab for convenient task management without a specific deadline,
					where you can easily plan all your affairs. Use filters for comfortable use and quickly transfer
					tasks to Planner and Roadmap using the To do, In Progress, and Done statuses. So let's take a closer
					look.
				</Text>
				<Image source={require('../../../images/backlog-1.png')} style={tw`w-full h-80`} />
				<Text style={tw`text-sm font-bold`}>Tasks in the Backlog:</Text>
				<Text style={tw`text-sm`}>
					Creating tasks with the Backlog is easy! First, add a title and description of the task. Then,
					attach any supplementary files, relevant physical address, photos, or credentials for different
					services. Now you can add other contributors and, if necessary, allow them to make edits. Follow
					these few steps to create a clear and detailed task!
				</Text>
				<Image source={require('../../../images/backlog-2.png')} style={tw`w-full h-50`} />
				<Text style={tw`text-sm font-bold`}>Checklists, Comments, Notes:</Text>
				<Text style={tw`text-sm`}>
					More good news! You can also take advantage of the Сhecklist and Notes: break down bigger tasks into
					smaller ones, mark completed stages, and add short memos to the Notes to avoid forgetting anything.
					Don’t forget to check out the Сomments section, where you can discuss the task with other
					contributors!
				</Text>
				<Image source={require('../../../images/backlog-3.png')} style={tw`w-full h-40`} />
				<Text style={tw`text-sm font-bold`}>A sophisticated system of filters:</Text>
				<Text style={tw`text-sm`}>
					Enjoy perfect task sorting in the Backlog tab! You can use a few simple filters to help you sort
					your tasks and manage them more easily.
				</Text>
				<Image source={require('../../../images/backlog-4.png')} style={tw`w-full h-40`} />
				<Text style={tw`text-sm font-bold`}>The process of changing the status in the task:</Text>
				<Text style={tw`text-sm`}>
					Managing tasks has never been easier. You can change the status when you are ready to start the task
					and set the appropriate deadline. Then the task will move to Planner, but you can always send it
					back to the Backlog if necessary.
				</Text>
				<Image source={require('../../../images/backlog-5.png')} style={tw`w-full h-50`} />
				<Text style={tw`text-sm font-bold`}>Why should you try the Backlog?</Text>
				<Text style={tw`text-sm mb-5`}>
					We created the Backlog system to alleviate any unnecessary stress our users may face. So, don’t make
					rash decisions — keep essential tasks under a separate tab without deadlines until you’re ready to
					set a time frame. hubmee thought through even the smallest details so that your experience of using
					Backlog can be nothing but positive!
				</Text>
				<Text style={tw`text-sm font-bold`}>User Choice:</Text>
				<Text style={tw`text-sm`}>
					Other hubmee users purchase the Backlog together with Roadmap — the perfect combination!
				</Text>
			</View>
			<View />
		</ModalHub>
	);
};
