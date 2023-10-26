import { CheckboxProps, Checkbox as MCheckbox } from '@mui/material';
import { FC } from 'react';

const Checkbox: FC<CheckboxProps> = (props) => {
	return <MCheckbox {...props}></MCheckbox>;
};

export default Checkbox;
