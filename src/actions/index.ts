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

const getSearchId = async () => {
    fetch('https://front-test.beta.aviasales.ru/search')
        .then((response) => response.json())
        .then((response) => {
            sessionStorage.setItem('searchId', response.searchId);
        })
        .catch(() => Promise.reject());
};

const getData = (URL: string, searchId: string) => {
    return fetch(`${URL}${searchId}`).then((response) => response.json());
};

const fetchTickets = () => (dispatch: any) => {
    dispatch(ticketsRequested);
    const URL = 'https://front-test.beta.aviasales.ru/tickets?searchId=';
    let searchId = sessionStorage.getItem('searchId');
    if (!searchId) {
        getSearchId();
        searchId = sessionStorage.getItem('searchId');
        return getData(URL, searchId!)
            .then((json) => {
                dispatch(ticketsLoaded(json));
            })
            .catch((error) => console.log(error));
    }
    return getData(URL, searchId!)
        .then((json) => {
            dispatch(ticketsLoaded(json));
        })
        .catch(() => {
            sessionStorage.removeItem('searchId');
        });
};

const shouldFetchTickets = (state: any) => {
    const {
        ticketList: { tickets, isFetchingDone, error },
    } = state;
    if (!tickets.length && !isFetchingDone) {
        return true;
    }
    if (isFetchingDone) {
        return false;
    }
    return error;
};

const fetchTicketsIfNeeded = () => (dispatch: any, getState: any) => {
    if (shouldFetchTickets(getState())) {
        dispatch(fetchTickets());
    }
    return Promise.resolve();
};

export {
    ticketsRequested,
    ticketsLoaded,
    ticketsError,
    tabChanged,
    toggleFilter,
    fetchTickets,
    fetchTicketsIfNeeded,
};
