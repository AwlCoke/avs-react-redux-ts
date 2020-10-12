// eslint-disable-next-line no-unused-vars
import { TicketModel } from './ticket.model';

export type StateModel = {
    tickets: Array<TicketModel> | [];
    isFetchingDone: boolean;
    error: Error | null;
    tab: 'cheapest' | 'fastest';
    filters: Array<string>;
};
