interface IBaseApiResult {
	success: boolean;
	data: any;
}

export interface ISuccessApiResult<T> extends IBaseApiResult {
	success: true;
	data: T;
}

export interface IFailResult extends IBaseApiResult {
	success: false;
	data: any;
	statusCode: number | string;
	statusText: string;
}
