/* eslint-disable no-unused-vars */
import React, { FC } from 'react';
import './ticket-list.scss';
import Ticket from '../ticket';
import { connect } from 'react-redux';
import { withAviasalesService } from '../hoc';
import { TicketModel } from '../../models/ticket.model';
import compose from '../../utils/compose';
import { StateModel } from '../../models/state.model';
import ErrorIndicator from '../error-indicator';
import { Progress } from 'antd';
import ErrorBoundary from '../error-boundary';
import { filterTickets } from '../../selectors';

interface Props {
    tickets: Array<TicketModel>;
    isFetchingDone: boolean;
    error: null | Error;
    filters: Array<string>;
    sortTickets: (state: StateModel, tab: string) => void;
}

const TicketList: FC<Props> = ({ tickets, error, isFetchingDone, filters }: Props) => {
    const elements = tickets.slice(0, 10).map((ticket, idx) => {
        let baseId = 100;
        const { price, carrier, segments } = ticket;
        return (
            <div key={baseId + idx}>
                <Ticket price={price} carrier={carrier} segments={segments} />
            </div>
        );
    });

    if (!tickets.length && !filters.length)
        return (
            <div style={{ width: '100%', padding: 20, borderRadius: 5, backgroundColor: 'white' }}>
                Рейсов, подходящих под заданные фильтры, не найдено
            </div>
        );

    if (error) return <ErrorIndicator />;

    return (
        <ErrorBoundary>
            {!isFetchingDone && tickets.length && (
                <Progress
                    style={{ marginBottom: '-5px', zIndex: 1 }}
                    type="line"
                    percent={99.9}
                    showInfo={false}
                    status="active"
                    strokeLinecap="round"
                    strokeColor="#2196f3"
                />
            )}
            <div className="items-container">{elements}</div>
            {tickets.length && (
                <button
                    style={{
                        width: 200,
                        padding: 10,
                        margin: '0 auto',
                        marginBottom: 20,
                        backgroundColor: '#2196f3',
                        color: 'white',
                        borderRadius: 5,
                        fontSize: '1.2em',
                    }}
                >
                    Показать еще
                </button>
            )}
        </ErrorBoundary>
    );
};

const mapStateToProps = (state: StateModel) => {
    const { error, isFetchingDone, filters } = state;
    const tickets = [...filterTickets(state)];
    return { tickets, error, filters, isFetchingDone };
};

export default compose(withAviasalesService(), connect(mapStateToProps))(TicketList);
