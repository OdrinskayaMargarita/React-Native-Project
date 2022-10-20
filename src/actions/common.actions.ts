import { IStore } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, ApiModel } from '../api/index';

type ICallback = (services: { getState: () => IStore; api: ApiModel }) => Promise<void>;
const isObject = (value: unknown): boolean => typeof value === 'object' && value !== null;
const isString = (value: unknown): boolean => typeof value === 'string';

const getErrorPayload = (err: unknown): IActionError['error'] => {
	if (isObject(err) && isString((err as Record<string, unknown>).message)) {
		const errorBase = err as Record<string, string>;
		return {
			message: errorBase.message ?? '',
			name: errorBase.name,
		};
	}
	if (err instanceof Error) {
		return {
			message: err.message,
			name: err.name,
		};
	}
	if (isString(err)) {
		return {
			message: err as string,
		};
	}
	return { message: 'Something went wrong' };
};

export const dispatchWithLoader = createAsyncThunk<
	void | IActionError,
	ICallback,
	{ state: IStore; rejectValue: IActionError }
>('common/startLoader', async (callback, { getState, rejectWithValue }) => {
	try {
		await callback({ api, getState });
	} catch (err) {
		// handle error
		console.error('dispatchWithLoader', err);
		return rejectWithValue({
			error: getErrorPayload(err),
		});
	}
});

export interface IActionError {
	error: {
		name?: string;
		message: string;
	};
}
