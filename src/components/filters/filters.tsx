/* eslint-disable jsx-a11y/label-has-for */
// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import './filters.scss';
// eslint-disable-next-line no-unused-vars
import { StateModel } from '../../models/state-model';
import { toggleAllFilters, toggleFilter } from '../../actions';
import { connect } from 'react-redux';

interface FiltersProps {
    filters: Array<string>;
    onFilterToggle: (filter: string) => void;
    toggleAllFilters: (filter: string) => void;
}

const Filters: FC<FiltersProps> = ({ filters, onFilterToggle, toggleAllFilters }: FiltersProps) => {
    return (
        <div className="filters-container">
            <h1 className="filters-header"> Количество пересадок </h1>
            <form className="filters-form">
                <input
                    type="checkbox"
                    id="all"
                    className="filter-btn"
                    checked={filters.includes('all')}
                    onChange={() => toggleAllFilters('all')}
                />
                <label htmlFor="all" className="filter">
                    Все
                </label>
                <input
                    type="checkbox"
                    id="no-stops"
                    className="filter-btn"
                    checked={filters.includes('all') || filters.includes('no-stops')}
                    onChange={() => onFilterToggle('no-stops')}
                />
                <label htmlFor="no-stops" className="filter">
                    Без пересадок
                </label>
                <input
                    type="checkbox"
                    id="one-stop"
                    className="filter-btn"
                    checked={filters.includes('all') || filters.includes('one-stop')}
                    onChange={() => onFilterToggle('one-stop')}
                />
                <label htmlFor="one-stop" className="filter">
                    1 пересадка
                </label>
                <input
                    type="checkbox"
                    id="two-stops"
                    className="filter-btn"
                    checked={filters.includes('all') || filters.includes('two-stops')}
                    onChange={() => onFilterToggle('two-stops')}
                />
                <label htmlFor="two-stops" className="filter">
                    2 пересадки
                </label>
                <input
                    type="checkbox"
                    id="three-stops"
                    className="filter-btn"
                    checked={filters.includes('all') || filters.includes('three-stops')}
                    onChange={() => onFilterToggle('three-stops')}
                />
                <label htmlFor="three-stops" className="filter">
                    3 пересадки
                </label>
            </form>
        </div>
    );
};

const mapStateToProps = (state: StateModel) => {
    const { filters } = state;
    return { filters };
};

const mapDispatchProps = {
    onFilterToggle: toggleFilter,
    toggleAllFilters: toggleAllFilters,
};

export default connect(mapStateToProps, mapDispatchProps)(Filters);
