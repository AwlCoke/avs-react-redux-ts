/* eslint-disable no-unused-vars */
import React, { FC, useEffect } from 'react';
import './items-list.scss';
import Ticket from '../ticket';
import { connect } from 'react-redux';
import { withAviasalesService } from '../hoc';
import { TicketModel } from '../../models/ticket.model';
import compose from '../../utils/compose';
import { StateModel } from '../../models/state-model';
import ErrorIndicator from '../error-indicator';
import { Progress } from 'antd';
import { fetchTicketsIfNeeded } from '../../actions';

interface ItemsListProps {
    tickets: Array<TicketModel>;
    loading: boolean;
    isFetchingDone: boolean;
    error: null | Error;
    filters: Array<string>;
    sortTickets: (state: StateModel, tab: string) => void;
    ticketRequested: () => void;
}

const ItemsList: FC<ItemsListProps> = ({
    tickets,
    loading,
    error,
    filters,
    isFetchingDone,
}: ItemsListProps) => {
    useEffect(() => {
        if (!isFetchingDone) fetchTicketsIfNeeded();
    }, [isFetchingDone]);

    const elements = tickets.map((ticket, idx) => {
        let baseId = 100;
        const { price, carrier, segments } = ticket;
        return (
            <div key={baseId + idx}>
                <Ticket filters={filters} price={price} carrier={carrier} segments={segments} />
            </div>
        );
    });

    if (!filters.length) return <div>Рейсов, подходящих под заданные фильтры, не найдено</div>;

    if (loading) return <div>LOADING...</div>;

    if (error) return <ErrorIndicator />;

    return (
        <>
            {!isFetchingDone && (
                <Progress
                    type="line"
                    percent={99.9}
                    showInfo={false}
                    status="active"
                    strokeLinecap="round"
                    strokeColor="#2196f3"
                />
            )}
            <div className="progress-bar progress-bar--animated">
                <span style={{ width: '99%' }}>
                    <span />
                </span>
            </div>
            <div className="items-container">{elements}</div>
        </>
    );
};

const mapStateToProps = (state: StateModel) => {
    const {
        ticketList: { tickets, loading, error, isFetchingDone },
        filterList: { filters },
    } = state;
    return { tickets, loading, error, filters, isFetchingDone };
};

const mapDispatchProps = (dispatch: any) => {
    return {
        fetchTicketsIfNeeded: dispatch(fetchTicketsIfNeeded()),
    };
};

export default compose(
    withAviasalesService(),
    connect(mapStateToProps, mapDispatchProps),
)(ItemsList);
