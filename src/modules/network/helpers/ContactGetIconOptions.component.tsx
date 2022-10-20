import * as React from 'react';

import { CheckCircleIcon } from 'native-base';
import { CheckContainedIcon } from 'src/shared/components/icons/CheckContained.icon';
import { CommentIcon } from 'src/shared/components/icons/Comment.icon';
import { MessageResendIcon } from 'src/shared/components/icons/MessageResend.icon';
import { PlusIcon } from 'src/shared/components/icons/Plus.icon';

import { colors } from '@lib/tailwind';

export const getColor = (type: string) => {
	switch (type) {
		case 'connected':
			return {
				bgButton: 'bg-blueBg',
				colorIcon: colors.greenInput,
				iconButton: <CommentIcon fillIcon={colors.white} width={18} height={18} />,
				textButton: 'Chat',
			};
		case 'pending':
			return {
				bgButton: 'bg-greenInput',
				colorIcon: colors.purple,
				iconButton: <CheckCircleIcon color={colors.white} />,
				textButton: 'Confirm',
			};
		case 'sentRequest':
			return {
				bgButton: 'bg-greenInput',
				colorIcon: colors.blueStatus,
				iconButton: <MessageResendIcon />,
				textButton: 'Resend',
			};
		case 'futureSentRequest':
			return {
				bgButton: 'bg-greenInput',
				colorIcon: colors.yellowStatus,
				iconButton: <CheckCircleIcon color={colors.white} />,
				textButton: 'Confirm',
			};
		case 'contacts':
			return {
				bgButton: 'bg-white',
				colorIcon: colors.grey,
				iconButton: <PlusIcon width={20} height={20} />,
				textButton: 'Invite',
			};
		default:
			return {
				bgButton: 'bg-greenInput',
				colorIcon: colors.greenInput,
				iconButton: <CheckContainedIcon fillIcon={colors.white} width={18} height={18} />,
				textButton: 'Chat',
			};
	}
};
