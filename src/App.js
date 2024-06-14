import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import React, { useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';

const App = () => {
    const [events, setEvents] = useState([]);

    const addEvent = (event) => {
        event.id = Date.now();
        setEvents([...events, event]);
    };

    const deleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    const editEvent = (id, updatedEvent) => {
        setEvents(events.map(event => (event.id === id ? { ...event, ...updatedEvent } : event)));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Event Management System</h1>
            <EventForm onAddEvent={addEvent} />
            <hr />
            <h2 className="mb-3">Upcoming Events</h2>
            <EventList events={events} onDelete={deleteEvent} onEdit={editEvent} />
        </div>
    );
};

export default App;
