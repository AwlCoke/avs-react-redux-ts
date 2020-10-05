// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import './tab-pane.scss';

const TabPane: FC = () => {
    return (
        <div className="tabs-pane">
            <button className="tab tab--left tab--active">Самый дешевый</button>
            <button className="tab tab--right">Самый быстрый</button>
        </div>
    );
};

export default TabPane;
