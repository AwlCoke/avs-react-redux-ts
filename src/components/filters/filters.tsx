/* eslint-disable jsx-a11y/label-has-for */
// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import './filters.scss';
// eslint-disable-next-line no-unused-vars
import { StateModel } from '../../models/state-model';
// eslint-disable-next-line no-unused-vars
import { tabChanged } from '../../actions';

const Filters: FC = () => {
    return (
        <div className="filters-container">
            <h1 className="filters-header"> Количество пересадок </h1>
            <form className="filters-form">
                <input type="checkbox" id="all" className="filter-btn" checked />
                <label htmlFor="all" className="filter">
                    Все
                </label>
                <input type="checkbox" id="no-stops" className="filter-btn" checked />
                <label htmlFor="no-stops" className="filter">
                    Без пересадок
                </label>
                <input type="checkbox" id="one-stop" className="filter-btn" checked />
                <label htmlFor="one-stop" className="filter">
                    1 пересадка
                </label>
                <input type="checkbox" id="two-stops" className="filter-btn" checked />
                <label htmlFor="two-stops" className="filter">
                    2 пересадки
                </label>
                <input type="checkbox" id="three-stops" className="filter-btn" checked />
                <label htmlFor="three-stops" className="filter">
                    3 пересадки
                </label>
            </form>
        </div>
    );
};

// const mapStateToProps = (state: StateModel) => {
//     const { filter } = state;
//     return { filter };
// };

// const mapDispatchProps = {};

export default Filters;
