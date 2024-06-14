import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (eventName && eventDate && eventDescription) {
            onAddEvent({ name: eventName, date: eventDate, description: eventDescription });
            setEventName('');
            setEventDate('');
            setEventDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="eventName" className="form-label">Event Name</label>
                <input type="text" className="form-control" id="eventName" required value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Enter The Event Name" />
            </div>
            <div className="mb-3">
                <label htmlFor="eventDate" className="form-label">Event Date</label>
                <input type="date" className="form-control" id="eventDate" required value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="eventDescription" className="form-label">Event Description</label>
                <textarea className="form-control" id="eventDescription" rows="3" required value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} placeholder="Enter The Event Description"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Add Event</button>
        </form>
    );
};

export default EventForm;
