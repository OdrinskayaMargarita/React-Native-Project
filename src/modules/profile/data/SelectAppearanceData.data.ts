import {
	bodyArtTypeStatus,
	bodyArtTypeStatusLabel,
	bodyTypeStatus,
	bodyTypeStatusLabel,
	eyesColorStatus,
	eyesColorStatusLabel,
	eyesWearStatus,
	eyesWearStatusLabel,
	hairColorStatus,
	hairColorStatusLabel,
	hairLengthStatus,
	hairLengthStatusLabel,
	hairTypeStatus,
	hairTypeStatusLabel,
} from '../data/SelectAppearanceDataEnums.enums';

export const selectBodyType = [
	{
		label: bodyTypeStatusLabel[bodyTypeStatus.PETTIE],
		value: bodyTypeStatus.PETTIE,
	},
	{
		label: bodyTypeStatusLabel[bodyTypeStatus.SLIM],
		value: bodyTypeStatus.SLIM,
	},
	{
		label: bodyTypeStatusLabel[bodyTypeStatus.ATHLETIC],
		value: bodyTypeStatus.ATHLETIC,
	},
	{
		label: bodyTypeStatusLabel[bodyTypeStatus.AVERAGE],
		value: bodyTypeStatus.AVERAGE,
	},
	{
		label: bodyTypeStatusLabel[bodyTypeStatus.FEW_EXTRA_POUNDS],
		value: bodyTypeStatus.FEW_EXTRA_POUNDS,
	},
	{
		label: bodyTypeStatusLabel[bodyTypeStatus.FULL_FIGURED],
		value: bodyTypeStatus.FULL_FIGURED,
	},
	{
		label: bodyTypeStatusLabel[bodyTypeStatus.LARGE_AND_LOVELY],
		value: bodyTypeStatus.LARGE_AND_LOVELY,
	},
	{
		label: bodyTypeStatusLabel[bodyTypeStatus.OTHER],
		value: bodyTypeStatus.OTHER,
	},
];

export const selectBodyArtType = [
	{
		label: bodyArtTypeStatusLabel[bodyArtTypeStatus.BRANDING],
		value: bodyArtTypeStatus.BRANDING,
	},
	{
		label: bodyArtTypeStatusLabel[bodyArtTypeStatus.EARINGS],
		value: bodyArtTypeStatus.EARINGS,
	},
	{
		label: bodyArtTypeStatusLabel[bodyArtTypeStatus.PIERCING],
		value: bodyArtTypeStatus.PIERCING,
	},
	{
		label: bodyArtTypeStatusLabel[bodyArtTypeStatus.TATTOO],
		value: bodyArtTypeStatus.TATTOO,
	},
	{
		label: bodyArtTypeStatusLabel[bodyArtTypeStatus.PERMANENT_MAKEUP],
		value: bodyArtTypeStatus.PERMANENT_MAKEUP,
	},
	{
		label: bodyArtTypeStatusLabel[bodyArtTypeStatus.OTHER],
		value: bodyArtTypeStatus.OTHER,
	},
];

export const selectDataBustCup = [
	{
		label: 'A',
		value: 'A',
	},
	{
		label: 'B',
		value: 'B',
	},
	{
		label: 'C',
		value: 'C',
	},
	{
		label: 'D',
		value: 'D',
	},
	{
		label: 'E',
		value: 'E',
	},
];

export const selectDataBust = [
	{
		label: '1',
		value: '1',
	},
	{
		label: '2',
		value: '2',
	},
	{
		label: '3',
		value: '3',
	},
	{
		label: '4',
		value: '4',
	},
	{
		label: '5',
		value: '5',
	},
];

export const selectDataShoes = [
	{
		label: '4',
		value: '4',
	},
	{
		label: '4.5',
		value: '4.5',
	},
	{
		label: '5',
		value: '5',
	},
	{
		label: '5.5',
		value: '5.5',
	},
	{
		label: '6',
		value: '6',
	},
	{
		label: '6.5',
		value: '6.5',
	},
	{
		label: '7',
		value: '7',
	},
	{
		label: '7.5',
		value: '7.5',
	},
	{
		label: '8',
		value: '8',
	},
	{
		label: '8.5',
		value: '8.5',
	},
	{
		label: '9',
		value: '9',
	},
	{
		label: '9.5',
		value: '9.5',
	},
	{
		label: '10',
		value: '10',
	},
	{
		label: '10.5',
		value: '10.5',
	},
	{
		label: '11',
		value: '11',
	},
	{
		label: '11.5',
		value: '11.5',
	},
	{
		label: '12',
		value: '12',
	},
	{
		label: '12.5',
		value: '12.5',
	},

	{
		label: '13',
		value: '13',
	},
	{
		label: '13.5',
		value: '13.5',
	},
	{
		label: '14.5',
		value: '14.5',
	},
	{
		label: '15',
		value: '15',
	},
	{
		label: '15.5',
		value: '15.5',
	},
	{
		label: '16',
		value: '16',
	},
];

