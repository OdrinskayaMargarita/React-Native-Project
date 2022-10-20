export enum RelationshipStatus {
	SINGLE = 'single',
	IN_A_RELATIONSHIP = 'in_a_relationship',
	ENGAGED = 'engaged',
	MARRIED = 'married',
	IN_A_CIVIL_UNION = 'in_a_civil_union',
	IN_AN_OPEN_RELATIONSHIP = 'in_an_open_relationship',
	ITS_COMPLICATED = "it's_complicated",
	SEPARATED = 'separated',
	DIVORCED = 'divorced',
	WIDOWED = 'widowed',
}
export const relationshipStatusLabel: Record<RelationshipStatus, string> = {
	[RelationshipStatus.SINGLE]: 'Single',
	[RelationshipStatus.IN_A_RELATIONSHIP]: 'In a relationship',
	[RelationshipStatus.ENGAGED]: 'Engaged',
	[RelationshipStatus.MARRIED]: 'Married',
	[RelationshipStatus.IN_A_CIVIL_UNION]: 'In a civil union',
	[RelationshipStatus.IN_AN_OPEN_RELATIONSHIP]: 'In an open relationship',
	[RelationshipStatus.ITS_COMPLICATED]: "It's complicated",
	[RelationshipStatus.SEPARATED]: 'Separated',
	[RelationshipStatus.DIVORCED]: 'Divorced',
	[RelationshipStatus.WIDOWED]: 'Widowed',
};

export enum GenderStatus {
	MALE = 'male',
	FEMALE = 'female',
	UNSPECIFIED = 'unspecified',
	UNDISCLOSED = 'undisclosed',
}
export const genderStatusLabel: Record<GenderStatus, string> = {
	[GenderStatus.MALE]: 'Male',
	[GenderStatus.FEMALE]: 'Female',
	[GenderStatus.UNSPECIFIED]: 'Unspecified',
	[GenderStatus.UNDISCLOSED]: 'Undisclosed',
};
