import { BaseError } from '../base-error.helper';

export class InternalError extends BaseError {
	name = 'Internal server error';

	get description() {
		return `Whoops... Something went wrong on the server side. ${
			this.traceId ? `Please share ${this.traceId} code to support team` : ''
		}`;
	}
}
