import { colors } from '@lib/tailwind';

export const getColorBadge = (variantB: string) => {
	switch (variantB) {
		case 'todo':
			return {
				background: 'bg-blueStatus',
				backgroundOpacity: 'bg-blueStatus/20',
				border: 'border-blueStatus/20',
				colorIcon: colors.blueStatus,
				textColor: 'text-blueStatus',
			};
		case 'inProgress':
			return {
				background: 'bg-yellowStatus',
				backgroundOpacity: 'bg-yellowStatus/20',
				border: 'border-yellowStatus/20',
				colorIcon: colors.yellowStatus,
				textColor: 'text-yellowStatus',
			};
		case 'done':
			return {
				background: 'bg-greenInput',
				backgroundOpacity: 'bg-greenInput/20',
				border: 'border-greenInput/20',
				colorIcon: colors.greenInput,
				textColor: 'text-greenInput',
			};
		case 'backlog':
			return {
				background: 'bg-orangeStatus',
				backgroundOpacity: 'bg-orangeStatus/20',
				border: 'border-orangeStatus/20',
				colorIcon: colors.orangeStatus,
				textColor: 'text-orangeStatus',
			};
		case 'late':
			return {
				background: 'bg-red',
				backgroundOpacity: 'bg-red/20',
				border: 'border-red/20',
				colorIcon: colors.red,
				textColor: 'text-red',
			};
		case 'missed':
			return {
				background: 'bg-red',
				backgroundOpacity: 'bg-red/20',
				border: 'border-red/20',
				colorIcon: colors.red,
				textColor: 'text-red',
			};
		case 'went':
			return {
				background: 'bg-greenInput',
				backgroundOpacity: 'bg-greenInput/20',
				border: 'border-greenInput/20',
				colorIcon: colors.greenInput,
				textColor: 'text-greenInput',
			};
		case 'going':
			return {
				background: 'bg-greenInput',
				backgroundOpacity: 'bg-greenInput/20',
				border: 'border-greenInput/20',
				colorIcon: colors.greenInput,
				textColor: 'text-greenInput',
			};
		case 'notGoing':
			return {
				background: 'bg-grey',
				backgroundOpacity: 'bg-grey/20',
				border: 'border-grey/20',
				colorIcon: colors.grey,
				textColor: 'text-grey',
			};
		case 'pending':
			return {
				background: 'bg-pinkStatus',
				backgroundOpacity: 'bg-pinkStatus/20',
				border: 'border-pinkStatus/20',
				colorIcon: colors.pinkStatus,
				textColor: 'text-pinkStatus',
			};
		case 'maybe':
			return {
				background: 'bg-yellowStatus',
				backgroundOpacity: 'bg-yellowStatus/20',
				border: 'border-yellowStatus/20',
				colorIcon: colors.yellowStatus,
				textColor: 'text-yellowStatus',
			};
		case 'paid':
			return {
				background: 'bg-greenInput',
				backgroundOpacity: 'bg-greenInput/20',
				border: 'border-greenInput/20',
				colorIcon: colors.greenInput,
				textColor: 'text-greenInput',
			};
		case 'noAnswer':
			return {
				background: 'bg-grey',
				backgroundOpacity: 'bg-grey/20',
				border: 'border-grey/20',
				colorIcon: colors.grey,
				textColor: 'text-grey',
			};
		case 'scheduled':
			return {
				background: 'bg-linkStatus',
				backgroundOpacity: 'bg-linkStatus/20',
				border: 'border-linkStatus/20',
				colorIcon: colors.linkStatus,
				textColor: 'text-linkStatus',
			};
		default:
			return {
				background: 'bg-white',
				backgroundOpacity: 'bg-white',
				border: 'border-lightGrey/20',
				textColor: 'text-grey',
			};
	}
};
