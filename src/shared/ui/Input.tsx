import { InputProps, Input as MInput } from '@mui/material';
import { FC } from 'react';

const Input: FC<InputProps> = (props) => {
	return <MInput {...props}></MInput>;
};

export default Input;
