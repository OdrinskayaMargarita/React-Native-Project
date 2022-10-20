import * as React from 'react';
import { BinIcon } from '../../../icons/Bin.icon';
import { CloseIcon } from '../../../icons/Close.icon';
import { CalendarIcon } from '../../../icons/Calendar.icon';
import { FilterIcon } from '../../../icons/Filter.icon';
import { DeleteIcon } from '../../../icons/Delete.icon';

export const getIcon = (icon: string, color: string) => {
	switch (icon) {
		case 'bin':
			return <BinIcon fillIcon={color} />;
		case 'calendar':
			return <CalendarIcon fillIcon={color} />;
		case 'close':
			return <CloseIcon fillIcon={color} />;
		case 'filter':
			return <FilterIcon fillIcon={color} />;
		case 'delete':
			return <DeleteIcon fillIcon={color} />;
		default:
			return '';
	}
};
