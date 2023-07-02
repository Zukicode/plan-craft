import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';

import { App } from 'components/App/App';

import { BrowserRouter } from 'react-router-dom';

import { store } from 'features/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter basename='plan-craft'>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
