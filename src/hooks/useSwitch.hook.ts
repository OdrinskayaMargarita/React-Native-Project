import { useEffect, useState } from 'react';

export const useSwitch = ({ value, onChange }: Input): Output => {
	const [state, setState] = useState<boolean>(value);

	useEffect(() => {
		if (value !== state) {
			setState(value);
		}
	}, [state, value]);

	const changeHandler = () => {
		setState(!state);
		onChange(!state);
	};

	return [state, changeHandler];
};

interface Input {
	value: boolean;
	onChange: (val: boolean) => void;
}

type Output = [boolean, () => void];
