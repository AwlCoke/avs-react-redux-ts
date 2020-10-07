// eslint-disable-next-line no-unused-vars
import { TicketModel } from './ticket.model';

export interface TicketLoadedActionModel {
    type: string;
    payload: Array<TicketModel>;
}
