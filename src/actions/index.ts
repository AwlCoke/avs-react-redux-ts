// eslint-disable-next-line no-unused-vars
import { TicketModel } from '../models/ticket.model';

const ticketsLoaded = (tickets: Array<TicketModel>) => {
    return {
        type: 'TICKETS_LOADED',
        payload: tickets,
    };
};

export { ticketsLoaded };
