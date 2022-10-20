import { BaseError } from '../base-error.helper';

export class BadRequestError extends BaseError {
	name = 'Bad Request';

	get description() {
		return `${this.message} `;
	}
}
