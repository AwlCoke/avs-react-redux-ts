/* eslint-disable no-unused-vars */
import React, { FC, useEffect } from 'react';
import './items-list.scss';
import Ticket from '../ticket';
import { connect } from 'react-redux';
import { withAviasalesService } from '../hoc';
import { ticketsLoaded } from '../../actions';
import { TicketModel } from '../../models/ticket.model';
import { TicketLoadedActionModel } from '../../models/ticket-loaded-action.model';
import { AviasalesServiceInterface } from '../../models/aviasales-service-interface';
import compose from '../../utils/compose';
import { StateModel } from '../../models/state-model';
import ErrorIndicator from '../error-indicator';

interface ItemsListProps {
    aviasalesService: AviasalesServiceInterface;
    ticketsLoaded: (arg: Array<TicketModel>) => TicketLoadedActionModel;
    tickets: Array<TicketModel>;
    loading: boolean;
    error: null | Error;
}

const ItemsList: FC<ItemsListProps> = ({
    aviasalesService,
    ticketsLoaded,
    tickets,
    loading,
    error,
}: ItemsListProps) => {
    useEffect(() => {
        async function fetchData() {
            const response = await aviasalesService.getTickets();
            ticketsLoaded(response.tickets);
        }
        fetchData();
    }, [ticketsLoaded, aviasalesService]);

    const elements = tickets.map((ticket, idx) => {
        let baseId = 100;
        const { price, carrier, segments } = ticket;
        return (
            <div key={baseId + idx}>
                <Ticket price={price} carrier={carrier} segments={segments} />
            </div>
        );
    });

    if (loading) return <div>LOADING...</div>;

    if (error) return <ErrorIndicator />;

    return <div className="items-container">{elements}</div>;
};

const mapStateToProps = (state: StateModel) => {
    const { tickets, loading, error } = state;
    return { tickets, loading, error };
};

const mapDispatchToProps = { ticketsLoaded };

export default compose(
    withAviasalesService(),
    connect(mapStateToProps, mapDispatchToProps),
)(ItemsList);
