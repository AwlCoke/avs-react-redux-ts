/* eslint-disable no-unused-vars */
import { TicketLoadedActionModel } from '../models/ticket-loaded-action.model';

const initialState: object = {
    tickets: [],
    loading: true,
    error: null,
    filter: ['all'],
    tab: 'cheapest',
};

const reducer = (state = initialState, action: TicketLoadedActionModel) => {
    switch (action.type) {
        case 'FETCH_TICKETS_REQUEST':
            return {
                ...state,
                tickets: [],
                loading: true,
                error: null,
            };
        case 'FETCH_TICKETS_SUCCESS':
            return {
                ...state,
                tickets: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_TICKETS_FAILURE':
            return {
                ...state,
                tickets: [],
                loading: false,
                error: action.payload,
            };
        case 'TAB_CHANGED':
            return {
                ...state,
                loading: true,
                tab: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
