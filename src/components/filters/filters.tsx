/* eslint-disable jsx-a11y/label-has-for */
// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import './filters.scss';

const Filters: FC = () => {
    return (
        <div className="filters-container">
            <h1 className="filters-header"> Количество пересадок </h1>
            <form className="filters-form">
                <label className="filter">
                    <input type="checkbox" className="filter-btn" />
                    Все
                </label>
                <label className="filter">
                    <input type="checkbox" className="filter-btn" />
                    Без пересадок
                </label>
                <label className="filter">
                    <input type="checkbox" className="filter-btn" />1 пересадка
                </label>
                <label className="filter">
                    <input type="checkbox" className="filter-btn" />2 пересадки
                </label>
                <label className="filter">
                    <input type="checkbox" className="filter-btn" />3 пересадки
                </label>
            </form>
        </div>
    );
};

export default Filters;
