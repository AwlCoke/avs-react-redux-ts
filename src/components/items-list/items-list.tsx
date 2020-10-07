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

interface ItemsListProps {
    aviasalesService: AviasalesServiceInterface;
    ticketsLoaded: (arg: Array<TicketModel>) => TicketLoadedActionModel;
    tickets: Array<TicketModel>;
    loading: boolean;
}

const ItemsList: FC<ItemsListProps> = ({
    aviasalesService,
    ticketsLoaded,
    tickets,
    loading,
}: ItemsListProps) => {
    useEffect(() => {
        async function fetchData() {
            const response = await aviasalesService.getTickets();
            ticketsLoaded(response);
        }
        fetchData();
    }, [ticketsLoaded, aviasalesService]);

    const elements = tickets.map((ticket) => {
        return (
            <div key={ticket.price}>
                <Ticket />
            </div>
        );
    });

    if (loading) return <div>LOADING...</div>;

    return <div className="items-container">{elements}</div>;
};

const mapStateToProps = (state: StateModel) => {
    const { tickets, loading } = state;
    return { tickets, loading };
};

const mapDispatchToProps = { ticketsLoaded };

export default compose(
    withAviasalesService(),
    connect(mapStateToProps, mapDispatchToProps),
)(ItemsList);
