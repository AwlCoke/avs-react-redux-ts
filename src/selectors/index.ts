import { createSelector } from 'reselect';
// eslint-disable-next-line no-unused-vars
import { StateModel } from '../models/state.model';

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

const getAllTickets = (state: StateModel) => state.tickets;
const getTabToSort = (state: StateModel) => state.tab;
const getFilters = (state: StateModel) => state.filters;

export const filterTickets = createSelector(
    [getAllTickets, getTabToSort, getFilters],
    // eslint-disable-next-line no-unused-vars
    (tickets, tab, filters) => {
        return sortTickets(tickets, tab);
    },
);
