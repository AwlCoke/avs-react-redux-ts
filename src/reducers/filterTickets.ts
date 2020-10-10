// eslint-disable-next-line no-unused-vars
import { StateModel } from '../models/state-model';

const onlyUnique = (value: string, index: number, self: any) => {
    return self.indexOf(value) === index;
};

const updateFiltersList = (state: StateModel, filterId: string) => {
    const {
        filterList: { filters },
    } = state;
    const idx = filters.findIndex((filter: string) => filter === filterId);
    const indexOfAll = filters.findIndex((filter: string) => filter === 'all');
    if (filterId === 'all') {
        if (idx !== -1) {
            return {
                filters: [],
            };
        }
        const newFilters = [...filters, 'all', '0', '1', '2', '3'].filter(onlyUnique);
        return {
            filters: newFilters,
        };
    }
    if (idx !== -1) {
        if (indexOfAll !== -1) {
            return {
                filters: filters.filter(
                    (filter: string) => filter !== filterId && filter !== 'all',
                ),
            };
        }
        const newFilters = [...filters.slice(0, idx), ...filters.slice(idx + 1)];
        return {
            filters: newFilters,
        };
    }
    if (filters.length === 3) {
        const newFilters = [...filters, filterId, 'all'];
        return {
            filters: newFilters,
        };
    }
    const newFilters = [...filters, filterId];
    return { filters: newFilters };
};

const updateFilterTickets = (state: StateModel, action: any) => {
    if (!state) {
        return {
            filters: ['1', '2'],
        };
    }

    switch (action.type) {
        case 'FILTER_TOGGLE':
            return updateFiltersList(state, action.payload);
        default:
            return state.filterList;
    }
};

export default updateFilterTickets;
