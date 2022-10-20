import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

interface IProps {
	width?: number;
	height?: number;
}
export const FacebookVectorIcon: React.FC<IProps> = ({ width, height }) => {
	return (
		<Svg width={width || '16'} height={height || '17'} viewBox='0 0 16 17' fill='none'>
			<Path
				d='M8 14.5C11.3137 14.5 14 11.8137 14 8.5C14 5.18629 11.3137 2.5 8 2.5C4.68629 2.5 2 5.18629 2 8.5C2 11.8137 4.68629 14.5 8 14.5Z'
				fill='#3B5998'
			/>
			<Path
				d='M10.25 14.5V10H11.75L12.125 8.125H10.25V7.375C10.25 6.625 10.6258 6.25 11.375 6.25H12.125V4.375C11.75 4.375 11.285 4.375 10.625 4.375C9.24688 4.375 8.375 5.45537 8.375 7V8.125H6.875V10H8.375V14.5H10.25Z'
				fill='white'
			/>
		</Svg>
	);
};
