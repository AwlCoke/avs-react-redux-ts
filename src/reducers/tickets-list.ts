// eslint-disable-next-line no-unused-vars
import { TicketModel } from '../models/ticket.model';
// eslint-disable-next-line no-unused-vars
import { StateModel } from '../models/state-model';

const updateTicketList = (state: StateModel, action: any) => {
    if (!state) {
        return {
            tickets: [],
            stop: false,
            loading: true,
            error: null,
            tab: 'cheapest',
        };
    }

    switch (action.type) {
        case 'FETCH_TICKETS_REQUEST':
            return {
                ...state.ticketList,
                tickets: [],
                stop: false,
                loading: true,
                error: null,
            };
        case 'FETCH_TICKETS_SUCCESS':
            return {
                ...state.ticketList,
                tickets: action.payload.tickets,
                stop: action.payload.stop,
                loading: false,
                error: null,
            };
        case 'FETCH_TICKETS_FAILURE':
            return {
                ...state.ticketList,
                tickets: [],
                stop: false,
                loading: false,
                error: action.payload,
            };
        case 'SORT_FETCHING_TICKETS':
            return {
                ...state.ticketList,
                tab: action.payload,
                loading: true,
            };
        default:
            return state.ticketList;
    }
};

export default updateTicketList;
