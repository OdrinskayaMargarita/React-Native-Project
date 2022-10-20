import { IFailResult, ISuccessApiResult } from './handler.types';

export const handleResponse = async <T>(
	response: Response,
	{ uri, method }: { uri: string; method: string },
): Promise<ISuccessApiResult<T> | IFailResult> => {
	const result = await response.json();
	if (response.ok) {
		return {
			data: result,
			success: true,
		};
	}

	return {
		data: { method, result, uri },
		statusCode: response.status,
		statusText: result.message || response.statusText,
		success: false,
	};
};
