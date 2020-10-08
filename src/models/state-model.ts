// eslint-disable-next-line no-unused-vars
import { TicketModel } from './ticket.model';

export interface StateModel {
    tickets: [] | Array<TicketModel>;
    loading: boolean;
    error: Error | null;
    filter: Array<string>;
    tab: string;
}
