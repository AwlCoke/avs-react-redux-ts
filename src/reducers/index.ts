/* eslint-disable no-unused-vars */
import updateTicketList from './tickets-list';
import updateFilterTickets from './filterTickets';
import { StateModel } from '../models/state-model';

const reducer = (state: any, action: any) => {
    return {
        ticketList: updateTicketList(state, action),
        filterList: updateFilterTickets(state, action),
    };
};

export default reducer;
