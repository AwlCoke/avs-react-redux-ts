/* eslint-disable no-unused-vars */
import React, { FC } from 'react';
import './items-list.scss';
import Ticket from '../ticket';
import { connect } from 'react-redux';
import { withAviasalesService } from '../hoc';
import { ticketsLoaded } from '../../actions';
import { TicketModel } from '../../models/ticket.model';
import compose from '../../utils/compose';
import { StateModel } from '../../models/state-model';
import ErrorIndicator from '../error-indicator';
import { ProgressBar } from 'react-bootstrap';
import { Progress } from 'antd';

interface ItemsListProps {
    tickets: Array<TicketModel>;
    loading: boolean;
    stop: boolean;
    error: null | Error;
    filters: Array<string>;
}

const ItemsList: FC<ItemsListProps> = ({
    tickets,
    loading,
    error,
    filters,
    stop,
}: ItemsListProps) => {
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
            <Progress
                type="line"
                percent={99.9}
                showInfo={false}
                status="active"
                strokeLinecap="round"
                strokeColor="#2196f3"
            />
            <div className="items-container">{elements}</div>
        </>
    );
};

const mapStateToProps = (state: StateModel) => {
    const {
        ticketList: { tickets, loading, error, stop },
        filterList: { filters },
    } = state;
    return { tickets, loading, error, filters, stop };
};

const mapDispatchToProps = { ticketsLoaded };

export default compose(
    withAviasalesService(),
    connect(mapStateToProps, mapDispatchToProps),
)(ItemsList);
