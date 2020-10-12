/* eslint-disable no-unused-vars */
import React, { FC, useEffect } from 'react';
import './ticket-list.scss';
import Ticket from '../ticket';
import { connect } from 'react-redux';
import { withAviasalesService } from '../hoc';
import { TicketModel } from '../../models/ticket.model';
import compose from '../../utils/compose';
import { StateModel } from '../../models/state.model';
import ErrorIndicator from '../error-indicator';
import { Progress } from 'antd';
import { fetchTicketsIfNeeded } from '../../actions';
import ErrorBoundary from '../error-boundary';

interface Props {
    tickets: Array<TicketModel>;
    isFetchingDone: boolean;
    error: null | Error;
    filters: Array<string>;
    sortTickets: (state: StateModel, tab: string) => void;
    ticketRequested: () => void;
}

const TicketList: FC<Props> = ({ tickets, error, filters, isFetchingDone }: Props) => {
    useEffect(() => {
        if (!isFetchingDone) fetchTicketsIfNeeded();
    }, [isFetchingDone]);

    let ticketsToRender = 10;

    const elements = tickets.slice(0, 10).map((ticket, idx) => {
        let baseId = 100;
        const { price, carrier, segments } = ticket;
        return (
            <div key={baseId + idx}>
                <Ticket filters={filters} price={price} carrier={carrier} segments={segments} />
            </div>
        );
    });

    if (!filters.length) return <div>Рейсов, подходящих под заданные фильтры, не найдено</div>;

    if (error) return <ErrorIndicator />;

    return (
        <ErrorBoundary>
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
        </ErrorBoundary>
    );
};

const mapStateToProps = (state: StateModel) => {
    const {
        ticketList: { tickets, error, isFetchingDone },
        filterList: { filters },
    } = state;
    return { tickets, error, filters, isFetchingDone };
};

const mapDispatchProps = (dispatch: any) => {
    return {
        fetchTicketsIfNeeded: dispatch(fetchTicketsIfNeeded()),
    };
};

export default compose(
    withAviasalesService(),
    connect(mapStateToProps, mapDispatchProps),
)(TicketList);
