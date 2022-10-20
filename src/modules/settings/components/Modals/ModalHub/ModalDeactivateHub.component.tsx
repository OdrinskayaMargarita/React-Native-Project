import * as React from 'react';
import { View, Text, Modal } from 'react-native';
import { tw } from 'src/lib/tailwind';
import { DefaultButton } from 'src/shared/components/atoms/buttons/Button/Button.component';

interface IProps {
	modalDeactivate: boolean;
	setModalDeactivate: any;
}

export const ModalHubDeactivateComponent: React.FC<IProps> = ({ modalDeactivate, setModalDeactivate }) => {
	return (
		<Modal visible={modalDeactivate} style={tw`z-100 relative`}>
			<View style={tw`w-full h-full bg-inherit items-center justify-center`}>
				<View style={tw`w-full h-full bg-grey opacity-5 absolute top-0 left-0`} />
				<View style={tw`p-4 bg-white w-11/12 rounded`}>
					<Text style={tw`font-bold text-xl mb-4`}>Are you sure you want to deactivate this hub?</Text>
					<Text style={tw`text-sm`}>
						You will lose the access to this hub from the <Text style={tw`font-bold`}>09.14.2022</Text>
					</Text>
					<View style={tw`p-2 flex items-center flex-row`}>
						<DefaultButton title='No' variant='outlined' style='w-4/12' />
						<DefaultButton title='Yes' variant='contained' style='w-4/12' />
					</View>
				</View>
			</View>
		</Modal>
	);
};
