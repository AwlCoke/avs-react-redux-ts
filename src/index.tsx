import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundry from './components/error-boundry';
import { AviasalesServiceProvider } from './components/aviasales-service-context';
import AviasalesService from './services/aviasales-service';

const aviasalesService = new AviasalesService();

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <AviasalesServiceProvider value={aviasalesService}>
                    <App />
                </AviasalesServiceProvider>
            </ErrorBoundry>
        </Provider>
    </StrictMode>,
    document.getElementById('root'),
);
