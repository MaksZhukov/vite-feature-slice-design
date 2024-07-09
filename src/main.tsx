import React from 'react';
import ReactDOM from 'react-dom/client';
import { onCLS, onINP, onLCP } from 'web-vitals';
import App from './app/App.tsx';

onCLS(console.log, { reportAllChanges: true });
onINP(console.log, { reportAllChanges: true });
onLCP(console.log, { reportAllChanges: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
