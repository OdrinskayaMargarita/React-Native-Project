import { BaseError } from '../base-error.helper';

export class UnexpectedError extends BaseError {
	name = 'Unexpected error';

	get description() {
		return `Whoops... Something went wrong. ${
			this.traceId ? `Please share ${this.traceId} code to support team` : ''
		}`;
	}
}
