import React from 'react';

import { ValidationValueMessage, ValidationRule } from 'react-hook-form';

type RuleType = Partial<{
	required: string | boolean | ValidationValueMessage<boolean>;
	min: ValidationRule<React.ReactText>;
	max: ValidationRule<React.ReactText>;
	maxLength: ValidationRule<React.ReactText>;
	minLength: ValidationRule<React.ReactText>;
	pattern: ValidationRule<RegExp>;
	// validate: Validate | Record<string, Validate>;
}>;

export const getDefaultTextRules = (fieldName: string): RuleType => ({
	maxLength: {
		message: `${fieldName} length must be 2 to 26 characters`,
		value: 26,
	},
	minLength: {
		message: `${fieldName} length must be 2 to 26 characters`,
		value: 2,
	},
	required: {
		message: `${fieldName} is required field`,
		value: true,
	},
});
