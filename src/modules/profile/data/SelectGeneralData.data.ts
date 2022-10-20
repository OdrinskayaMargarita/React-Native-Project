import {
	GenderStatus,
	genderStatusLabel,
	RelationshipStatus,
	relationshipStatusLabel,
} from './SelectGeneralDataEnums.enums';

export const selectDataGender = [
	{
		label: genderStatusLabel[GenderStatus.MALE],
		value: GenderStatus.MALE,
	},
	{
		label: genderStatusLabel[GenderStatus.FEMALE],
		value: GenderStatus.FEMALE,
	},
	{
		label: genderStatusLabel[GenderStatus.UNSPECIFIED],
		value: GenderStatus.UNSPECIFIED,
	},
	{
		label: genderStatusLabel[GenderStatus.UNDISCLOSED],
		value: GenderStatus.UNDISCLOSED,
	},
];

export const selectDataRelationship = [
	{
		label: relationshipStatusLabel[RelationshipStatus.SINGLE],
		value: RelationshipStatus.SINGLE,
	},
	{
		label: 'In a relationship',
		value: RelationshipStatus.IN_A_RELATIONSHIP,
	},
	{
		label: relationshipStatusLabel[RelationshipStatus.ENGAGED],
		value: RelationshipStatus.ENGAGED,
	},
	{
		label: relationshipStatusLabel[RelationshipStatus.IN_A_CIVIL_UNION],
		value: RelationshipStatus.IN_A_CIVIL_UNION,
	},
	{
		label: relationshipStatusLabel[RelationshipStatus.IN_AN_OPEN_RELATIONSHIP],
		value: RelationshipStatus.IN_AN_OPEN_RELATIONSHIP,
	},
	{
		label: relationshipStatusLabel[RelationshipStatus.ITS_COMPLICATED],
		value: RelationshipStatus.ITS_COMPLICATED,
	},
	{
		label: relationshipStatusLabel[RelationshipStatus.SEPARATED],
		value: RelationshipStatus.SEPARATED,
	},
	{
		label: relationshipStatusLabel[RelationshipStatus.DIVORCED],
		value: RelationshipStatus.DIVORCED,
	},
	{
		label: relationshipStatusLabel[RelationshipStatus.WIDOWED],
		value: RelationshipStatus.WIDOWED,
	},
];
