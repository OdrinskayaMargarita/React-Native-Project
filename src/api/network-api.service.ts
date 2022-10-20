import { IApiTransport } from './types';

export class NetworkApiService {
	constructor(private readonly transport: IApiTransport) {}

	authorize(token: string | null): this {
		this.transport.authorize(token);
		return this;
	}

	getConnectionsAll() {
		return this.transport.get(`/connections/all`);
	}
	getConnectionsFriends() {
		return this.transport.get(`/connections/friends`);
	}
	getConnectionsContacts() {
		return this.transport.get(`/connections/contacts`);
	}
	getConnectionsFutureOutgoing() {
		return this.transport.get(`/connections/future_outgoing`);
	}
	getConnectionsOutgoing() {
		return this.transport.get(`/connections/outgoing`);
	}
	getConnectionsIncoming() {
		return this.transport.get(`/connections/incoming`);
	}
	getConnectionsIncomingNotCanceled() {
		return this.transport.get(`/connections/incoming-not-canceled`);
	}
	getConnectionsIncomingCanceled() {
		return this.transport.get(`/connections/incoming-canceled`);
	}
	getConnectionsFutureRequests() {
		return this.transport.get(`/connections/future-requests`);
	}
}
