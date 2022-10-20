import * as React from 'react';
import { Icon } from 'native-base';
import { Path } from 'react-native-svg';

import { LOGO_SIZES } from './Logo.constants';
import { LogoSize } from './Logo.models';

interface Props {
	size?: LogoSize;
}

export const LogoComponent: React.FC<Props> = ({ size = LogoSize.xl }) => {
	return (
		<Icon size={LOGO_SIZES[size]} viewBox='0 0 144 138'>
			<Path
				fill='#5DCB42'
				d='M57.6439 0.215379C59.1523 -0.335257 60.9627 0.199401 61.9346 1.48258C62.7731 2.53346 62.9919 4.03664 62.492 5.28541C62.2671 5.82498 61.9651 6.32891 61.6338 6.80703C63.223 10.8225 63.8904 15.2055 63.5041 19.5134C63.1276 23.9382 61.7402 28.256 59.5912 32.1301C58.1035 34.7739 56.2992 37.3009 53.9204 39.2085C55.8359 43.5226 57.1023 48.1133 57.8517 52.7728C58.3553 56.0914 58.6108 59.4862 58.1573 62.8268C57.9189 64.4038 57.5155 66.0151 56.584 67.3339C55.3054 69.0522 53.127 69.9433 51.0257 69.9114C48.543 69.8954 46.1837 68.9477 44.0188 67.801C40.3198 65.7804 37.0315 63.0936 33.9387 60.2433C28.477 55.1511 23.5678 49.4838 19.0998 43.4968C17.9532 43.8508 16.6489 43.6689 15.6758 42.9536C14.281 41.9826 13.6869 40.0357 14.3079 38.4465C14.891 36.8019 16.677 35.7093 18.3994 35.9625C20.123 36.1505 21.5862 37.6488 21.7427 39.3855C21.8723 40.4818 21.4872 41.6065 20.7574 42.425C24.7009 47.7225 29.1579 52.6253 33.9779 57.1251C37.2796 60.1671 40.7464 63.0862 44.6728 65.285C46.4954 66.2708 48.4427 67.1815 50.5416 67.3032C51.7457 67.4065 53.0023 67.0611 53.9179 66.2511C54.8348 65.4866 55.2259 64.3054 55.5486 63.1956C56.1415 60.88 56.1721 58.4586 56.0254 56.0852C55.6574 50.821 54.1722 45.6871 52.0965 40.8592C48.1934 31.829 42.0519 23.9087 34.8653 17.2765C33.8238 17.9513 32.4633 18.1037 31.313 17.6268C29.7617 17.027 28.7288 15.3321 28.9134 13.6691C29.0405 12.0553 30.2874 10.6172 31.8582 10.2657C33.0928 9.96335 34.4644 10.3272 35.3824 11.2121C36.6623 12.4019 37.018 14.4963 36.1342 16.0216C42.6179 21.8782 48.2899 28.7022 52.5146 36.3853C54.2235 35.1967 55.5841 33.5792 56.7564 31.8696C58.6988 29.0021 60.1364 25.7855 60.9517 22.4129C62.1509 17.6169 61.9101 12.4093 59.942 7.85176C58.9066 8.10864 57.771 7.8997 56.9019 7.27654C55.9019 6.52557 55.1135 5.38865 55.0633 4.10301C54.9338 2.41669 56.0498 0.74512 57.6439 0.215379Z'
			/>
			<Path
				d='M84.7364 2.35279C85.4808 0.839767 87.279 -0.0390379 88.9219 0.323546C90.6284 0.636966 91.9828 2.23848 92.011 3.9838C92.1026 5.70945 90.89 7.38348 89.2348 7.83825C88.3009 8.11725 87.2839 7.99557 86.4062 7.58997C80.3845 15.3333 75.5951 24.0009 71.8985 33.0888C70.1346 37.4546 68.5686 41.9064 67.3096 46.4467C66.114 50.8985 65.3549 55.456 64.7816 60.027C66.9819 60.4043 69.2324 60.0982 71.3814 59.5673C76.3078 58.321 80.9713 56.1344 85.2216 53.353C88.6456 51.1381 91.7384 48.4612 94.7797 45.7522C98.7734 42.1596 102.546 38.2953 105.822 34.0242C105.043 33.063 104.729 31.7344 105.059 30.5323C105.484 28.8128 107.201 27.5419 108.962 27.6599C110.764 27.7091 112.383 29.1987 112.595 30.9969C112.85 32.6439 111.902 34.372 110.39 35.0456C109.364 35.531 108.14 35.5028 107.115 35.0283C101.911 42.3181 95.996 49.1875 88.9195 54.7037C89.1261 55.5678 89.7458 56.2426 90.3925 56.8141C91.7958 58.0407 93.3911 59.024 95.0242 59.909C98.8785 61.9714 103.02 63.482 107.28 64.4345C107.72 63.2681 108.728 62.3303 109.937 62.0292C111.296 61.6617 112.832 62.1263 113.763 63.1894C114.747 64.2624 115.028 65.9156 114.458 67.2577C114.121 68.1157 113.438 68.7904 112.661 69.2587C111.578 69.7516 110.273 69.8007 109.199 69.2526C107.829 68.5962 106.962 67.0746 107.045 65.5554C99.4689 64.4738 92.0696 61.5928 86.0419 56.8006C82.5152 59.2133 78.6683 61.1958 74.5658 62.4028C71.2787 63.3713 67.823 63.8224 64.4014 63.5508C63.8391 69.6889 63.7694 75.8774 64.3097 82.0192C64.8513 88.3515 65.9845 94.6592 68.0442 100.679C66.4905 100.697 64.9368 100.714 63.3832 100.729C60.7329 93.0823 59.9689 84.9186 59.9897 76.8644C60.0276 73.8088 60.0496 70.7447 60.4188 67.7076C60.8173 64.2489 61.4921 60.8308 62.1363 57.4114C62.5311 55.2372 62.9333 53.0629 63.4394 50.9107C65.3121 42.7987 68.1029 34.9239 71.3863 27.2863C74.8494 19.6228 79.5545 12.585 84.8268 6.06835C84.1887 4.94495 84.1349 3.50322 84.7364 2.35279Z'
				fill='#5DCB42'
			/>
			<Path
				d='M0 111.984C0.972348 111.984 1.9447 111.984 2.9193 111.984C2.91479 115.716 2.92606 119.45 2.91253 123.182C3.74049 121.588 5.22721 120.359 6.97564 119.961C9.4866 119.381 12.3833 119.892 14.2671 121.759C15.4764 122.942 15.9479 124.689 15.9546 126.348C15.9704 130.156 15.9569 133.963 15.9614 137.772C14.9823 137.772 14.0054 137.772 13.0286 137.772C13.0218 134.198 13.0421 130.623 13.0195 127.051C12.9902 125.539 12.5999 123.841 11.2869 122.945C9.39862 121.666 6.71394 121.994 4.961 123.369C3.60964 124.47 2.9554 126.239 2.93284 127.96C2.899 131.232 2.93058 134.501 2.9193 137.772C1.9447 137.772 0.972348 137.772 0 137.772C0 129.175 0 120.581 0 111.984Z'
				fill='#5DCB42'
			/>
			<Path
				d='M46.9254 111.984C47.8978 111.984 48.8701 111.984 49.8447 111.984C49.8402 115.711 49.8515 119.438 49.838 123.168C50.8915 121.347 52.7821 120.045 54.8621 119.799C56.9196 119.587 59.1238 119.938 60.8339 121.178C62.4898 122.357 63.5659 124.247 63.9404 126.241C64.2991 128.159 64.2811 130.163 63.8096 132.057C63.329 133.997 62.1333 135.768 60.439 136.819C58.7876 137.852 56.7707 138.117 54.8644 137.941C52.7685 137.731 50.7246 136.589 49.6485 134.724C49.6101 135.741 49.5402 136.756 49.4838 137.772C48.6287 137.772 47.7782 137.772 46.9254 137.772C46.9254 129.175 46.9254 120.581 46.9254 111.984ZM53.7792 122.391C51.7127 122.954 50.2914 124.942 49.9846 127.023C49.6913 129.159 49.7635 131.54 51.0427 133.361C53.0235 136.313 57.9958 136.361 60.0014 133.413C61.1587 131.788 61.3888 129.681 61.2038 127.737C61.0459 126.043 60.3465 124.326 58.9997 123.253C57.5446 122.101 55.5232 121.917 53.7792 122.391Z'
				fill='#5DCB42'
			/>
			<Path
				d='M76.6193 120.341C79.8499 118.805 84.2131 120.25 85.6524 123.626C87.1143 120.22 91.4617 118.962 94.751 120.195C97.1762 120.952 98.9089 123.369 98.9382 125.924C98.9788 129.873 98.9427 133.822 98.9562 137.772C97.9816 137.772 97.0093 137.772 96.0369 137.772C96.0369 134.499 96.0347 131.225 96.0369 127.953C96.0437 126.446 96.1159 124.741 95.0826 123.522C93.7087 121.946 91.2654 121.819 89.4584 122.639C87.5272 123.506 86.3699 125.635 86.3699 127.728C86.3518 131.074 86.3699 134.423 86.3631 137.772C85.3862 137.772 84.4071 137.772 83.4325 137.772C83.428 134.038 83.437 130.302 83.428 126.567C83.428 125.225 83.0242 123.749 81.8736 122.954C79.701 121.438 76.405 122.142 74.907 124.31C74.0835 125.414 73.7677 126.82 73.7632 128.184C73.7496 131.38 73.7632 134.576 73.7587 137.772C72.784 137.772 71.8117 137.772 70.8393 137.772C70.8393 131.836 70.8393 125.899 70.8393 119.963C71.6921 119.963 72.5449 119.963 73.3977 119.963C73.4541 121.068 73.5263 122.176 73.5646 123.282C74.2685 122.028 75.2905 120.92 76.6193 120.341Z'
				fill='#5DCB42'
			/>
			<Path
				d='M107.775 121.752C109.361 120.264 111.588 119.728 113.704 119.737C115.91 119.696 118.198 120.428 119.757 122.056C121.715 124.05 122.164 127.069 121.749 129.75C117.167 129.754 112.587 129.748 108.007 129.752C108.179 131.448 108.788 133.197 110.135 134.3C111.766 135.7 114.099 135.8 116.1 135.342C117.381 135.053 118.581 134.239 119.091 132.978C119.908 133.393 120.727 133.801 121.541 134.223C120.585 135.782 119.105 137.027 117.352 137.544C115.511 138.08 113.544 138.117 111.667 137.784C109.63 137.414 107.725 136.234 106.588 134.471C105.242 132.433 104.987 129.871 105.192 127.486C105.366 125.357 106.169 123.2 107.775 121.752ZM111.006 122.724C109.239 123.551 108.285 125.466 108.041 127.34C111.721 127.345 115.4 127.345 119.08 127.34C118.863 125.635 118.142 123.866 116.644 122.924C114.967 121.898 112.763 121.921 111.006 122.724Z'
				fill='#5DCB42'
			/>
			<Path
				d='M130.008 121.641C131.587 120.232 133.751 119.73 135.813 119.737C138.024 119.696 140.316 120.43 141.877 122.065C143.826 124.062 144.273 127.071 143.858 129.75C139.276 129.754 134.696 129.748 130.117 129.752C130.288 131.448 130.897 133.197 132.246 134.3C133.875 135.698 136.206 135.8 138.204 135.344C139.488 135.055 140.691 134.241 141.2 132.978C142.013 133.388 142.818 133.806 143.639 134.198C142.644 135.935 140.927 137.228 138.989 137.674C137.212 138.087 135.337 138.103 133.55 137.736C131.49 137.314 129.6 136.031 128.524 134.193C127.285 132.125 127.089 129.602 127.326 127.249C127.533 125.142 128.388 123.034 130.008 121.641ZM132.686 122.963C131.166 123.88 130.389 125.628 130.15 127.34C133.83 127.345 137.51 127.345 141.189 127.34C140.968 125.478 140.081 123.528 138.331 122.685C136.56 121.871 134.365 121.967 132.686 122.963Z'
				fill='#5DCB42'
			/>
			<Path
				d='M23.28 119.963C24.2524 119.963 25.2247 119.963 26.1971 119.963C26.1971 123.465 26.1971 126.964 26.1971 130.466C26.2016 131.622 26.2512 132.846 26.8265 133.879C27.3319 134.795 28.329 135.324 29.3262 135.486C31.2009 135.798 33.2742 135.388 34.6955 134.054C35.8709 132.985 36.2973 131.325 36.3041 129.777C36.3154 126.506 36.3041 123.234 36.3086 119.963C37.2855 119.963 38.2623 119.963 39.2414 119.963C39.2414 125.899 39.2414 131.836 39.2414 137.772C38.3841 137.775 37.5268 137.775 36.6718 137.763C36.6154 136.872 36.5455 135.983 36.5049 135.091C35.5596 136.55 33.9804 137.483 32.2974 137.784C29.9037 138.226 27.1694 138.085 25.2157 136.457C23.7809 135.315 23.2733 133.384 23.2823 131.61C23.2755 127.728 23.28 123.845 23.28 119.963Z'
				fill='#5DCB42'
			/>
		</Icon>
	);
};
