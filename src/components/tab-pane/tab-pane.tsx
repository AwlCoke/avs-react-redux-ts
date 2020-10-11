// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import './tab-pane.scss';
// eslint-disable-next-line no-unused-vars
import { StateModel } from '../../models/state-model';
import { tabChanged } from '../../actions';
import { connect } from 'react-redux';

interface TabPaneProps {
    tab: string;
    onTabToggle: (id: string) => void;
}

const TabPane: FC<TabPaneProps> = ({ tab, onTabToggle }: TabPaneProps) => {
    let cheapestClassNames = 'tab tab--left';
    let fastestClassNames = 'tab tab--right';

    if (tab === 'cheapest') {
        cheapestClassNames += ' tab--active';
    }

    if (tab === 'fastest') {
        fastestClassNames += ' tab--active';
    }

    return (
        <div className="tabs-pane">
            <button
                onClick={() => onTabToggle('cheapest')}
                className={cheapestClassNames}
                id="cheapest"
            >
                Самый дешевый
            </button>
            <button
                onClick={() => onTabToggle('fastest')}
                className={fastestClassNames}
                id="fastest"
            >
                Самый быстрый
            </button>
        </div>
    );
};

const mapStateToProps = (state: StateModel) => {
    const {
        ticketList: { tab },
    } = state;
    return { tab };
};

const mapDispatchProps = (dispatch: any) => {
    return {
        onTabToggle: (id: string) => dispatch(tabChanged(id)),
    };
};

export default connect(mapStateToProps, mapDispatchProps)(TabPane);
