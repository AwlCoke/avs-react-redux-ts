// eslint-disable-next-line no-unused-vars
import { TicketModel } from './ticket.model';

export interface StateModel {
    tickets: Array<void> | Array<TicketModel>;
    loading: boolean;
    error: boolean | null;
}
