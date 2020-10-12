import { createSelector } from 'reselect';
// eslint-disable-next-line no-unused-vars
import { StateModel } from '../models/state.model';
// eslint-disable-next-line no-unused-vars
import { TicketModel } from '../models/ticket.model';

const getDuration = (arr: Array<{ duration: number }>) => {
    return arr.reduce((acc, el) => acc + el.duration, 0);
};

const sortTickets = (tickets: any, tab = 'cheapest') => {
    if (tab === 'cheapest') {
        return tickets.sort((a: TicketModel, b: TicketModel) => a.price - b.price);
    }
    if (tab === 'fastest') {
        return tickets.sort((prev: TicketModel, curr: TicketModel) => {
            const prevDuration = getDuration(prev.segments);
            const currentDuration = getDuration(curr.segments);
            return prevDuration - currentDuration;
        });
    }
};

const ticketsWithFilters = (tickets: TicketModel[], filters: string[]) => {
    if (filters.includes('all')) return tickets;
    if (!filters.length) return [];
    if (filters.includes('0')) {
        return tickets.filter(
            (ticket) =>
                ticket.segments.reduce((acc, segment) => {
                    return segment.stops.length == 0 ? acc + 1 : acc;
                }, 0) > 0,
        );
    }
    if (filters.includes('1')) {
        return tickets.filter(
            (ticket) =>
                ticket.segments.reduce((acc, segment) => {
                    return segment.stops.length == 1 ? acc + 1 : acc;
                }, 0) > 0,
        );
    }
    if (filters.includes('2')) {
        return tickets.filter(
            (ticket) =>
                ticket.segments.reduce((acc, segment) => {
                    return segment.stops.length == 0 ? acc + 1 : acc;
                }, 0) > 0,
        );
    }
    if (filters.includes('3')) {
        return tickets.filter(
            (ticket) =>
                ticket.segments.reduce((acc, segment) => {
                    return segment.stops.length == 3 ? acc + 1 : acc;
                }, 0) > 0,
        );
    }
    return tickets;
};

const getAllTickets = (state: StateModel) => state.tickets;
const getTabToSort = (state: StateModel) => state.tab;
const getFilters = (state: StateModel) => state.filters;

export const filterTickets = createSelector(
    [getAllTickets, getTabToSort, getFilters],
    // eslint-disable-next-line no-unused-vars
    (tickets, tab, filters) => {
        return ticketsWithFilters(sortTickets(tickets, tab), filters);
    },
);
