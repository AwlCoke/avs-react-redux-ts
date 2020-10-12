import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from './components/error-boundary';
import { AviasalesServiceProvider } from './components/aviasales-service-context';
import AviasalesService from './services/aviasales-service';

const aviasalesService = new AviasalesService();

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <AviasalesServiceProvider value={aviasalesService}>
                    <App />
                </AviasalesServiceProvider>
            </ErrorBoundary>
        </Provider>
    </StrictMode>,
    document.getElementById('root'),
);
