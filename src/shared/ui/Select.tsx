import { SelectProps, Select as MSelect } from '@mui/material';
import { FC } from 'react';

const Select: FC<SelectProps> = (props) => {
	return <MSelect {...props}></MSelect>;
};

export default Select;
