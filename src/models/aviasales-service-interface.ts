// eslint-disable-next-line no-unused-vars
import { TicketModel } from './ticket.model';

export interface AviasalesServiceInterface {
    getTickets: () => Array<TicketModel>;
}
