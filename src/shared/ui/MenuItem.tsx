import { MenuItemProps, MenuItem as MMenuItem } from '@mui/material';
import { FC } from 'react';

const MenuItem: FC<MenuItemProps> = (props) => {
	return <MMenuItem {...props}></MMenuItem>;
};

export default MenuItem;
