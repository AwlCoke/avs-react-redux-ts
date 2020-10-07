// eslint-disable-next-line no-unused-vars
import { TicketModel } from '../models/ticket.model';

const ticketsLoaded = (tickets: Array<TicketModel>) => {
    console.log('tickets loaded');
    return {
        type: 'TICKETS_LOADED',
        payload: tickets,
    };
};

export { ticketsLoaded };
