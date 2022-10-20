import { colors } from '@lib/tailwind';

export const getColor = (typeB: string, variantB: string) => {
	switch (variantB) {
		case 'contained': {
			switch (typeB) {
				case 'todo':
					return {
						background: 'bg-blueStatus',
						colorIcon: colors.blueStatus,
						textColor: 'text-white',
					};
				case 'inProgress':
					return {
						background: 'bg-yellowStatus',
						colorIcon: colors.yellowStatus,
						textColor: 'text-white',
					};
				case 'done':
					return {
						background: 'bg-greenInput',
						colorIcon: colors.greenInput,
						textColor: 'text-white',
					};
				case 'backlog':
					return {
						background: 'bg-orangeStatus',
						colorIcon: colors.orangeStatus,
						textColor: 'text-white',
					};
				case 'late':
					return {
						background: 'bg-red',
						colorIcon: colors.red,
						textColor: 'text-white',
					};
				case 'missed':
					return {
						background: 'bg-red',
						colorIcon: colors.red,
						textColor: 'text-white',
					};
				case 'went':
					return {
						background: 'bg-greenInput',
						colorIcon: colors.greenInput,
						textColor: 'text-white',
					};
				case 'going':
					return {
						background: 'bg-greenInput',
						colorIcon: colors.greenInput,
						textColor: 'text-white',
					};
				case 'notGoing':
					return {
						background: 'bg-grey',
						colorIcon: colors.grey,
						textColor: 'text-white',
					};
				case 'pending':
					return {
						background: 'bg-pinkStatus',
						colorIcon: colors.pinkStatus,
						textColor: 'text-white',
					};
				case 'maybe':
					return {
						background: 'bg-yellowStatus',
						colorIcon: colors.yellowStatus,
						textColor: 'text-white',
					};
				case 'paid':
					return {
						background: 'bg-greenInput',
						colorIcon: colors.greenInput,
						textColor: 'text-white',
					};
				case 'noAnswer':
					return {
						background: 'bg-grey',
						colorIcon: colors.grey,
						textColor: 'text-white',
					};
				case 'scheduled':
					return {
						background: 'bg-linkStatus',
						colorIcon: colors.linkStatus,
						textColor: 'text-white',
					};
				default:
					return {
						background: 'bg-greyBg',
						border: 'border-lightGrey',
						textColor: 'text-white',
					};
			}
		}
		case 'outlined': {
			switch (typeB) {
				case 'todo':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.blueStatus,
					};
				case 'inProgress':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.yellowStatus,
					};
				case 'done':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.greenInput,
					};
				case 'backlog':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.orangeStatus,
					};
				case 'late':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.red,
					};
				case 'missed':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.red,
					};
				case 'went':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.greenInput,
					};
				case 'going':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.greenInput,
					};
				case 'notGoing':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.grey,
					};
				case 'pending':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.pinkStatus,
					};
				case 'maybe':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.yellowStatus,
					};
				case 'paid':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.greenInput,
					};
				case 'noAnswer':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.grey,
					};
				case 'scheduled':
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.linkStatus,
					};
				default:
					return {
						background: 'bg-greyBg border border-lightGrey',
						colorIcon: colors.black,
					};
			}
		}
		default:
			return {
				background: 'bg-greyBg',
				border: 'border-lightGrey border',
			};
	}
};
