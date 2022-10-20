import { BaseError } from '../base-error.helper';

export class NotAuthorizedError extends BaseError {
	name = 'Not authorized';

	get description() {
		return `The session has expired. You need to login. ${
			this.traceId ? `Please share ${this.traceId} code to support team` : ''
		}`;
	}
}
