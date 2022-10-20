import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { ModalHub } from './ModalHub.component';
import { tw } from 'src/lib/tailwind';

interface IProps {
	modalVisible: boolean;
	setModalVisible: any;
}

export const ModalHubGarageComponent: React.FC<IProps> = ({ modalVisible, setModalVisible }) => {
	return (
		<ModalHub modalVisible={modalVisible} onCloseModal={setModalVisible} title='Garage'>
			<View style={tw`px-[10px] pb-30 relative w-full`}>
				<Text style={tw`text-sm`}>
					No more confusion about details. Now hubmee will remind you of upcoming payments, and trusted people
					will be able to easily access any information about your vehicle, skipping the paperwork hassle.
					This is one of the most unique and exciting features of hubmee, created with our users in mind. Now
					you don’t have to worry about getting a fine if you miss any important updates, and all your most
					valuable data will always be in quick and easy access, securely and stored under one tab.
				</Text>
				<Image source={require('../../../images/backlog-1.png')} style={tw`w-full h-80`} />
				<Text style={tw`text-sm font-bold`}>All information about your vehicle in the Garage:</Text>
				<Text style={tw`text-sm`}>
					First step is to fill out general information about your vehicle. hubmee lets you add even the
					smallest details — from the model and mileage of your vehicle to exterior color. Your essential data
					will be safely stored in one place and you can easily access it when needed.
				</Text>
				<Image source={require('../../../images/backlog-2.png')} style={tw`w-full h-50`} />
				<Text style={tw`text-sm font-bold`}>Information sharing:</Text>
				<Text style={tw`text-sm`}>
					Imagine: A friend called you and asked you to provide some information about his vehicle. No need to
					search for the right sheet of paper in the stack of documents. Just go to hubmee! Other system users
					will be able to share relevant information about their vehicles with you. You will see it on the
					main page. You can also share your vehicle details with friends and grant editing rights if
					necessary.
				</Text>
				<Image source={require('../../../images/backlog-3.png')} style={tw`w-full h-40`} />
				<Text style={tw`text-sm font-bold`}>Insurance/Payments:</Text>
				<Text style={tw`text-sm mb-3`}>
					We know how inconvenient it can be to carry all the documents with you and try to memorize all the
					numbers and insurance data, so now they are stored in hubmee! You only need to enter the vehicle’s
					insurance data once and you can use this information until the end of the insurance period.
				</Text>
				<Text style={tw`text-sm`}>
					Also, you can now conveniently keep track of all payments, and hubmee will remind you when the next
					one is due. Furthermore, the system will calculate the insurance payment owed by each involved party
					in a particular situation, and we will remind you when the insurance policy period is about to
					expire. hubmee will save hours of your time!
				</Text>
				<Image source={require('../../../images/backlog-4.png')} style={tw`w-full h-40`} />
				<Text style={tw`text-sm font-bold`}>Stickers/License Plates Renewal:</Text>
				<Text style={tw`text-sm`}>
					Other exciting features are Sticker Control and License Plates Renewal. In case you need to buy a
					special sticker in order to park in a specific area near your house, it is crucial to regularly
					update these stickers and license plates to avoid getting fined. Let hubmee take over! You will
					receive a notification when it's time to update any of these items.
				</Text>
				<Image source={require('../../../images/backlog-5.png')} style={tw`w-full h-50`} />
				<Text style={tw`text-sm font-bold`}>Why should you try the Garage?</Text>
				<Text style={tw`text-sm mb-5`}>
					Now you’re familiar with the main features of Garage, but rest assured, there are many more exciting
					tools that will please you! Give Garage a try and see how convenient it is. It’s time to put away
					all the paper documents about your vehicle in a box and appreciate a stress-free life! hubmee is
					always accessible and all your data is securely protected. So, enjoy Garage to the fullest!
				</Text>
				<Text style={tw`text-sm font-bold`}>User Choice:</Text>
				<Text style={tw`text-sm`}>
					Other hubmee users purchase Garage together with the Roadmap — the perfect combination!
				</Text>
			</View>
		</ModalHub>
	);
};
