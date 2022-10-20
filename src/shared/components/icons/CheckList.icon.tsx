import * as React from 'react';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@lib/tailwind';

interface IProps {
	fillIcon?: string;
	width?: number;
	height?: number;
}

export const CheckListIcon: React.FC<IProps> = ({ fillIcon, width, height }) => {
	return (
		<Svg width={width || 25} height={height || 25} viewBox='0 0 25 25' fill='none'>
			<Path
				d='M21.5697 16.886L19.1154 20.4123L17.3833 18.9908C17.1965 18.8368 16.9197 18.8645 16.7662 19.0513C16.6123 19.2386 16.6395 19.5153 16.8272 19.6684L18.9263 21.3917C19.0048 21.4566 19.1035 21.4912 19.2044 21.4912C19.2241 21.4912 19.2443 21.4899 19.2645 21.4868C19.3855 21.4702 19.4943 21.4035 19.5645 21.3031L22.2899 17.3868C22.4281 17.1881 22.3794 16.9149 22.1803 16.7763C21.9811 16.6373 21.7083 16.6868 21.5697 16.886Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				d='M23.6842 15.6601V5.34035C23.6842 2.39561 21.2886 0 18.3439 0H5.34035C2.39561 0 0 2.39561 0 5.34035V18.3439C0 21.2886 2.39561 23.6842 5.34035 23.6842H15.6601C16.6482 24.5053 17.9162 25 19.2982 25C22.4421 25 25 22.4421 25 19.2982C25 17.9162 24.5053 16.6482 23.6842 15.6601ZM5.34035 22.807C2.87939 22.807 0.877193 20.8053 0.877193 18.3439V5.34035C0.877193 2.87895 2.87939 0.877193 5.34035 0.877193H18.3439C20.8048 0.877193 22.807 2.87895 22.807 5.34035V14.8105C22.7741 14.7847 22.739 14.7627 22.7057 14.7377C22.6136 14.6684 22.5215 14.5996 22.425 14.536C22.4149 14.5294 22.4039 14.5237 22.3939 14.5171C22.1684 14.3706 21.9311 14.2417 21.6851 14.1276C21.6518 14.1123 21.6193 14.0947 21.586 14.0798C21.4895 14.0373 21.3908 14.0009 21.2917 13.9636C21.2289 13.9399 21.1662 13.9158 21.1026 13.8943C21.0118 13.864 20.9202 13.8373 20.8276 13.8114C20.7491 13.7895 20.6702 13.7689 20.5908 13.7504C20.507 13.7311 20.4237 13.7123 20.3386 13.6965C20.2377 13.6776 20.136 13.6632 20.0338 13.65C19.9654 13.6412 19.8974 13.6303 19.8281 13.6237C19.6526 13.6066 19.4759 13.5965 19.2982 13.5965C16.6079 13.5965 14.3522 15.4719 13.7557 17.9825H11.8421C11.6 17.9825 11.4035 18.1785 11.4035 18.4211C11.4035 18.6636 11.6 18.8596 11.8421 18.8596H13.6189C13.6075 19.0048 13.5965 19.1504 13.5965 19.2982C13.5965 19.4759 13.607 19.6526 13.6232 19.8281C13.6298 19.8978 13.6404 19.9658 13.6496 20.0347C13.6627 20.136 13.6772 20.2373 13.6961 20.3373C13.7118 20.4228 13.7307 20.5075 13.7504 20.5917C13.7689 20.6702 13.789 20.7478 13.8105 20.8254C13.8368 20.9193 13.8636 21.0123 13.8947 21.1039C13.9154 21.1658 13.939 21.2263 13.9618 21.2873C13.9996 21.3882 14.0368 21.4886 14.0798 21.5868C14.0925 21.6158 14.1079 21.6439 14.1211 21.6728C14.2382 21.9272 14.3715 22.1728 14.5237 22.4053C14.5276 22.4114 14.5311 22.418 14.5351 22.4237C14.5991 22.5206 14.6684 22.6132 14.7377 22.7061C14.7627 22.7395 14.7846 22.7741 14.8101 22.807H5.34035ZM19.2982 24.1228C18.061 24.1228 16.9342 23.6504 16.0794 22.8816C15.9732 22.7864 15.8719 22.6873 15.7754 22.5838C15.7539 22.561 15.7333 22.5377 15.7123 22.5145C15.6206 22.4123 15.5338 22.307 15.4513 22.1982C15.4325 22.1732 15.4132 22.1482 15.3947 22.1228C15.3136 22.0105 15.2373 21.8952 15.1662 21.7768C15.1518 21.7531 15.1368 21.7298 15.1228 21.7053C15.0509 21.5811 14.9855 21.4539 14.925 21.3241C14.9154 21.3035 14.9048 21.2838 14.8956 21.2627C14.8347 21.1272 14.7811 20.9886 14.7333 20.8478C14.7276 20.8303 14.7202 20.8136 14.7145 20.7965C14.6675 20.6535 14.6285 20.5075 14.5947 20.3601C14.5908 20.343 14.5851 20.3263 14.5816 20.3088C14.55 20.1636 14.5276 20.0162 14.5101 19.868C14.5075 19.8474 14.5031 19.8272 14.5009 19.8061C14.4829 19.6386 14.4737 19.4693 14.4737 19.2982C14.4737 16.6382 16.6382 14.4737 19.2982 14.4737C19.4693 14.4737 19.639 14.4829 19.8075 14.5013C19.8272 14.5035 19.8461 14.5079 19.8658 14.5105C20.0149 14.5285 20.1636 14.5513 20.3096 14.5829C20.3263 14.5864 20.3421 14.5921 20.3588 14.5956C20.507 14.6294 20.6535 14.6684 20.7974 14.7158C20.8136 14.7211 20.8294 14.7276 20.8456 14.7333C20.9877 14.7816 21.1276 14.836 21.2645 14.8974C21.2838 14.9061 21.3026 14.9162 21.3219 14.925C21.4531 14.986 21.5816 15.0522 21.707 15.1246C21.7298 15.1377 21.7522 15.1522 21.7746 15.1658C21.8943 15.2382 22.011 15.3145 22.1246 15.3969C22.1487 15.4145 22.1724 15.4325 22.1961 15.4504C22.3066 15.5338 22.4136 15.6219 22.5171 15.7149C22.539 15.7346 22.561 15.7539 22.582 15.7741C22.6868 15.8719 22.7877 15.975 22.8846 16.0829C23.6518 16.9368 24.1228 18.0623 24.1228 19.2982C24.1228 21.9583 21.9583 24.1228 19.2982 24.1228Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				d='M11.8421 6.14035H19.7368C19.9789 6.14035 20.1754 5.9443 20.1754 5.70176C20.1754 5.45921 19.9789 5.26316 19.7368 5.26316H11.8421C11.6 5.26316 11.4035 5.45921 11.4035 5.70176C11.4035 5.9443 11.6 6.14035 11.8421 6.14035Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				d='M11.8421 12.2807H19.7368C19.9789 12.2807 20.1754 12.0846 20.1754 11.8421C20.1754 11.5996 19.9789 11.4035 19.7368 11.4035H11.8421C11.6 11.4035 11.4035 11.5996 11.4035 11.8421C11.4035 12.0846 11.6 12.2807 11.8421 12.2807Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				d='M8.40745 3.22368L5.6671 6.42018L3.99123 5.16272C3.79737 5.01754 3.52237 5.05658 3.37719 5.25044C3.23158 5.44386 3.27105 5.71886 3.46491 5.86404L5.46973 7.36798C5.54868 7.42719 5.64079 7.4557 5.73289 7.4557C5.85702 7.4557 5.97982 7.40351 6.06623 7.30219L9.07368 3.79342C9.23114 3.60965 9.21008 3.3329 9.02631 3.17544C8.84298 3.01842 8.56535 3.03947 8.40745 3.22368Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				d='M8.40745 9.36404L5.6671 12.5605L3.99123 11.3031C3.79737 11.1579 3.52237 11.1969 3.37719 11.3908C3.23158 11.5842 3.27105 11.8592 3.46491 12.0044L5.46973 13.5083C5.54868 13.5675 5.64079 13.5961 5.73289 13.5961C5.85702 13.5961 5.97982 13.5439 6.06623 13.4425L9.07368 9.93377C9.23114 9.75 9.21008 9.47325 9.02631 9.31579C8.84298 9.15877 8.56535 9.17983 8.40745 9.36404Z'
				fill={fillIcon || colors.grey}
			/>
			<Path
				d='M8.40745 15.943L5.6671 19.139L3.99123 17.882C3.79737 17.7373 3.52237 17.7759 3.37719 17.9697C3.23158 18.1631 3.27105 18.4381 3.46491 18.5833L5.46973 20.0873C5.54868 20.1465 5.64079 20.175 5.73289 20.175C5.85702 20.175 5.97982 20.1228 6.06623 20.0215L9.07368 16.5131C9.23114 16.3294 9.21008 16.0526 9.02631 15.8952C8.84298 15.7377 8.56535 15.7588 8.40745 15.943Z'
				fill={fillIcon || colors.grey}
			/>
		</Svg>
	);
};