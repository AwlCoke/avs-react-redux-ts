/* eslint-disable jsx-a11y/label-has-for */
// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import './filters.scss';

const Filters: FC = () => {
    return (
        <div className="filters-container">
            <h1 className="filters-header"> Количество пересадок </h1>
            <form className="filters-form">
                <input type="checkbox" id="all" className="filter-btn" />
                <label htmlFor="all" className="filter">
                    Все
                </label>
                <input type="checkbox" id="no-stops" className="filter-btn" />
                <label htmlFor="no-stops" className="filter">
                    Без пересадок
                </label>
                <input type="checkbox" id="one-stop" className="filter-btn" />
                <label htmlFor="one-stop" className="filter">
                    1 пересадка
                </label>
                <input type="checkbox" id="two-stops" className="filter-btn" />
                <label htmlFor="two-stops" className="filter">
                    2 пересадки
                </label>
                <input type="checkbox" id="three-stops" className="filter-btn" />
                <label htmlFor="three-stops" className="filter">
                    3 пересадки
                </label>
            </form>
        </div>
    );
};

export default Filters;
