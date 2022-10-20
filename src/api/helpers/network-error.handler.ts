import { IFailResult } from './handler.types';

const parseError = (error: Error): { statusCode: string; statusText: string } => {
	switch (error.name) {
		case 'AbortError':
			return {
				statusCode: 'Network Error',
				statusText:
					error.message === 'Aborted' ? 'Network request timed out' : `${error.name}: ${error.message}`,
			};
		case 'TypeError':
			return {
				statusCode: 'Network Error',
				statusText:
					error.message === 'Network request failed'
						? 'Network request failed'
						: `${error.name}: ${error.message}`,
			};
	}

	return {
		statusCode: 'Internal Error',
		statusText: `${error.name}: ${error.message}`,
	};
};

export const handleNetworkError = async (
	error: Error,
	{ uri, method }: { uri: string; method: string },
): Promise<IFailResult> => {
	const { statusCode, statusText } = parseError(error);

	return {
		data: { method, uri },
		statusCode,
		statusText,
		success: false,
	};
};
