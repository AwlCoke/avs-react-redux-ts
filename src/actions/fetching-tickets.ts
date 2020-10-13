import { ticketsError, ticketsLoaded, ticketsRequested } from './ticket-list';
import AviasalesService from '../services/aviasales-service';

const aviasalesService = new AviasalesService();

export const fetchTickets = () => async (dispatch: any) => {
    dispatch(ticketsRequested());

    let searchId: string;

    const getData = async () => {
        try {
            const response = await aviasalesService.getTickets(searchId);
            dispatch(ticketsLoaded(response));
            if (!response.stop) await getData();
        } catch (error) {
            await getData();
        }
    };

    try {
        searchId = await aviasalesService.getNewSearchId();
        await getData();
    } catch (error) {
        dispatch(ticketsError(error));
    }
};
