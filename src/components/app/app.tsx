// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import '../../scss/base-style.scss';
import './app.scss';
import Filters from '../filters';
import ItemsList from '../ticket-list';
import TabPane from '../tab-pane';

const App: FC = () => {
    return (
        <div className="app">
            <header className="header">
                {/* eslint-disable-next-line no-undef */}
                <img src={require('../../img/logo.svg')} alt="logo" />
            </header>
            <main className="wrapper">
                <Filters />
                <div className="content">
                    <TabPane />
                    <ItemsList />
                </div>
            </main>
        </div>
    );
};

export default App;
