// eslint-disable-next-line no-unused-vars
import { TicketModel } from '../models/ticket.model';

export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';
export const SORT_FETCHING_TICKETS = 'SORT_FETCHING_TICKETS';
export const FILTER_TOGGLE = 'FILTER_TOGGLE';

interface TicketsRequested {
    type: typeof FETCH_TICKETS_REQUEST;
}

interface TicketsLoaded {
    type: typeof FETCH_TICKETS_SUCCESS;
    payload: {
        tickets: TicketModel[];
        stop: boolean;
    };
}

interface TicketsError {
    type: typeof FETCH_TICKETS_FAILURE;
    payload: Error | null;
}

interface TabChanged {
    type: typeof SORT_FETCHING_TICKETS;
    payload: string;
}

interface ToggleFilter {
    type: typeof FILTER_TOGGLE;
    payload: string;
}

export type FetchTicketsActionTypes = TicketsRequested | TicketsLoaded | TicketsError;
export type SortTicketsActionTypes = TabChanged | ToggleFilter;
