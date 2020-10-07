import React from 'react';
import { AviasalesServiceConsumer } from '../aviasales-service-context';

const withAviasalesService = () => (Wrapped) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        return (
            <AviasalesServiceConsumer>
                {(aviasalesService) => {
                    return <Wrapped {...props} aviasalesService={aviasalesService} />;
                }}
            </AviasalesServiceConsumer>
        );
    };
};

export default withAviasalesService;
