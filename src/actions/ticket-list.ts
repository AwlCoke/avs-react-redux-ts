// eslint-disable-next-line no-unused-vars
import { TicketModel } from '../models/ticket.model';
import {
    // eslint-disable-next-line no-unused-vars
    FetchTicketsActionTypes,
    FETCH_TICKETS_FAILURE,
    FETCH_TICKETS_REQUEST,
    FETCH_TICKETS_SUCCESS,
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

export { ticketsRequested, ticketsLoaded, ticketsError };
