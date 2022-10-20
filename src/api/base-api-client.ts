import uuid from 'react-native-uuid';

import { Time } from '../utils/time';

import { handleNetworkError } from './helpers/network-error.handler';
import { handleResponse } from './helpers/response.handler';
import { ApiResult, IApiTransport, QueryString } from './types';

const DEFAULT_TIMEOUT = 1000;

export class BaseApiClient implements IApiTransport {
	private readonly baseUri: string;
	private readonly headers = new Headers();
	private readonly timeout: number;
	private readonly debug: boolean;

	constructor({ uri, timeout, debug }: IBaseApiClientOptions) {
		this.baseUri = uri.endsWith('/') ? uri.slice(0, -1) : uri;
		this.timeout = timeout || DEFAULT_TIMEOUT;
		this.initHeaders();
		this.debug = debug || false;
	}

	get<R = any, Q extends QueryString = QueryString>(
		path: string,
		options?: IRequestOptions<Q>,
	): Promise<ApiResult<R>> {
		const uri = this.getUrl(path, options?.query);
		const method = 'GET';
		const headers = this.headers;
		const aborter = new AbortController();
		const timeoutId = setTimeout(() => aborter.abort(), options?.timeout ?? this.timeout);
		const time = new Time();

		const promise = fetch(uri, {
			headers,
			method,
			signal: aborter.signal,
		})
			.then(res => {
				clearTimeout(timeoutId);
				return handleResponse<R>(res, { method, uri });
			})
			.catch(err => handleNetworkError(err, { method, uri }));

		return this.logRequest<R>(promise, {
			headers: this.headersToObject(),
			method,
			time,
			timeout: this.timeout,
			uri,
		});
	}

	del<R = any, Q extends QueryString = QueryString>(
		path: string,
		options?: IRequestOptions<Q>,
	): Promise<ApiResult<R>> {
		const uri = this.getUrl(path, options?.query);
		const method = 'GET';
		const headers = this.headers;
		const aborter = new AbortController();
		const timeoutId = setTimeout(() => aborter.abort(), options?.timeout ?? this.timeout);
		const time = new Time();

		const promise = fetch(uri, {
			headers,
			method,
			signal: aborter.signal,
		})
			.then(res => {
				clearTimeout(timeoutId);
				return handleResponse<R>(res, { method, uri });
			})
			.catch(err => handleNetworkError(err, { method, uri }));

		return this.logRequest<R>(promise, {
			headers: this.headersToObject(),
			method,
			time,
			timeout: this.timeout,
			uri,
		});
	}

	put<B = any, R = any, Q extends QueryString = QueryString>(
		path: string,
		data: B,
		options?: IRequestOptions<Q>,
	): Promise<ApiResult<R>> {
		const uri = this.getUrl(path, options?.query);
		const method = 'PUT';
		const headers = this.headers;
		const aborter = new AbortController();
		const timeoutId = setTimeout(() => aborter.abort(), options?.timeout ?? this.timeout);
		const time = new Time();

		const promise = fetch(uri, {
			body: JSON.stringify(data || {}),
			headers,
			method,
			signal: aborter.signal,
		})
			.then(res => {
				clearTimeout(timeoutId);
				return handleResponse<R>(res, { method, uri });
			})
			.catch(err => handleNetworkError(err, { method, uri }));

		return this.logRequest<R>(promise, {
			data,
			headers: this.headersToObject(),
			method,
			time,
			timeout: this.timeout,
			uri,
		});
	}

	post<B = any, R = any, Q extends QueryString = QueryString>(
		path: string,
		data: B,
		options?: IRequestOptions<Q>,
	): Promise<ApiResult<R>> {
		const uri = this.getUrl(path, options?.query);
		const method = 'POST';
		const headers = this.headers;
		const aborter = new AbortController();
		const timeoutId = setTimeout(() => aborter.abort(), options?.timeout ?? this.timeout);
		const time = new Time();

		const promise = fetch(uri, {
			body: JSON.stringify(data || {}),
			headers,
			method,
			signal: aborter.signal,
		})
			.then(res => {
				clearTimeout(timeoutId);
				return handleResponse<R>(res, { method, uri });
			})
			.catch(err => handleNetworkError(err, { method, uri }));

		return this.logRequest<R>(promise, {
			data,
			headers: this.headersToObject(),
			method,
			time,
			timeout: this.timeout,
			uri,
		});
	}

	private getUrl(path: string, query?: QueryString): string {
		const safePath = path.startsWith('/') ? path.slice(1) : path;
		return `${this.baseUri}/${safePath}${this.qs(query)}`;
	}

	authorize(token: string | null) {
		if (!token) return;
		this.headers.set('Authorization', `Bearer ${token}`);
	}

	unauthorize() {
		this.headers.delete('Authorization');
	}

	// private handleApiError(result: IFailResult): never {
	// 	const err = handleHttpError(result);
	// 	handleError(err);
	// 	throw err;
	// }

	private initHeaders() {
		Object.entries({
			Accept: 'application/json',
			'Content-Type': 'application/json',
		}).forEach(([key, value]) => this.headers.append(key, value));
	}

	private qs(query?: QueryString): string {
		if (typeof query !== 'object') return '';
		return '?'.concat(
			Object.entries(query)
				.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
				.join('&'),
		);
	}

	private headersToObject() {
		const result: Record<string, string> = {};
		this.headers.forEach((value: string, key: string) => {
			result[key] = value;
		});
		return result;
	}

	private logRequest<R>(
		promise: Promise<ApiResult<R>>,
		{ time, ...options }: IRequestLogOptions,
	): Promise<ApiResult<R>> {
		if (!this.debug) return promise;

		const params = {
			id: uuid.v4(),
			timestamp: time.start.toISOString(),
			...options,
		};

		console.log('API request', JSON.stringify(params, null, 2));

		return promise.then((result: any) => {
			console.log(
				'API response',
				JSON.stringify(
					{
						...params,
						data: undefined,
						elapsed: time.getMilliseconds(),
						headers: undefined,
						result,
						timestamp: new Date().toISOString(),
					},
					null,
					2,
				),
			);
			return result;
		});
	}
}

export interface IBaseApiClientOptions {
	uri: string;
	timeout?: number;
	debug?: boolean;
}

interface IRequestOptions<Q> {
	query?: Q;
	timeout?: number;
}

interface IRequestLogOptions {
	uri: string;
	method: string;
	headers: Record<string, unknown>;
	timeout: number;
	data?: any;
	time: Time;
}
