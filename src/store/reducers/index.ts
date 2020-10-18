/* eslint-disable no-unused-vars */
import {
    FETCH_TICKETS_FAILURE,
    FETCH_TICKETS_REQUEST,
    FETCH_TICKETS_SUCCESS,
    FILTER_TOGGLE,
    SORT_FETCHING_TICKETS,
} from '../actions';
import { StateModel } from '../../models/state.model';
import { updateFilterList } from './update-filter-list';

const initialState: StateModel = {
    tickets: [],
    isFetchingDone: true,
    error: null,
    tab: 'cheapest',
    filters: ['1', '2'],
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_TICKETS_REQUEST:
            return {
                ...state,
                tickets: [],
                error: null,
            };
        case FETCH_TICKETS_SUCCESS:
            return {
                ...state,
                tickets: [...state.tickets, ...action.payload.tickets],
                isFetchingDone: action.payload.stop,
                error: null,
            };
        case FETCH_TICKETS_FAILURE:
            return {
                ...state,
                tickets: [],
                isFetchingDone: true,
                error: action.payload,
            };
        case SORT_FETCHING_TICKETS:
            return {
                ...state,
                tab: action.payload,
            };
        case FILTER_TOGGLE:
            return {
                ...state,
                filters: updateFilterList(state, action.payload),
            };
        default:
            return state;
    }
};

export default reducer;
