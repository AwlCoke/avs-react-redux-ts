// eslint-disable-next-line no-unused-vars
import { TicketModel } from '../models/ticket.model';
import {
    // eslint-disable-next-line no-unused-vars
    FetchTicketsActionTypes,
    FETCH_TICKETS_FAILURE,
    FETCH_TICKETS_REQUEST,
    FETCH_TICKETS_SUCCESS,
    // eslint-disable-next-line no-unused-vars
    SortTicketsActionTypes,
    SORT_FETCHING_TICKETS,
    FILTER_TOGGLE,
} from './types';

const ticketsRequested = (): FetchTicketsActionTypes => {
    return {
        type: FETCH_TICKETS_REQUEST,
    };
};

const ticketsLoaded = (response: {
    tickets: Array<TicketModel>;
    stop: boolean;
}): FetchTicketsActionTypes => {
    return {
        type: FETCH_TICKETS_SUCCESS,
        payload: response,
    };
};

const ticketsError = (error: Error): FetchTicketsActionTypes => {
    return {
        type: FETCH_TICKETS_FAILURE,
        payload: error,
    };
};

const tabChanged = (id: string): SortTicketsActionTypes => {
    return {
        type: SORT_FETCHING_TICKETS,
        payload: id,
    };
};

const toggleFilter = (filter: string): SortTicketsActionTypes => {
    return {
        type: FILTER_TOGGLE,
        payload: filter,
    };
};

export { ticketsRequested, ticketsLoaded, ticketsError, toggleFilter, tabChanged };
