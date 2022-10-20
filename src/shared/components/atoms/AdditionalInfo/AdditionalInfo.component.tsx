import * as React from 'react';
import { colors, tw } from '@lib/tailwind';
import { View, Text } from 'react-native';
import { DocumentIcon } from '../../icons/Document.icon';
import { CameraIcon } from '../../icons/Camera.icon';
import { CommentIcon } from '../../icons/Comment.icon';

interface IProps {
	photoCount?: number;
	commentCount?: number;
	documentCount?: number;
	hasUnreadDocuments?: boolean;
	hasUnreadPhotos?: boolean;
	isUnreadComments?: boolean;
}

export const AdditionalInfo: React.FC<IProps> = ({
	photoCount,
	commentCount,
	documentCount,
	hasUnreadDocuments,
	hasUnreadPhotos,
	isUnreadComments,
}) => {
	return (
		<View style={tw`flex flex-row`}>
			<View style={tw`flex flex-row mr-2 items-center`}>
				<DocumentIcon fillIcon={hasUnreadDocuments ? colors.greenInput : colors.grey} />
				<Text style={tw`ml-1`}>{documentCount || 0}</Text>
			</View>
			<View style={tw`flex flex-row mr-2 items-center`}>
				<CameraIcon fillIcon={hasUnreadPhotos ? colors.greenInput : colors.grey} />
				<Text style={tw`ml-1`}>{photoCount || 0}</Text>
			</View>
			<View style={tw`flex flex-row mr-2 items-center`}>
				<CommentIcon fillIcon={isUnreadComments ? colors.greenInput : colors.grey} />
				<Text style={tw`ml-1`}>{commentCount || 0}</Text>
			</View>
		</View>
	);
};
