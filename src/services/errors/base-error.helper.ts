import { IPropsBaseError } from './types';

export abstract class BaseError extends Error {
	params: IPropsBaseError;
	statusCode: number | string;
	traceId?: string;

	constructor(params: IPropsBaseError) {
		super();
		this.params = params;
		this.statusCode = params.statusCode;
		this.message = params.message ?? 'Something went wrong';
		this.traceId = params.data.traceId?.substring(0, 5).toUpperCase();
	}

	abstract get description(): string;

	get errorInfo() {
		return {
			description: this.description,
			title: this.name,
		};
	}
}
