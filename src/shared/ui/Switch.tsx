import { SwitchProps, Switch as MSwitch } from '@mui/material';
import { FC } from 'react';

const Switch: FC<SwitchProps> = (props) => {
	return <MSwitch {...props}></MSwitch>;
};

export default Switch;
