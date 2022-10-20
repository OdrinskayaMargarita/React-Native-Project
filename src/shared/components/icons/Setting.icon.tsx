import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const SettingIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || '21'} height={height || '21'} viewBox='0 0 21 21' fill='none'>
			<Path
				d='M10.4178 14.1169C9.48955 14.1169 8.59931 13.7482 7.94293 13.0918C7.28656 12.4354 6.91781 11.5452 6.91781 10.6169C6.91781 9.68869 7.28656 8.79845 7.94293 8.14207C8.59931 7.48569 9.48955 7.11694 10.4178 7.11694C11.3461 7.11694 12.2363 7.48569 12.8927 8.14207C13.5491 8.79845 13.9178 9.68869 13.9178 10.6169C13.9178 11.5452 13.5491 12.4354 12.8927 13.0918C12.2363 13.7482 11.3461 14.1169 10.4178 14.1169ZM17.8478 11.5869C17.8878 11.2669 17.9178 10.9469 17.9178 10.6169C17.9178 10.2869 17.8878 9.95694 17.8478 9.61694L19.9578 7.98694C20.1478 7.83694 20.1978 7.56694 20.0778 7.34694L18.0778 3.88694C17.9578 3.66694 17.6878 3.57694 17.4678 3.66694L14.9778 4.66694C14.4578 4.27694 13.9178 3.93694 13.2878 3.68694L12.9178 1.03694C12.8778 0.796943 12.6678 0.616943 12.4178 0.616943H8.41781C8.16781 0.616943 7.95781 0.796943 7.91781 1.03694L7.54781 3.68694C6.91781 3.93694 6.37781 4.27694 5.85781 4.66694L3.36781 3.66694C3.14781 3.57694 2.87781 3.66694 2.75781 3.88694L0.757808 7.34694C0.627808 7.56694 0.687808 7.83694 0.877808 7.98694L2.98781 9.61694C2.94781 9.95694 2.91781 10.2869 2.91781 10.6169C2.91781 10.9469 2.94781 11.2669 2.98781 11.5869L0.877808 13.2469C0.687808 13.3969 0.627808 13.6669 0.757808 13.8869L2.75781 17.3469C2.87781 17.5669 3.14781 17.6469 3.36781 17.5669L5.85781 16.5569C6.37781 16.9569 6.91781 17.2969 7.54781 17.5469L7.91781 20.1969C7.95781 20.4369 8.16781 20.6169 8.41781 20.6169H12.4178C12.6678 20.6169 12.8778 20.4369 12.9178 20.1969L13.2878 17.5469C13.9178 17.2869 14.4578 16.9569 14.9778 16.5569L17.4678 17.5669C17.6878 17.6469 17.9578 17.5669 18.0778 17.3469L20.0778 13.8869C20.1978 13.6669 20.1478 13.3969 19.9578 13.2469L17.8478 11.5869Z'
				fill={fillIcon || colors.greenInput}
			/>
		</Svg>
	);
};
