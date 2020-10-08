// eslint-disable-next-line no-unused-vars
import { TicketModel } from '../models/ticket.model';

const ticketsRequested = () => {
    return {
        type: 'FETCH_TICKETS_REQUEST',
    };
};

const ticketsLoaded = (tickets: Array<TicketModel>) => {
    return {
        type: 'FETCH_TICKETS_SUCCESS',
        payload: tickets,
    };
};

const ticketsError = (error: Error) => {
    return {
        type: 'FETCH_TICKETS_FAILURE',
        payload: error,
    };
};

export { ticketsRequested, ticketsLoaded, ticketsError };
