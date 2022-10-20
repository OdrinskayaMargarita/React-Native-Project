import auth from 'src/modules/auth/locales/en/auth';
import feedback from 'src/modules/feedback/locales/en/feedback';

import general from './en/general';
import profile from './en/profile';

const translation = {
	...general,
	...auth,
	...profile,
	...feedback,
};

export default translation;
