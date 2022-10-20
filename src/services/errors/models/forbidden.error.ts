import { BaseError } from '../base-error.helper';

export class ForbiddenError extends BaseError {
	name = 'Forbidden';

	get description() {
		return `You don't have permission to access / on this server. ${
			this.traceId ? `Please share ${this.traceId} code to support team` : ''
		}`;
	}
}
