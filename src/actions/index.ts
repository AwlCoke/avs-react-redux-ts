// eslint-disable-next-line no-unused-vars
import { TicketModel } from '../models/ticket.model';

const ticketsRequested = () => {
    return {
        type: 'FETCH_TICKETS_REQUEST',
    };
};

const ticketsLoaded = (tickets: Array<TicketModel>) => {
    return {
        type: 'FETCH_TICKETS_SUCCESS',
        payload: tickets,
    };
};

const ticketsError = (error: Error) => {
    return {
        type: 'FETCH_TICKETS_FAILURE',
        payload: error,
    };
};

const tabChanged = (id: string) => {
    return {
        type: 'TAB_CHANGED',
        payload: id,
    };
};

const toggleFilter = (filter: string) => {
    return {
        type: 'FILTER_TOGGLE',
        payload: filter,
    };
};

const toggleAllFilters = (filter: string) => {
    return {
        type: 'ALL_FILTERS_TOGGLE',
        payload: filter,
    };
};

export {
    ticketsRequested,
    ticketsLoaded,
    ticketsError,
    tabChanged,
    toggleFilter,
    toggleAllFilters,
};
