// eslint-disable-next-line no-unused-vars
import { TicketModel } from './ticket.model';

export type StateModel = {
    ticketList: {
        tickets: Array<TicketModel> | [];
        stop: boolean;
        loading: boolean;
        error: Error | null;
        tab: string;
    };
    filterList: {
        filters: Array<string>;
    };
};
