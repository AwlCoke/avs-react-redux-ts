// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import './ticket.scss';

const Ticket: FC = () => {
    return (
        <div className="ticket">
            <div className="ticket-price">PRICE</div>
            <div className="ticket-carrier">CARRIER LOGO</div>
            <div className="ticket-segment">
                <div className="ticket-segment_route">
                    <span className="ticket--headers">MOW-HKT</span>
                </div>
                <div className="ticket-segment_date">
                    <span>DATE</span>
                </div>
                <div className="ticket-segment_duration">
                    <span className="ticket--headers">В Пути</span>
                    <span>TIME</span>
                </div>
                <div className="ticket-segment_stops">
                    <span className="ticket--headers">2 пересадки</span>
                    <span>HKG, JNB</span>
                </div>
            </div>
            <div className="ticket-segment">
                <div className="ticket-segment_route">
                    <span className="ticket--headers">MOW-HKT</span>
                </div>
                <div className="ticket-segment_date">
                    <span>DATE</span>
                </div>
                <div className="ticket-segment_duration">
                    <span className="ticket--headers">В Пути</span>
                    <span>TIME</span>
                </div>
                <div className="ticket-segment_stops">
                    <span className="ticket--headers">1 пересадки</span>
                    <span>HKG</span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
