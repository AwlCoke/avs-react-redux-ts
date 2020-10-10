// eslint-disable-next-line no-unused-vars
import { TicketModel } from '../models/ticket.model';

const ticketsRequested = () => {
    return {
        type: 'FETCH_TICKETS_REQUEST',
    };
};

const ticketsLoaded = (response: { tickets: Array<TicketModel>; stop: boolean }) => {
    return {
        type: 'FETCH_TICKETS_SUCCESS',
        payload: response,
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
        type: 'SORT_FETCHING_TICKETS',
        payload: id,
    };
};

const toggleFilter = (filter: string) => {
    return {
        type: 'FILTER_TOGGLE',
        payload: filter,
    };
};

const fetchTickets = (searchId: string) => (dispatch: any) => {
    dispatch(ticketsRequested);
    return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json.stop);
            console.log(json.tickets);
            // dispatch(ticketsLoaded(json.tickets));
            dispatch(ticketsLoaded(json));
        });
};

const getDuration = (arr: Array<{ duration: number }>) => {
    return arr.reduce((acc, el) => acc + el.duration, 0);
};

const sortFetchingTickets = (state: any) => (dispatch: any) => {
    const {
        ticketList: { tab, tickets },
    } = state;
    if (tab === 'fastest') {
        tickets.sort((a: any, b: any) => a.price - b.price);
    }
    if (tab === 'cheapest') {
        return tickets.sort((prev: any, curr: any) => {
            const prevDuration = getDuration(prev.segments);
            const currentDuration = getDuration(curr.segments);
            return prevDuration - currentDuration;
        });
    }
    return dispatch(ticketsLoaded(tickets));
};

export {
    ticketsRequested,
    ticketsLoaded,
    ticketsError,
    tabChanged,
    toggleFilter,
    fetchTickets,
    sortFetchingTickets,
};
