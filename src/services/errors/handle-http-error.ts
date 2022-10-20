import { BaseError } from './base-error.helper';
import {
	BadRequestError,
	ForbiddenError,
	InternalError,
	NotAuthorizedError,
	NotFoundError,
	UnexpectedError,
} from './models';
import { IPropsBaseError } from './types';

export const handleHttpError = (params: IPropsBaseError): BaseError => {
	switch (params.statusCode) {
		case 400:
			return new BadRequestError(params);
		case 401:
			return new NotAuthorizedError(params);
		case 403:
			return new ForbiddenError(params);
		case 404:
			return new NotFoundError(params);
		case 500:
			return new InternalError(params);
		default:
			return new UnexpectedError(params);
	}
};
