import { ButtonProps, Button as MButton } from '@mui/material';
import { FC } from 'react';

const Button: FC<ButtonProps> = (props) => {
	return <MButton {...props}></MButton>;
};

export default Button;
