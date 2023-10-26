import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Tasks = lazy(() => import('./tasks'));

export const Routing = () => {
	return (
		<Routes>
			<Route path='/tasks' element={<Tasks />} />
			<Route path='*' element={<Navigate to='/tasks' />} />
		</Routes>
	);
};
