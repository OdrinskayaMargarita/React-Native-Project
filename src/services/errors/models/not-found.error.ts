import { BaseError } from '../base-error.helper';

export class NotFoundError extends BaseError {
	name = 'Not found';

	get description() {
		return `${this.message}. The server cannot find the requested resource. ${
			this.traceId ? `Please share ${this.traceId} code to support team` : ''
		}`;
	}
}
