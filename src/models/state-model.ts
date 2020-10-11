// eslint-disable-next-line no-unused-vars
import { TicketModel } from './ticket.model';

export type StateModel = {
    ticketList: {
        tickets: Array<TicketModel> | [];
        isFetchingDone: boolean;
        loading: boolean;
        error: Error | null;
        tab: 'cheapest' | 'fastest';
    };
    filterList: {
        filters: Array<string>;
    };
};
