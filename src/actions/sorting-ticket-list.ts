// eslint-disable-next-line no-unused-vars
import { SortTicketsActionTypes, SORT_FETCHING_TICKETS, FILTER_TOGGLE } from './types';

export const tabChanged = (id: string): SortTicketsActionTypes => {
    return {
        type: SORT_FETCHING_TICKETS,
        payload: id,
    };
};

export const toggleFilter = (filter: string): SortTicketsActionTypes => {
    return {
        type: FILTER_TOGGLE,
        payload: filter,
    };
};
