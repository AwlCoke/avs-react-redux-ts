// eslint-disable-next-line no-unused-vars
import { StateModel } from '../models/state.model';

const onlyUnique = (value: string, index: number, self: any) => {
    return self.indexOf(value) === index;
};

export const updateFilterList = (state: StateModel, filterId: string) => {
    const { filters } = state;
    const idx = filters.findIndex((filter: string) => filter === filterId);
    const indexOfAll = filters.findIndex((filter: string) => filter === 'all');
    if (filterId === 'all') {
        if (idx !== -1) {
            return [];
        }
        return [...filters, 'all', '0', '1', '2', '3'].filter(onlyUnique);
    }
    if (idx !== -1) {
        if (indexOfAll !== -1) {
            return filters.filter((filter: string) => filter !== filterId && filter !== 'all');
        }
        return [...filters.slice(0, idx), ...filters.slice(idx + 1)];
    }
    if (filters.length === 3) {
        return [...filters, filterId, 'all'];
    }
    return [...filters, filterId];
};
