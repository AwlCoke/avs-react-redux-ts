import { ticketsLoaded, ticketsRequested } from './ticket-list';
import AviasalesService from '../services/aviasales-service';
import { save, load, clear } from '../utils/session-storage';

const aviasalesService = new AviasalesService();

export const fetchTickets = () => (dispatch: any) => {
    dispatch(ticketsRequested());
    if (!load('searchId')) {
        aviasalesService.getNewSearchId().then((res) => save('searchId', res));
    }
    const searchId = load('searchId');
    if (searchId) {
        aviasalesService
            .getTickets(searchId)
            .then((response) => {
                dispatch(ticketsLoaded(response));
            })
            .catch((error) => {
                clear();
                console.log(`Could not load tickets. ${error}`);
            });
    }
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

export const fetchTicketsIfNeeded = () => (dispatch: any, getState: any) => {
    if (shouldFetchTickets(getState())) {
        dispatch(fetchTickets());
    }
    return Promise.resolve();
};
