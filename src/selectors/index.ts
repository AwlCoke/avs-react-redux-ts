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
    if (filters.includes('all')) return [...tickets];
    if (!filters.length) return [];
    return tickets.filter((ticket) => {
        for (const segment of ticket.segments)
            for (const filter of filters) {
                if (filter === segment.stops.length.toString()) return ticket;
            }
        return '';
    });
};

const getAllTickets = (state: StateModel) => state.tickets;
const getTabToSort = (state: StateModel) => state.tab;
const getFilters = (state: StateModel) => state.filters;

export const filterTickets = createSelector(
    [getAllTickets, getTabToSort, getFilters],
    (tickets, tab, filters) => {
        return ticketsWithFilters(sortTickets(tickets, tab), filters);
    },
);
