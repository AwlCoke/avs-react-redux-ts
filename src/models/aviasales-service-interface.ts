// eslint-disable-next-line no-unused-vars
import { TicketModel } from './ticket.model';

export interface AviasalesServiceInterface {
    getTickets: (searchId: string) => { tickets: Array<TicketModel>; stop: boolean };
    getNewSearchId: () => { searchId: string };
}
