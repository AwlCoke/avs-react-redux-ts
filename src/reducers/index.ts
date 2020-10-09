/* eslint-disable no-unused-vars */
import { TicketLoadedActionModel } from '../models/ticket-loaded-action.model';
import { StateModel } from '../models/state-model';
import filters from '../components/filters/filters';

const initialState: object | StateModel = {
    tickets: [],
    loading: true,
    error: null,
    filters: ['one-stop', 'two-stops'],
    tab: 'cheapest',
};

let updatedFilters: string[] = [];
const reducer = (state: any, action: any) => {
    if (!state) return initialState;
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
        case 'FILTER_TOGGLE':
            // eslint-disable-next-line no-case-declarations
            const filterOnToggle = action.payload;
            // eslint-disable-next-line no-case-declarations
            const { filters } = state;
            // eslint-disable-next-line no-case-declarations
            const idx = filters.findIndex((el: string) => el === filterOnToggle);
            if (idx !== -1) {
                updatedFilters = [...filters.slice(0, idx), ...filters.slice(idx + 1)];
            } else {
                if (filters.includes('all')) {
                    updatedFilters = filters.filter(
                        (el: string) => el !== filterOnToggle && el !== 'all',
                    );
                } else updatedFilters = [...filters, filterOnToggle];
            }
            if (updatedFilters.length === 4) {
                updatedFilters = [...updatedFilters, 'all'];
            }
            return {
                ...state,
                loading: false,
                filters: updatedFilters,
            };

        case 'ALL_FILTERS_TOGGLE':
            if ('filters' in state && !state.filters.includes(action.payload)) {
                updatedFilters = ['all', 'no-stops', 'one-stop', 'two-stops', 'three-stops'];
            }
            if ('filters' in state && state.filters.includes(action.payload)) {
                updatedFilters = [];
            }
            return {
                ...state,
                loading: false,
                filters: updatedFilters,
            };
        default:
            return state;
    }
};

export default reducer;
