// eslint-disable-next-line no-unused-vars
import { StateModel } from '../models/state.model';
import {
    FETCH_TICKETS_FAILURE,
    FETCH_TICKETS_REQUEST,
    FETCH_TICKETS_SUCCESS,
    // eslint-disable-next-line no-unused-vars
    FetchTicketsActionTypes,
    SORT_FETCHING_TICKETS,
    // eslint-disable-next-line no-unused-vars
    SortTicketsActionTypes,
} from '../actions';

const getDuration = (arr: Array<{ duration: number }>) => {
    return arr.reduce((acc, el) => acc + el.duration, 0);
};

const sortTickets = (tickets: any, tab = 'cheapest') => {
    if (tab === 'cheapest') {
        return tickets.sort((a: any, b: any) => a.price - b.price);
    }
    if (tab === 'fastest') {
        return tickets.sort((prev: any, curr: any) => {
            const prevDuration = getDuration(prev.segments);
            const currentDuration = getDuration(curr.segments);
            return prevDuration - currentDuration;
        });
    }
};

const updateTicketList = (
    state: StateModel,
    action: FetchTicketsActionTypes | SortTicketsActionTypes,
) => {
    if (!state) {
        return {
            tickets: [],
            isFetchingDone: false,
            error: null,
            tab: 'cheapest',
        };
    }

    switch (action.type) {
        case FETCH_TICKETS_REQUEST:
            return {
                ...state,
                tickets: [],
                error: null,
            };
        case FETCH_TICKETS_SUCCESS:
            return {
                ...state,
                tickets: [...state.tickets, ...sortTickets(action.payload.tickets)],
                isFetchingDone: action.payload.stop,
                error: null,
            };
        case FETCH_TICKETS_FAILURE:
            return {
                ...state,
                tickets: [],
                isFetchingDone: true,
                error: action.payload,
            };
        case SORT_FETCHING_TICKETS:
            return {
                ...state,
                tickets: [...sortTickets(state.tickets, action.payload)],
                tab: action.payload,
            };
        default:
            return state;
    }
};

export default updateTicketList;
