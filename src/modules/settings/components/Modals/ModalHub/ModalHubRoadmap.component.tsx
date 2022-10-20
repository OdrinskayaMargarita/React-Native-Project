import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { ModalHub } from './ModalHub.component';
import { tw } from 'src/lib/tailwind';

interface IProps {
	modalVisible: boolean;
	setModalVisible: any;
}

export const ModalHubRoadmapComponent: React.FC<IProps> = ({ modalVisible, setModalVisible }) => {
	return (
		<ModalHub modalVisible={modalVisible} onCloseModal={setModalVisible} title='Roadmap'>
			<View style={tw`px-[10px] pb-10 relative w-full`}>
				<Text style={tw`text-sm`}>
					This tab and its unique features will allow you to fully visualize your path to achieving goals,
					demonstrate milestones and deadlines for tasks, and help other users better understand what
					processes are going on in the team. With the Roadmap, building strategies will become easy and
					accessible, and useful system details such as To Do, In Progress, and Done statuses and various
					filters will help you easily track and manage each stage to fulfill your mission.
				</Text>
				<Image source={require('../../../images/backlog-1.png')} style={tw`w-full h-80`} />
				<Text style={tw`text-sm font-bold`}>A sophisticated system of statuses and filters:</Text>
				<Text style={tw`text-sm`}>
					Stress will be a thing of the past once your to-do list is clearly sorted! Try setting the relevant
					filters and status updates to view the most urgent tasks and track progress. With the help of
					Drag-and-drop, you can conveniently change the statuses for tasks to visually show the stages of
					their execution. In the Roadmap, you will find three types of statuses: To Do, In Progress, and
					Done, using which you will implement your plans strategically. You can also choose how you want to
					view the tabs: in Grid or List form.
				</Text>
				<Image source={require('../../../images/backlog-2.png')} style={tw`w-full h-50`} />
				<Text style={tw`text-sm font-bold`}>Drag-and-drop:</Text>
				<Text style={tw`text-sm`}>
					And now, look at this excellent feature! The most convenient technique for changing the status of a
					task is Drag-and-drop. Hold down the specific task and move it to the appropriate status column.
					Exciting, isn't it?
				</Text>
				<Image source={require('../../../images/backlog-3.png')} style={tw`w-full h-40`} />
				<Text style={tw`text-sm font-bold`}>Tasks in the Roadmap:</Text>
				<Text style={tw`text-sm`}>
					Creating tasks with the RoadMap is easy! First, add a title and description of the task. Then,
					attach any supplementary files, relevant physical address, photos, or credentials for different
					services, and set the date and time for task’s completion. Now you can add other contributors and,
					if necessary, allow them to make edits. The perfect workflow is just a few clicks away!
				</Text>
				<Image source={require('../../../images/backlog-4.png')} style={tw`w-full h-40`} />
				<Text style={tw`text-sm font-bold`}>Checklists, Comments, Notes:</Text>
				<Text style={tw`text-sm`}>
					More good news! hubmee also offers useful Сhecklist and Notes features: break down bigger tasks into
					smaller ones, mark completed stages, and add short memos to the Notes to avoid forgetting anything.
					In the Сomments section, you have an opportunity to discuss the task with other contributors!
				</Text>
				<Image source={require('../../../images/backlog-5.png')} style={tw`w-full h-50`} />
				<Text style={tw`text-sm font-bold`}>Why should you try the Roadmap?</Text>
				<Text style={tw`text-sm mb-5`}>
					We recommend that you try the RoadMap at least once! Trust us, this feature will transform your
					approach to planning and become an essential part of your scheduling routine. So, don’t hesitate and
					get the RoadMap now!
				</Text>
				<Text style={tw`text-sm font-bold`}>User Choice:</Text>
				<Text style={tw`text-sm`}>
					Other hubmee users purchase the Roadmap together with Events — the perfect combination!
				</Text>
			</View>
			<View />
		</ModalHub>
	);
};
