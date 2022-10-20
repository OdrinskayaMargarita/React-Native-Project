import { IApiTransport } from './types';

export class NotesApiService {
	constructor(private readonly transport: IApiTransport) {}

	authorize(token: string | null): this {
		this.transport.authorize(token);
		return this;
	}

	//SETTINGS
	getUserNotes(dto: string) {
		return this.transport.get(`/connections/users/${dto}/notes`);
	}

	postNote(dto: any, userId: string) {
		return this.transport.post<any>(`/connections/users/${userId}/notes`, dto);
	}
}
