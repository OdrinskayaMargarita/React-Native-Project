import { IFailResult, ISuccessApiResult } from './helpers/handler.types';

export type QueryString = Record<string, string | number | boolean>;

export type ApiResult<T> = ISuccessApiResult<T> | IFailResult;

export interface IApiTransport {
	get<R = any, Q extends QueryString = QueryString>(path: string, query?: IRequestOptions<Q>): Promise<ApiResult<R>>;
	del<R = any, Q extends QueryString = QueryString>(path: string, query?: IRequestOptions<Q>): Promise<ApiResult<R>>;
	put<B = any, R = any, Q extends QueryString = QueryString>(
		path: string,
		data: B,
		query?: IRequestOptions<Q>,
	): Promise<ApiResult<R>>;
	post<B = any, R = any, Q extends QueryString = QueryString>(
		path: string,
		data: B,
		query?: IRequestOptions<Q>,
	): Promise<ApiResult<R>>;
	authorize(token: string | null): void;
}

interface IRequestOptions<Q> {
	query?: Q;
	timeout?: number;
}
