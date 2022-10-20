import * as React from 'react';
import { Center, Box } from 'native-base';
import { Props } from '../models/dashboard.models';

export const DashboardTemplate = ({ children }: Props) => {
	return (
		<Center>
			<Box>{children}</Box>
		</Center>
	);
};
