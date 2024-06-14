import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events, onDelete, onEdit }) => {
    return (
        <div className="row mt-3 event-list">
            {events.map(event => (
                <EventCard key={event.id} event={event} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    );
};

export default EventList;
