import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from './components/error-boundary';

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    </StrictMode>,
    document.getElementById('root'),
);
