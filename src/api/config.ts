import appDev from '../../app.dev';

import { IBaseApiClientOptions } from './base-api-client';

export const apiConfig: IBaseApiClientOptions = {
	debug: false,
	timeout: Number.parseInt('5000', 10),
	// uri: 'https://api.hubmee.org',
	uri: appDev.apiHost || 'https://api.hubmee.org',
};

console.log('apiConfigapiConfigapiConfigapiConfig', { apiConfig });
