/* eslint-disable jsx-a11y/label-has-for */
// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import './filters.scss';
// eslint-disable-next-line no-unused-vars
import { StateModel } from '../../models/state.model';
import { toggleFilter } from '../../store/actions';
import { connect } from 'react-redux';

interface FiltersProps {
    filters: Array<string>;
    onFilterToggle: (filter: string) => void;
}

const Filters: FC<FiltersProps> = ({ filters, onFilterToggle }: FiltersProps) => {
    return (
        <div className="filters-container">
            <h1 className="filters-header"> Количество пересадок </h1>
            <form className="filters-form">
                <input
                    type="checkbox"
                    id="all"
                    className="filter-btn"
                    checked={filters.includes('all')}
                    onChange={() => onFilterToggle('all')}
                />
                <label htmlFor="all" className="filter">
                    Все
                </label>
                <input
                    type="checkbox"
                    id="no-stops"
                    className="filter-btn"
                    checked={filters.includes('all') || filters.includes('0')}
                    onChange={() => onFilterToggle('0')}
                />
                <label htmlFor="no-stops" className="filter">
                    Без пересадок
                </label>
                <input
                    type="checkbox"
                    id="one-stop"
                    className="filter-btn"
                    checked={filters.includes('all') || filters.includes('1')}
                    onChange={() => onFilterToggle('1')}
                />
                <label htmlFor="one-stop" className="filter">
                    1 пересадка
                </label>
                <input
                    type="checkbox"
                    id="two-stops"
                    className="filter-btn"
                    checked={filters.includes('all') || filters.includes('2')}
                    onChange={() => onFilterToggle('2')}
                />
                <label htmlFor="two-stops" className="filter">
                    2 пересадки
                </label>
                <input
                    type="checkbox"
                    id="three-stops"
                    className="filter-btn"
                    checked={filters.includes('all') || filters.includes('3')}
                    onChange={() => onFilterToggle('3')}
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
};

export default connect(mapStateToProps, mapDispatchProps)(Filters);
