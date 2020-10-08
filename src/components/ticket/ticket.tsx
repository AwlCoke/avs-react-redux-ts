// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import './ticket.scss';
import { format } from 'date-fns';

interface TicketProps {
    price: number;
    carrier: string;
    segments: Array<{
        origin: string;
        destination: string;
        date: string;
        stops: string[];
        duration: number;
    }>;
}

const Ticket: FC<TicketProps> = ({ price, carrier, segments }: TicketProps) => {
    const formatPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    const ticketSegments = segments.map((segment, idx) => {
        let baseId = 10;
        const { origin, destination, date, stops, duration } = segment;
        const stopsCount = !stops.length
            ? 'Без пересадок'
            : stops.length === 1
            ? '1 Пересадка'
            : `${stops.length} Пересадки`;
        const stopsList = !stops.length ? ' ' : stops.join(', ');
        const formatDate = format(new Date(date), 'HH:mm');
        let hours = `${Math.floor(duration / 60)}ч`;
        const minutes = `${duration % 60}м`;

        return (
            <div className="ticket-segment" key={baseId + idx}>
                <div className="ticket-segment_route">
                    <span className="ticket--headers">
                        {origin} - {destination}
                    </span>
                    <span className="ticket-segment_date">{formatDate}</span>
                </div>
                <div className="ticket-segment_duration">
                    <span className="ticket--headers">В Пути</span>
                    <span>
                        {hours} {minutes}
                    </span>
                </div>
                <div className="ticket-segment_stops">
                    <span className="ticket--headers">{stopsCount.toUpperCase()}</span>
                    <span>{stopsList}</span>
                </div>
            </div>
        );
    });

    const logoSRC = `https://pics.avs.io/99/36/${carrier}.png`;

    return (
        <div className="ticket">
            <div className="ticket-price">{formatPrice} P</div>
            <img className="ticket-carrier" src={logoSRC} alt={`${carrier} logo`} />
            <div className="ticket-segments-box">{ticketSegments}</div>
        </div>
    );
};

export default Ticket;