//HAIR
export const selectDataColorHair = [
	{
		label: hairColorStatusLabel[hairColorStatus.WHITE],
		value: hairColorStatus.WHITE,
	},
	{
		label: hairColorStatusLabel[hairColorStatus.YELLOW],
		value: hairColorStatus.YELLOW,
	},
	{
		label: hairColorStatusLabel[hairColorStatus.BROWN],
		value: hairColorStatus.BROWN,
	},
	{
		label: hairColorStatusLabel[hairColorStatus.BLACK],
		value: hairColorStatus.BLACK,
	},
	{
		label: hairColorStatusLabel[hairColorStatus.GRAY],
		value: hairColorStatus.GRAY,
	},
	{
		label: hairColorStatusLabel[hairColorStatus.SILVER],
		value: hairColorStatus.SILVER,
	},
	{
		label: hairColorStatusLabel[hairColorStatus.OTHER],
		value: hairColorStatus.OTHER,
	},
];

export const selectDataTypeHair = [
	{
		label: hairTypeStatusLabel[hairTypeStatus.STRAIGHT],
		value: hairTypeStatus.STRAIGHT,
	},
	{
		label: hairTypeStatusLabel[hairTypeStatus.WAVY],
		value: hairTypeStatus.WAVY,
	},
	{
		label: hairTypeStatusLabel[hairTypeStatus.CURLY],
		value: hairTypeStatus.CURLY,
	},
	{
		label: hairTypeStatusLabel[hairTypeStatus.OTHER],
		value: hairTypeStatus.OTHER,
	},
];

export const selectDataLengthHair = [
	{
		label: hairLengthStatusLabel[hairLengthStatus.BALD],
		value: hairLengthStatus.BALD,
	},
	{
		label: hairLengthStatusLabel[hairLengthStatus.BALD_ON_TOP],
		value: hairLengthStatus.BALD_ON_TOP,
	},
	{
		label: hairLengthStatusLabel[hairLengthStatus.SHAVED],
		value: hairLengthStatus.SHAVED,
	},
	{
		label: hairLengthStatusLabel[hairLengthStatus.SHORT],
		value: hairLengthStatus.SHORT,
	},
	{
		label: hairLengthStatusLabel[hairLengthStatus.MEDIUM],
		value: hairLengthStatus.MEDIUM,
	},
	{
		label: hairLengthStatusLabel[hairLengthStatus.LONG],
		value: hairLengthStatus.LONG,
	},
	{
		label: hairLengthStatusLabel[hairLengthStatus.OTHER],
		value: hairLengthStatus.OTHER,
	},
];

//EYE
export const selectDataEyeColor = [
	{
		label: eyesColorStatusLabel[eyesColorStatus.BLUE],
		value: eyesColorStatus.BLUE,
	},
	{
		label: eyesColorStatusLabel[eyesColorStatus.BLACK],
		value: eyesColorStatus.BLACK,
	},
	{
		label: eyesColorStatusLabel[eyesColorStatus.GRAY],
		value: eyesColorStatus.GRAY,
	},
	{
		label: eyesColorStatusLabel[eyesColorStatus.BROWN],
		value: eyesColorStatus.BROWN,
	},
	{
		label: eyesColorStatusLabel[eyesColorStatus.HAZEL],
		value: eyesColorStatus.HAZEL,
	},
	{
		label: eyesColorStatusLabel[eyesColorStatus.GREEN],
		value: eyesColorStatus.GREEN,
	},
	{
		label: eyesColorStatusLabel[eyesColorStatus.CHANGES_FREQUENTLY],
		value: eyesColorStatus.CHANGES_FREQUENTLY,
	},
	{
		label: eyesColorStatusLabel[eyesColorStatus.OTHER],
		value: eyesColorStatus.OTHER,
	},
];

export const selectDataEyeWear = [
	{
		label: eyesWearStatusLabel[eyesWearStatus.GLASSES],
		value: eyesWearStatus.GLASSES,
	},
	{
		label: eyesWearStatusLabel[eyesWearStatus.CONTACT_LENSES],
		value: eyesWearStatus.CONTACT_LENSES,
	},
	{
		label: eyesWearStatusLabel[eyesWearStatus.CONTACT_LENSES_GLASSES],
		value: eyesWearStatus.CONTACT_LENSES_GLASSES,
	},
	{
		label: eyesWearStatusLabel[eyesWearStatus.OTHER],
		value: eyesWearStatus.OTHER,
	},
];
