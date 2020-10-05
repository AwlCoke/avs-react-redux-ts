// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import './items-list.scss';
import Ticket from '../ticket';

const ItemsList: FC = () => {
    return (
        <div className="items-container">
            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    );
};

export default ItemsList;
