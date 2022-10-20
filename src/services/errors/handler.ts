import { BaseError } from './base-error.helper';

let callback = (a: IProps) => a;

export const setCallback = (c: any) => {
	callback = c;
};

export const handleError = (e: BaseError) => callback(e.errorInfo);

interface IProps {
	description: string;
	title: string;
}
