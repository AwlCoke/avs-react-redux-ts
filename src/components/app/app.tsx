import React from 'react';
import '../../scss/zero.scss';
import './app.scss';
import Filters from '../filters';
import ItemsList from '../items-list';
import TabPane from '../tab-pane';

function App() {
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
}

export default App;
