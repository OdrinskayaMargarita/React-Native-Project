export interface IPropsBaseError {
	message?: string;
	error?: string;
	data: { traceId?: string };
	statusCode: number | string;
}
