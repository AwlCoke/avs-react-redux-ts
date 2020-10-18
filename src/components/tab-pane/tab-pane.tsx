// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import './tab-pane.scss';
// eslint-disable-next-line no-unused-vars
import { StateModel } from '../../models/state.model';
import { tabChanged } from '../../store/actions';
import { connect } from 'react-redux';
import classNames from 'classnames';

interface TabPaneProps {
    tab: string;
    onTabToggle: (id: string) => void;
}

const TabPane: FC<TabPaneProps> = ({ tab, onTabToggle }: TabPaneProps) => {
    const cheapestClasses = classNames('tab', 'tab--left', { 'tab--active': tab === 'cheapest' });
    let fastestClasses = classNames('tab', 'tab--right', { 'tab--active': tab === 'fastest' });

    return (
        <div className="tabs-pane">
            <button
                onClick={() => onTabToggle('cheapest')}
                className={cheapestClasses}
                id="cheapest"
            >
                Самый дешевый
            </button>
            <button onClick={() => onTabToggle('fastest')} className={fastestClasses} id="fastest">
                Самый быстрый
            </button>
        </div>
    );
};

const mapStateToProps = (state: StateModel) => {
    const { tab } = state;
    return { tab };
};

const mapDispatchProps = (dispatch: any) => {
    return {
        onTabToggle: (id: string) => dispatch(tabChanged(id)),
    };
};

export default connect(mapStateToProps, mapDispatchProps)(TabPane);
