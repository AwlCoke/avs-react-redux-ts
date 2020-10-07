/* eslint-disable no-unused-vars */
import { TicketLoadedActionModel } from '../models/ticket-loaded-action.model';

const initialState: object = {
    tickets: [],
    loading: true,
};

const reducer = (state = initialState, action: TicketLoadedActionModel) => {
    switch (action.type) {
        case 'TICKETS_LOADED':
            return {
                tickets: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
