// eslint-disable-next-line no-unused-vars
import { TicketModel } from '../models/ticket.model';
// eslint-disable-next-line no-unused-vars
import { StateModel } from '../models/state-model';

const updateTicketList = (
    state: StateModel,
    action: { type: string; payload: Array<TicketModel> },
) => {
    if (!state) {
        return {
            tickets: [],
            loading: true,
            error: null,
        };
    }

    switch (action.type) {
        case 'FETCH_TICKETS_REQUEST':
            return {
                tickets: [],
                loading: true,
                error: null,
            };
        case 'FETCH_TICKETS_SUCCESS':
            return {
                tickets: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_TICKETS_FAILURE':
            return {
                tickets: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default updateTicketList;
