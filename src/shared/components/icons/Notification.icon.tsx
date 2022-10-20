import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
}

export const NotificationIcon: React.FC<IProps> = ({ fillIcon }) => {
	return (
		<Svg width='26' height='26' viewBox='0 0 26 26' fill='none'>
			<Path
				d='M18.4167 9.75C18.2726 9.75 18.135 9.69258 18.0332 9.59183L15.8665 7.42517C15.6552 7.21392 15.6552 6.8705 15.8665 6.65925C16.0777 6.448 16.4212 6.448 16.6324 6.65925L18.3896 8.41642L21.7999 4.51858C21.9971 4.29217 22.3394 4.2705 22.5637 4.46767C22.789 4.66483 22.8118 5.00717 22.6146 5.2325L18.8229 9.56583C18.7254 9.6785 18.5846 9.74458 18.4351 9.75C18.4286 9.75 18.4232 9.75 18.4167 9.75Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				d='M10.8333 26C8.7425 26 7.04167 24.2992 7.04167 22.2083C7.04167 21.9093 7.28433 21.6667 7.58333 21.6667C7.88233 21.6667 8.125 21.9093 8.125 22.2083C8.125 23.7012 9.33942 24.9167 10.8333 24.9167C12.3272 24.9167 13.5417 23.7012 13.5417 22.2083C13.5417 21.9093 13.7843 21.6667 14.0833 21.6667C14.3823 21.6667 14.625 21.9093 14.625 22.2083C14.625 24.2992 12.9242 26 10.8333 26Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				d='M20.0417 22.75H1.625C0.729083 22.75 0 22.0209 0 21.125C0 20.6494 0.206917 20.1998 0.567667 19.89C0.590417 19.8705 0.615333 19.8532 0.64025 19.838C2.29992 18.3972 3.25 16.3204 3.25 14.1267V10.8333C3.25 7.267 5.78175 4.14592 9.27117 3.41358C9.55825 3.35292 9.85075 3.53925 9.9125 3.83283C9.97425 4.12533 9.78683 4.41242 9.49325 4.47417C6.50325 5.10142 4.33333 7.77617 4.33333 10.8333V14.1267C4.33333 16.6649 3.22183 19.0656 1.28375 20.7144C1.26642 20.7285 1.24908 20.7426 1.22958 20.7545C1.13642 20.8542 1.08333 20.9863 1.08333 21.125C1.08333 21.424 1.32708 21.6667 1.625 21.6667H20.0417C20.3396 21.6667 20.5833 21.424 20.5833 21.125C20.5833 20.9863 20.5303 20.8531 20.4349 20.7534C20.4176 20.7415 20.4013 20.7296 20.3851 20.7166C19.3765 19.8662 18.5878 18.8013 18.0397 17.5511C17.9205 17.277 18.0451 16.9574 18.3192 16.8372C18.5889 16.7212 18.9118 16.8415 19.032 17.1156C19.5033 18.1892 20.1738 19.1046 21.0275 19.8402C21.0524 19.8553 21.0763 19.8716 21.0979 19.89C21.4598 20.1998 21.6667 20.6494 21.6667 21.125C21.6667 22.0209 20.9376 22.75 20.0417 22.75Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				d='M18.9583 14.0833C15.0757 14.0833 11.9167 10.9243 11.9167 7.04167C11.9167 3.159 15.0757 0 18.9583 0C22.841 0 26 3.159 26 7.04167C26 10.9243 22.841 14.0833 18.9583 14.0833ZM18.9583 1.08333C15.6737 1.08333 13 3.75592 13 7.04167C13 10.3274 15.6737 13 18.9583 13C22.243 13 24.9167 10.3274 24.9167 7.04167C24.9167 3.75592 22.243 1.08333 18.9583 1.08333Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};