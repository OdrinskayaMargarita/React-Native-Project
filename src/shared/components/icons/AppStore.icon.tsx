import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const AppStoreIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='35' height='42' viewBox='0 0 35 42' fill='none'>
			<Path
				d='M28.9357 22.1407C28.9163 18.8585 30.412 16.3849 33.4324 14.561C31.7431 12.1547 29.1874 10.8313 25.8185 10.5762C22.6287 10.326 19.1388 12.4242 17.861 12.4242C16.5105 12.4242 13.4224 10.6629 10.9925 10.6629C5.97791 10.7399 0.648682 14.638 0.648682 22.569C0.648682 24.9127 1.07947 27.3334 1.94106 29.8262C3.09306 33.1083 7.24608 41.15 11.5782 41.0201C13.8435 40.9672 15.4456 39.4223 18.3934 39.4223C21.2541 39.4223 22.7352 41.0201 25.2619 41.0201C29.6327 40.9575 33.3888 33.6474 34.4827 30.3556C28.6211 27.6077 28.9357 22.3091 28.9357 22.1407ZM23.8485 7.46254C26.3026 4.56541 26.0799 1.92816 26.0073 0.980103C23.8388 1.10523 21.3315 2.44792 19.9036 4.0986C18.3305 5.8696 17.406 8.05929 17.6044 10.5281C19.9472 10.7062 22.0866 9.50785 23.8485 7.46254Z'
				fill={fillIcon || colors.white}
			/>
		</Svg>
	);
};